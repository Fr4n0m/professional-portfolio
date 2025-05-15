// animationsConfig.js
// Configuración central para animaciones GSAP en el sitio

/**
 * Este archivo contiene configuraciones y utilidades para animaciones GSAP
 * que se utilizan en todo el sitio.
 */

// Importamos y configuramos GSAP solo una vez
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registramos los plugins que usaremos
gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Configuración común para animaciones de aparición
export const fadeInConfig = {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power2.out"
};

// Animación para elementos que aparecen en scroll
export function setupScrollAnimations() {
  // Elementos que se animarán al hacer scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length === 0) return;
  
  animatedElements.forEach(element => {
    gsap.from(element, {
      ...fadeInConfig,
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100px",
        toggleActions: "play none none none"
      }
    });
  });
}

// Animación de pulsación para elementos (como badges)
export function createPulsateAnimation(element) {
  if (!element) return;
  
  gsap.to(element, {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// Animación para hover en botones o elementos interactivos
export function setupHoverAnimations() {
  const interactiveElements = document.querySelectorAll('.interactive');
  
  if (interactiveElements.length === 0) return;
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: 1.05, duration: 0.3 });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.3 });
    });
  });
}

// Función para inicializar todas las animaciones comunes
export function initCommonAnimations() {
  document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimations();
    setupHoverAnimations();
  });
}

export default {
  gsap,
  fadeInConfig,
  setupScrollAnimations,
  createPulsateAnimation,
  setupHoverAnimations,
  initCommonAnimations
};
