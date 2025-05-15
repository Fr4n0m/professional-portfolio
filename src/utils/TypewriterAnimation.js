// TypewriterAnimation.js
// Componente para manejar la animación de escritura con GSAP

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Registramos el plugin necesario para animar texto
gsap.registerPlugin(TextPlugin);

/**
 * Inicializa la animación de escritura en el elemento especificado
 * @param {string} selector - Selector del elemento que contendrá el texto
 * @param {string} cursorSelector - Selector del elemento que actúa como cursor
 * @param {string} badgeSelector - Selector del elemento badge que se mostrará después
 * @param {Object} options - Opciones adicionales
 */
export function initTypewriterAnimation({
  textSelector = '.typing-text',
  cursorSelector = '.cursor',
  badgeSelector = '.pulsating',
  text,
  duration = 2,
  delay = 0.5,
  cursorBlinkDelay = 0.3,
  badgeDelay = 0.5
} = {}) {
  // Esperamos a que el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector(textSelector);
    const cursorElement = document.querySelector(cursorSelector);
    const badgeElement = document.querySelector(badgeSelector);
    
    if (!textElement) {
      console.error(`Elemento no encontrado: ${textSelector}`);
      return;
    }
    
    // Si no se proporciona texto, intentamos obtenerlo del data-attribute o usamos un texto por defecto
    const textToType = text || textElement.dataset.text || textElement.textContent || "Hey, soy Fran";
    
    // Vaciar el contenido de texto para empezar la animación
    textElement.textContent = '';
    
    // Creamos una timeline para secuenciar las animaciones
    const tl = gsap.timeline();
    
    // Posicionamos el cursor al principio
    gsap.set(cursorElement, {
      left: 0,
      opacity: 1
    });
    
    // Ocultamos el badge inicialmente
    if (badgeElement) {
      gsap.set(badgeElement, {
        opacity: 0,
        y: 15
      });
    }
    
    // Animación de escritura
    tl.to(textElement, {
      duration: duration,
      text: textToType,
      ease: "none",
      delay: delay
    });
    
    // Animación del cursor simultánea
    tl.to(cursorElement, {
      left: `calc(100% - 3px)`,
      duration: duration,
      ease: "steps(" + textToType.length + ")",
    }, delay); // Empezamos al mismo tiempo que el texto
    
    // Animación del parpadeo del cursor después de escribir
    tl.to(cursorElement, {
      opacity: 1,
      duration: 0.1,
      onComplete: () => {
        // Iniciamos la animación de parpadeo
        gsap.to(cursorElement, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)"
        });
      }
    }, `+=${cursorBlinkDelay}`);
    
    // Mostrar el badge después de completar la escritura
    if (badgeElement) {
      tl.to(badgeElement, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, `+=${badgeDelay}`);
    }
  });
}

/**
 * Limpia las animaciones de GSAP para evitar memory leaks
 * @param {string} selector - Selector de los elementos a limpiar
 */
export function cleanupAnimations(selector = '.typing-text, .cursor, .pulsating') {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    gsap.killTweensOf(element);
  });
}

export default { initTypewriterAnimation, cleanupAnimations };
