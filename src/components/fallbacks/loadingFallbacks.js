// loadingFallbacks.js - Sistema de fallbacks avanzado usando motion

import { animate, stagger, timeline } from 'motion';

// Duración por defecto de las animaciones
const DEFAULT_DURATION = 0.6;

// Opción para respetar prefers-reduced-motion
const shouldReduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Crea un efecto de "skeleton loading" para un elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {Object} options - Opciones de configuración
 */
export function createSkeletonLoader(element, options = {}) {
  const {
    duration = DEFAULT_DURATION,
    backgroundColor = 'rgba(200, 200, 200, 0.3)',
    highlightColor = 'rgba(220, 220, 220, 0.5)',
    repeat = Infinity,
    reduceMotion = shouldReduceMotion(),
  } = options;

  // Guardar el estilo original
  const originalStyle = {
    backgroundColor: element.style.backgroundColor,
    transition: element.style.transition,
    overflow: element.style.overflow
  };

  // Aplicar estilo de skeleton
  element.style.backgroundColor = backgroundColor;
  element.style.overflow = 'hidden';
  element.setAttribute('aria-busy', 'true');
  
  // Crear elemento de highlight que se moverá a través del skeleton
  const highlight = document.createElement('div');
  highlight.classList.add('skeleton-highlight');
  highlight.style.position = 'absolute';
  highlight.style.top = '0';
  highlight.style.left = '-100%';
  highlight.style.width = '100%';
  highlight.style.height = '100%';
  highlight.style.background = `linear-gradient(90deg, transparent, ${highlightColor}, transparent)`;
  highlight.style.zIndex = '1';
  
  // Solo agregar el highlight si no estamos en modo de movimiento reducido
  if (!reduceMotion) {
    const originalPosition = element.style.position;
    if (element.style.position !== 'relative' && element.style.position !== 'absolute') {
      element.style.position = 'relative';
    }
    element.appendChild(highlight);
    
    // Animar el highlight
    const animation = animate(
      highlight, 
      { x: ['0%', '200%'] },
      { duration: duration * 2, repeat, ease: 'linear' }
    );
    
    // Retornar función para detener y limpiar
    return () => {
      animation.stop();
      element.style.backgroundColor = originalStyle.backgroundColor;
      element.style.transition = originalStyle.transition;
      element.style.overflow = originalStyle.overflow;
      element.style.position = originalPosition;
      element.removeAttribute('aria-busy');
      if (element.contains(highlight)) {
        element.removeChild(highlight);
      }
    };
  }
  
  // Versión simplificada para movimiento reducido
  return () => {
    element.style.backgroundColor = originalStyle.backgroundColor;
    element.style.transition = originalStyle.transition;
    element.style.overflow = originalStyle.overflow;
    element.removeAttribute('aria-busy');
  };
}

/**
 * Crea un efecto de shimmer para elementos de texto o imágenes
 */
export function createShimmerEffect(elements, options = {}) {
  const {
    duration = DEFAULT_DURATION,
    staggerDelay = 0.1,
    baseColor = 'rgba(200, 200, 200, 0.3)',
    highlightColor = 'rgba(255, 255, 255, 0.8)',
    reduceMotion = shouldReduceMotion()
  } = options;
  
  const elementsArray = Array.isArray(elements) ? elements : [elements];
  const cleanupFunctions = [];
  
  elementsArray.forEach((element, index) => {
    // Guardar estado original
    const originalBackground = element.style.background;
    const originalPosition = element.style.position;
    
    // Configurar elementos con estilo de skeleton
    element.style.background = baseColor;
    if (element.style.position !== 'relative' && element.style.position !== 'absolute') {
      element.style.position = 'relative';
    }
    element.setAttribute('aria-busy', 'true');
    
    if (!reduceMotion) {
      // Crear efecto de shimmer
      const shimmer = document.createElement('div');
      shimmer.style.position = 'absolute';
      shimmer.style.top = '0';
      shimmer.style.left = '-100%';
      shimmer.style.width = '100%';
      shimmer.style.height = '100%';
      shimmer.style.background = `linear-gradient(90deg, transparent, ${highlightColor}, transparent)`;
      shimmer.style.transform = 'skewX(-20deg)';
      shimmer.style.zIndex = '1';
      element.appendChild(shimmer);
      
      // Animar con stagger basado en índice
      const delay = index * staggerDelay;
      const animation = animate(
        shimmer,
        { x: ['0%', '200%'] },
        { 
          duration: duration * 1.5, 
          delay, 
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1] 
        }
      );
      
      // Función para limpiar
      cleanupFunctions.push(() => {
        animation.stop();
        element.style.background = originalBackground;
        element.style.position = originalPosition;
        element.removeAttribute('aria-busy');
        if (element.contains(shimmer)) {
          element.removeChild(shimmer);
        }
      });
    } else {
      // Versión para movimiento reducido
      cleanupFunctions.push(() => {
        element.style.background = originalBackground;
        element.style.position = originalPosition;
        element.removeAttribute('aria-busy');
      });
    }
  });
  
  // Retornar función para detener todos los efectos
  return () => cleanupFunctions.forEach(cleanup => cleanup());
}

/**
 * Crea un fallback para imágenes con efecto de fade-in al cargar
 */
export function createImageFallback(imgElement, options = {}) {
  const {
    placeholderColor = 'rgba(200, 200, 200, 0.3)',
    fadeInDuration = 0.5,
    shimmerEffect = true,
    reduceMotion = shouldReduceMotion()
  } = options;
  
  // Si la imagen ya está cargada, simplemente hacerla visible
  if (imgElement.complete) {
    // Marcar como cargada usando la clase
    imgElement.classList.add('loaded');
    return () => {};
  }
  
  // Guardar el estado original
  const originalOpacity = imgElement.style.opacity;
  const originalTransition = imgElement.style.transition;
  
  // Si la imagen tiene la clase 'fallback-fade', usar esa clase para controlar la opacidad
  // en lugar de manipular directamente el estilo
  if (!imgElement.classList.contains('fallback-fade')) {
    imgElement.style.opacity = '0';
  }
  
  imgElement.setAttribute('aria-busy', 'true');
  
  // Crear placeholder para la imagen
  const placeholder = document.createElement('div');
  placeholder.style.position = 'absolute';
  placeholder.style.top = '0';
  placeholder.style.left = '0';
  placeholder.style.width = '100%';
  placeholder.style.height = '100%';
  placeholder.style.backgroundColor = placeholderColor;
  placeholder.style.zIndex = '0';
  
  // Configurar posición relativa en el contenedor si es necesario
  const container = imgElement.parentElement;
  const originalContainerPosition = container.style.position;
  if (container.style.position !== 'relative' && container.style.position !== 'absolute') {
    container.style.position = 'relative';
  }
  
  // Añadir placeholder
  container.insertBefore(placeholder, imgElement);
  
  // Añadir efecto de shimmer si está habilitado
  let shimmerCleanup = null;
  if (shimmerEffect && !reduceMotion) {
    shimmerCleanup = createShimmerEffect(placeholder, {
      baseColor: 'transparent',
      reduceMotion
    });
  }
  
  // Función para manejar la carga de imagen
  const handleImageLoad = () => {
    // Animar la imagen cargada con fade-in
    if (imgElement.classList.contains('fallback-fade')) {
      imgElement.classList.add('loaded');
    } else {
      imgElement.style.transition = `opacity ${fadeInDuration}s ease`;
      imgElement.style.opacity = '1';
    }
    
    imgElement.removeAttribute('aria-busy');
    
    // Limpiar shimmer si existe
    if (shimmerCleanup) shimmerCleanup();
    
    // Eliminar placeholder después de la transición
    setTimeout(() => {
      if (container.contains(placeholder)) {
        container.removeChild(placeholder);
      }
      container.style.position = originalContainerPosition;
    }, fadeInDuration * 1000);
    
    // Eliminar event listener
    imgElement.removeEventListener('load', handleImageLoad);
  };
  
  // Agregar listener para la carga
  imgElement.addEventListener('load', handleImageLoad);
  
  // Retornar función de limpieza
  return () => {
    imgElement.removeEventListener('load', handleImageLoad);
    
    if (!imgElement.classList.contains('fallback-fade')) {
      imgElement.style.opacity = originalOpacity;
      imgElement.style.transition = originalTransition;
    } else {
      imgElement.classList.add('loaded');
    }
    
    imgElement.removeAttribute('aria-busy');
    
    if (shimmerCleanup) shimmerCleanup();
    
    if (container.contains(placeholder)) {
      container.removeChild(placeholder);
    }
    container.style.position = originalContainerPosition;
  };
}

/**
 * Crea un sistema de fallback para secciones de contenido
 */
export function createContentFallback(container, options = {}) {
  const {
    itemSelector = '[data-fallback]',
    duration = DEFAULT_DURATION,
    staggerDelay = 0.1,
    shimmerEffect = true,
    placeholderColor = 'rgba(200, 200, 200, 0.3)',
    reduceMotion = shouldReduceMotion()
  } = options;
  
  // Seleccionar elementos para fallback
  const items = container.querySelectorAll(itemSelector);
  
  // Inicializar array para funciones de limpieza
  const cleanupFunctions = [];
  
  items.forEach((item, index) => {
    // Detectar el tipo de elemento
    const isImage = item.tagName === 'IMG' || item.querySelector('img');
    
    // Crear el fallback adecuado
    if (isImage) {
      const imgElement = item.tagName === 'IMG' ? item : item.querySelector('img');
      const cleanup = createImageFallback(imgElement, {
        placeholderColor,
        reduceMotion
      });
      cleanupFunctions.push(cleanup);
    } else if (shimmerEffect) {
      const cleanup = createShimmerEffect(item, {
        duration,
        staggerDelay,
        baseColor: placeholderColor,
        reduceMotion
      });
      cleanupFunctions.push(cleanup);
    } else {
      const cleanup = createSkeletonLoader(item, {
        duration,
        backgroundColor: placeholderColor,
        reduceMotion
      });
      cleanupFunctions.push(cleanup);
    }
  });
  
  // Retornar función para limpiar todos los fallbacks
  return () => cleanupFunctions.forEach(cleanup => cleanup());
}

/**
 * Sistema de fallbacks optimizado para lazy loading secciones
 * @param {Element|string} container - El contenedor o selector CSS
 * @param {Object} options - Opciones de configuración
 */
export function initLazyLoadFallbacks(container, options = {}) {
  const containerElement = typeof container === 'string' 
    ? document.querySelector(container) 
    : container;
  
  if (!containerElement) return;
  
  const {
    threshold = 0.1,
    rootMargin = '20px',
    onVisible = null
  } = options;
  
  // Crear el fallback
  const cleanup = createContentFallback(containerElement, options);
  
  // Crear el observer para detectar cuando el contenido es visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ejecutar callback onVisible si existe
          if (onVisible && typeof onVisible === 'function') {
            onVisible(containerElement);
          }
          
          // Limpiar fallback después de un tiempo
          setTimeout(cleanup, 1000);
          
          // Desconectar el observer
          observer.disconnect();
        }
      });
    },
    { 
      threshold, 
      rootMargin 
    }
  );
  
  // Observar el contenedor
  observer.observe(containerElement);
  
  // Retornar función para limpiar manualmente
  return () => {
    cleanup();
    observer.disconnect();
  };
}

// Exportamos todas las funciones
export default {
  createSkeletonLoader,
  createShimmerEffect,
  createImageFallback,
  createContentFallback,
  initLazyLoadFallbacks,
  shouldReduceMotion
};
