// motionConfig.js
// Configuración central para animaciones Motion en el sitio

import { animate, inView, stagger } from 'motion';

/**
 * Configuración para animación de entrada con fade
 */
export const fadeInConfig = {
  opacity: [0, 1],
  y: [30, 0],
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] } // Power3.out equivalent
};

/**
 * Configuración para animación de escala
 */
export const scaleConfig = {
  scale: [0.9, 1],
  opacity: [0, 1],
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } // Back.out(1.7) equivalent
};

/**
 * Configuración para animación de pulso
 */
export const pulseConfig = {
  scale: [1, 1.05, 1],
  transition: { duration: 1.2, repeat: Infinity, ease: "ease-in-out" }
};

/**
 * Configuración para animaciones de stagger
 */
export const staggerConfig = {
  delayChildren: 0.1,
  staggerChildren: 0.1
};

/**
 * Inicializa animaciones de entrada basadas en inView para elementos
 * Esta función debe ser ejecutada en el componente cliente
 */
export function initInViewAnimations() {
  // Entrada con fade
  inView('.motion-fade-in', ({ target }) => {
    animate(
      target, 
      fadeInConfig, 
      { duration: 0.8, easing: [0.17, 0.67, 0.83, 0.67] }
    );
  }, { amount: 0.3 });
  
  // Entrada con escala
  inView('.motion-scale', ({ target }) => {
    animate(
      target, 
      scaleConfig, 
      { duration: 0.6, easing: [0.34, 1.56, 0.64, 1] }
    );
  }, { amount: 0.3 });
  
  // Entrada en stagger
  inView('.motion-stagger', ({ target }) => {
    const children = target.querySelectorAll('.motion-stagger-item');
    if (children.length) {
      animate(
        children, 
        fadeInConfig, 
        { delay: stagger(0.1), easing: [0.17, 0.67, 0.83, 0.67] }
      );
    }
  }, { amount: 0.3 });
}

/**
 * Verifica si se debe reducir el movimiento para accesibilidad
 */
export function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Anima un elemento respetando preferencias de movimiento reducido
 */
export function animateWithAccessibility(
  target, 
  animationProps, 
  options = {}, 
  reducedMotionProps = { opacity: [0, 1] }
) {
  const props = shouldReduceMotion() ? reducedMotionProps : animationProps;
  return animate(target, props, options);
}

export default {
  animate,
  inView,
  stagger,
  fadeInConfig,
  scaleConfig,
  pulseConfig,
  staggerConfig,
  initInViewAnimations,
  shouldReduceMotion,
  animateWithAccessibility
};
