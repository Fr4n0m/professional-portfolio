/**
 * analyticsUtils.js - Utilidades para gestionar servicios de análisis
 * 
 * Este archivo contiene funciones para inicializar y gestionar herramientas
 * de análisis como Google Analytics, respetando las preferencias de privacidad.
 */

import { hasConsent } from './cookieUtils';

/**
 * Inicializa Google Analytics con modo de consentimiento
 * @param {string} measurementId - ID de GA4 (G-XXXXXXXX)
 */
export function initGoogleAnalytics(measurementId) {
  if (!measurementId) {
    console.warn('No se proporcionó un ID de medición para Google Analytics');
    return;
  }

  // Añadir script de Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Configurar gtag con modo de consentimiento
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  
  // Configurar por defecto con consentimiento denegado
  window.gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted', // Siempre permitido para seguridad
    'wait_for_update': 500 // Esperar 500ms por actualización de consentimiento
  });
  
  // Configurar GA4 con el ID proporcionado
  window.gtag('config', measurementId, {
    'anonymize_ip': true,
    'send_page_view': false // No enviar pageview inmediatamente (esperar consentimiento)
  });
  
  // Aplicar configuración de consentimiento actual
  applyAnalyticsConsent();
}

/**
 * Aplica la configuración de consentimiento actual a todas las herramientas de análisis
 */
export function applyAnalyticsConsent() {
  // Google Analytics
  if (typeof window.gtag === 'function') {
    // Actualizar consentimiento de analytics
    window.gtag('consent', 'update', {
      'analytics_storage': hasConsent('analytical') ? 'granted' : 'denied'
    });

    // Actualizar consentimiento de funcionalidades
    window.gtag('consent', 'update', {
      'functionality_storage': hasConsent('functional') ? 'granted' : 'denied'
    });

    // Si hay consentimiento analítico, enviar pageview ahora
    if (hasConsent('analytical')) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }
}

/**
 * Inicializa todos los servicios de análisis
 * Debe llamarse al cargar la página
 */
export function initAnalytics() {
  // Hacemos esta función disponible globalmente
  window.initAnalytics = initAnalytics;
  // IDs de servicios (deberían estar en variables de entorno en producción)
  const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || '';
  
  // Inicializar servicios
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== '') {
    initGoogleAnalytics(GA_MEASUREMENT_ID);
  }
}
