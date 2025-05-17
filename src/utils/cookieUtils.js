/**
 * cookieUtils.js - Utilidades para gestionar cookies en toda la aplicación
 */

/**
 * Obtiene el valor de una cookie específica
 * @param {string} name - Nombre de la cookie a buscar
 * @returns {string|null} - Valor de la cookie o null si no existe
 */
export function getCookie(name) {
  const nameEq = name + "=";
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEq) === 0) {
      return decodeURIComponent(cookie.substring(nameEq.length, cookie.length));
    }
  }
  
  return null;
}

/**
 * Establece una cookie con opciones avanzadas
 * @param {string} name - Nombre de la cookie
 * @param {string} value - Valor de la cookie
 * @param {Object} options - Opciones adicionales
 * @param {number} options.days - Días de expiración
 * @param {string} options.domain - Dominio de la cookie
 * @param {boolean} options.secure - Si la cookie debe ser segura (HTTPS)
 * @param {string} options.sameSite - Política SameSite ('Strict', 'Lax', 'None')
 */
export function setCookie(name, value, options = {}) {
  const { 
    days = 365, 
    domain = window.location.hostname,
    secure = window.location.protocol === 'https:',
    sameSite = 'Lax'
  } = options;
  
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  const cookieValue = encodeURIComponent(value);
  
  let cookieString = `${name}=${cookieValue};${expires};path=/;SameSite=${sameSite}`;
  
  if (domain) {
    cookieString += `;domain=${domain}`;
  }
  
  if (secure) {
    cookieString += `;Secure`;
  }
  
  document.cookie = cookieString;
}

/**
 * Elimina una cookie específica
 * @param {string} name - Nombre de la cookie a eliminar
 */
export function deleteCookie(name) {
  setCookie(name, '', { days: -1 });
}

/**
 * Verifica si el usuario ha dado su consentimiento para una categoría específica
 * @param {string} category - Categoría de cookie ('essential', 'analytical', 'functional')
 * @returns {boolean} - true si hay consentimiento, false en caso contrario
 */
export function hasConsent(category) {
  try {
    const consentCookie = getCookie('cookie_consent');
    if (consentCookie) {
      const consent = JSON.parse(consentCookie);
      return consent && consent.categories && consent.categories[category] === true;
    }
    return false;
  } catch (e) {
    console.error('Error checking consent:', e);
    return false;
  }
}

/**
 * Verifica si el usuario ha realizado una elección de consentimiento
 * @returns {boolean} - true si ya ha decidido, false si aún no ha decidido
 */
export function hasConsentDecision() {
  return getCookie('cookie_consent') !== null;
}

/**
 * Obtiene toda la configuración de consentimiento
 * @returns {Object|null} - Objeto de consentimiento o null si no existe
 */
export function getConsentConfig() {
  try {
    const consentCookie = getCookie('cookie_consent');
    if (consentCookie) {
      return JSON.parse(consentCookie);
    }
    return null;
  } catch (e) {
    console.error('Error getting consent config:', e);
    return null;
  }
}

/**
 * Registra un evento de consentimiento en analytics si está permitido
 * @param {string} action - Acción de consentimiento ('accept_all', 'reject_all', 'custom_preferences')
 */
export function logConsentEvent(action) {
  // Solo registrar si las analíticas están permitidas o si es un evento esencial
  if (hasConsent('essential')) {
    const data = {
      event: 'cookie_consent',
      action: action,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    };
    
    try {
      // Enviar a endpoint interno para registro
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/consent-log', JSON.stringify(data));
      } else {
        // Fallback para navegadores que no soportan sendBeacon
        fetch('/api/consent-log', {
          method: 'POST',
          body: JSON.stringify(data),
          keepalive: true
        }).catch(e => console.error('Error logging consent:', e));
      }
      
      // Si hay consentimiento analítico, también enviar a herramientas de analytics
      if (hasConsent('analytical') && typeof window.gtag === 'function') {
        window.gtag('event', 'consent_update', {
          'consent_action': action,
          'consent_timestamp': new Date().toISOString()
        });
      }
    } catch (e) {
      console.error('Error logging consent event:', e);
    }
  }
}

/**
 * Función para inicializar todas las cookies cuando la página se carga
 * @returns {void}
 */
export function initCookies() {
  // Cargar el estado de consentimiento de cookies
  const consent = getConsentConfig();
  
  // Aplicar la configuración de cookies a los elementos de la página
  if (consent) {
    // Cargar elementos analíticos si hay consentimiento
    if (consent.categories.analytical) {
      document.querySelectorAll('.analytical-content.requires-consent').forEach(element => {
        element.classList.remove('consent-blocked');
        const iframe = element.querySelector('iframe[data-src]');
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
      });
    }
    
    // Cargar elementos funcionales si hay consentimiento
    if (consent.categories.functional) {
      document.querySelectorAll('.social-widget.requires-consent, .functional-content.requires-consent').forEach(element => {
        element.classList.remove('consent-blocked');
        const iframe = element.querySelector('iframe[data-src]');
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
      });
    }
  }
}
