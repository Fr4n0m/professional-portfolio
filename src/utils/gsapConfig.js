// gsapConfig.js
// Configuración central para animaciones GSAP en el sitio

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';

// Registramos los plugins que usaremos
gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

/**
 * Configuración para animación de entrada con fade
 */
export const fadeInConfig = {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power3.out"
};

/**
 * Configuración para animación de escala
 */
export const scaleConfig = {
  scale: 0.9,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)"
};

/**
 * Configuración para efecto de máquina de escribir
 */
export const typewriterConfig = {
  duration: 2,
  ease: "none",
  delay: 0.5
};

/**
 * Inicializa animaciones básicas para elementos con clases específicas
 */
export function initGlobalAnimations() {
  const fadeElements = document.querySelectorAll('.gsap-fade-in');
  const scaleElements = document.querySelectorAll('.gsap-scale');
  const staggerElements = document.querySelectorAll('.gsap-stagger');
  
  // Fade in animations
  fadeElements.forEach(el => {
    gsap.from(el, {
      ...fadeInConfig,
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
  });
  
  // Scale animations
  scaleElements.forEach(el => {
    gsap.from(el, {
      ...scaleConfig,
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
  });
  
  // Stagger animations for groups
  staggerElements.forEach(container => {
    const children = container.querySelectorAll('.gsap-stagger-item');
    if (children.length) {
      gsap.from(children, {
        ...fadeInConfig,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      });
    }
  });
}

/**
 * Inicializa una animación de escritura para un elemento
 */
export function initTypewriter(selector, text, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;
  
  const config = { ...typewriterConfig, ...options };
  
  if (element.textContent.trim() && !text) {
    text = element.textContent.trim();
    element.textContent = '';
  }
  
  return gsap.to(element, {
    ...config,
    text: text || '',
  });
}

/**
 * Crea una timeline de GSAP
 */
export function createTimeline(options = {}) {
  return gsap.timeline(options);
}

/**
 * Limpia animaciones
 */
export function cleanupAnimations(selector) {
  if (selector) {
    gsap.killTweensOf(document.querySelectorAll(selector));
  } else {
    gsap.globalTimeline.clear();
  }
}

export default {
  gsap,
  fadeInConfig,
  scaleConfig,
  typewriterConfig,
  initGlobalAnimations,
  initTypewriter,
  createTimeline,
  cleanupAnimations
};
