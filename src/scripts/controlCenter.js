// controlCenter.js
// Script para manejar las funcionalidades del panel de control (Control Center)

/**
 * Inicializa todas las funcionalidades del Control Center
 */
export function initControlCenter() {
  document.addEventListener('DOMContentLoaded', () => {
    setupAccessibilityPanel();
    setupThemeToggle();
    setupLanguageToggle();
    setupAccessibilityControls();
    setupFontSizeControls();
    initFromLocalStorage();
  });
}

/**
 * Configura el panel de accesibilidad
 */
function setupAccessibilityPanel() {
  const toggleButton = document.getElementById('desktop-accessibility-toggle');
  const panel = document.getElementById('desktop-accessibility-panel');
  
  if (!toggleButton || !panel) return;
  
  // Mostrar/ocultar el panel al hacer clic en el botón
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });
  
  // Cerrar el panel al hacer clic fuera de él
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== toggleButton) {
      panel.classList.remove('open');
    }
  });
}

/**
 * Configura el botón de cambio de tema
 */
function setupThemeToggle() {
  const themeButton = document.querySelector('.desktop-theme-control-btn');
  if (!themeButton) return;
  
  // Aplicar estado inicial correctamente
  updateThemeButtonState();
  
  themeButton.addEventListener('click', () => {
    // Obtenemos el tema actual
    const currentTheme = localStorage.getItem('theme') || 'system';
    
    // Cambiamos al siguiente tema en el ciclo: light -> dark -> system -> light
    let newTheme;
    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'system';
    } else {
      newTheme = 'light';
    }
    
    // Guardar el nuevo tema
    localStorage.setItem('theme', newTheme);
    
    // Aplicar el tema
    applyTheme(newTheme);
    
    // Actualizar el estado visual del botón
    updateThemeButtonState();
  });
}

/**
 * Actualiza el estado visual del botón de tema
 */
function updateThemeButtonState() {
  const currentTheme = localStorage.getItem('theme') || 'system';
  
  // Eliminar clases existentes a nivel global
  document.documentElement.classList.remove('system');
  
  // Aplicar clase global si el tema es "system"
  if (currentTheme === 'system') {
    document.documentElement.classList.add('system');
  }
  
  // Verificar si estamos en modo oscuro (ya sea por tema explícito o por preferencia del sistema)
  const isDarkMode = 
    currentTheme === 'dark' || 
    (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Aplicar modo oscuro
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Actualizar el estado visual de los iconos (restablecer todos)
  const lightIcon = document.querySelector('#light');
  const darkIcon = document.querySelector('#dark');
  const systemIcon = document.querySelector('#system');
  
  if (lightIcon && darkIcon && systemIcon) {
    // Establecer el ícono apropiado como visible
    if (currentTheme === 'light') {
      lightIcon.style.scale = '1';
      lightIcon.style.opacity = '1';
      darkIcon.style.scale = '0';
      darkIcon.style.opacity = '0';
      systemIcon.style.scale = '0';
      systemIcon.style.opacity = '0';
    } else if (currentTheme === 'dark') {
      lightIcon.style.scale = '0';
      lightIcon.style.opacity = '0';
      darkIcon.style.scale = '1';
      darkIcon.style.opacity = '1';
      systemIcon.style.scale = '0';
      systemIcon.style.opacity = '0';
    } else {
      lightIcon.style.scale = '0';
      lightIcon.style.opacity = '0';
      darkIcon.style.scale = '0';
      darkIcon.style.opacity = '0';
      systemIcon.style.scale = '1';
      systemIcon.style.opacity = '1';
    }
  }
}

/**
 * Aplica el tema especificado
 */
function applyTheme(theme) {
  const isDark = 
    theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Actualizar ícono de tema
  updateThemeButtonState();
}

/**
 * Configura el botón de cambio de idioma
 */
function setupLanguageToggle() {
  const langButton = document.querySelector('.desktop-lang-control-btn');
  const mainSettingsPanel = document.querySelector('.main-settings-panel');
  const languagePanel = document.querySelector('.language-settings-panel');
  const backButton = document.querySelector('.back-settings-btn');
  
  if (!langButton || !mainSettingsPanel || !languagePanel || !backButton) return;
  
  // Mostrar panel de idiomas y ocultar panel principal
  langButton.addEventListener('click', () => {
    mainSettingsPanel.forEach(panel => panel.classList.add('hidden'));
    languagePanel.classList.remove('hidden');
  });
  
  // Volver al panel principal
  backButton.addEventListener('click', () => {
    languagePanel.classList.add('hidden');
    mainSettingsPanel.forEach(panel => panel.classList.remove('hidden'));
  });
}

/**
 * Configura los controles de accesibilidad
 */
function setupAccessibilityControls() {
  // Contraste
  const contrastToggle = document.querySelector('label[data-action="contrast"]');
  const contrastCheckbox = document.getElementById('desktop-contrast-checkbox');
  
  if (contrastToggle && contrastCheckbox) {
    contrastCheckbox.addEventListener('change', () => {
      if (contrastCheckbox.checked) {
        document.documentElement.classList.add('high-contrast');
        localStorage.setItem('highContrast', 'true');
      } else {
        document.documentElement.classList.remove('high-contrast');
        localStorage.setItem('highContrast', 'false');
      }
    });
  }
  
  // Animaciones
  const animationsToggle = document.querySelector('label[data-action="animations"]');
  const animationsCheckbox = document.getElementById('desktop-animations-checkbox');
  
  if (animationsToggle && animationsCheckbox) {
    animationsCheckbox.addEventListener('change', () => {
      const animations = animationsCheckbox.checked;
      
      if (animations) {
        document.documentElement.classList.remove('reduce-motion');
        localStorage.setItem('enableAnimations', 'true');
      } else {
        document.documentElement.classList.add('reduce-motion');
        localStorage.setItem('enableAnimations', 'false');
      }
      
      // Actualizar estado del atributo data-enabled
      animationsToggle.setAttribute('data-enabled', animations ? 'true' : 'false');
      
      // Actualizar las animaciones en tiempo real
      updateAnimationsState(animations);
    });
  }
}

/**
 * Configura los controles de tamaño de fuente
 */
function setupFontSizeControls() {
  const decreaseButton = document.querySelector('button[data-action="font-decrease"]');
  const increaseButton = document.querySelector('button[data-action="font-increase"]');
  const fontSizeValue = document.querySelector('.desktop-font-size-value');
  
  if (!decreaseButton || !increaseButton || !fontSizeValue) return;
  
  // Tamaños de fuente disponibles (%)
  const fontSizes = [85, 90, 95, 100, 105, 110, 115, 120];
  
  // Función para actualizar el tamaño de fuente
  const updateFontSize = (newSize) => {
    document.documentElement.style.fontSize = `${newSize}%`;
    document.documentElement.setAttribute('data-font-size', newSize);
    fontSizeValue.textContent = `${newSize}%`;
    localStorage.setItem('fontSize', newSize);
  };
  
  // Disminuir tamaño de fuente
  decreaseButton.addEventListener('click', () => {
    const currentSize = parseInt(localStorage.getItem('fontSize') || '100');
    const currentIndex = fontSizes.indexOf(currentSize);
    
    if (currentIndex > 0) {
      updateFontSize(fontSizes[currentIndex - 1]);
    }
  });
  
  // Aumentar tamaño de fuente
  increaseButton.addEventListener('click', () => {
    const currentSize = parseInt(localStorage.getItem('fontSize') || '100');
    const currentIndex = fontSizes.indexOf(currentSize);
    
    if (currentIndex < fontSizes.length - 1) {
      updateFontSize(fontSizes[currentIndex + 1]);
    }
  });
}

/**
 * Inicializa los controles basados en localStorage
 */
function initFromLocalStorage() {
  // Contraste
  const highContrast = localStorage.getItem('highContrast') === 'true';
  const contrastCheckbox = document.getElementById('desktop-contrast-checkbox');
  
  if (contrastCheckbox) {
    contrastCheckbox.checked = highContrast;
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }
  
  // Animaciones
  const enableAnimations = localStorage.getItem('enableAnimations');
  const animationsEnabled = enableAnimations === null ? true : enableAnimations === 'true';
  const animationsCheckbox = document.getElementById('desktop-animations-checkbox');
  
  if (animationsCheckbox) {
    animationsCheckbox.checked = animationsEnabled;
    
    if (!animationsEnabled) {
      document.documentElement.classList.add('reduce-motion');
    }
    
    // Actualizar estado del atributo data-enabled
    const animationsToggle = document.querySelector('label[data-action="animations"]');
    if (animationsToggle) {
      animationsToggle.setAttribute('data-enabled', animationsEnabled ? 'true' : 'false');
    }
    
    // Actualizar las animaciones en tiempo real
    updateAnimationsState(animationsEnabled);
  }
  
  // Tamaño de fuente
  const fontSize = localStorage.getItem('fontSize') || '100';
  const fontSizeValue = document.querySelector('.desktop-font-size-value');
  
  if (fontSizeValue) {
    fontSizeValue.textContent = `${fontSize}%`;
  }
  
  document.documentElement.style.fontSize = `${fontSize}%`;
  document.documentElement.setAttribute('data-font-size', fontSize);
  
  // Aplicar tema
  updateThemeButtonState();
}

/**
 * Actualiza el estado de las animaciones en tiempo real
 */
function updateAnimationsState(enabled) {
  // Maneja las animaciones de GSAP
  if (window.gsap) {
    if (!enabled) {
      window.gsap.globalTimeline.paused(true);
    } else {
      window.gsap.globalTimeline.paused(false);
    }
  }
  
  // Maneja animaciones CSS
  const style = document.createElement('style');
  if (!enabled) {
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
  } else {
    style.textContent = '';
  }
  
  // Eliminar cualquier estilo anterior y agregar el nuevo
  const existingStyle = document.querySelector('style[data-animations-override]');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  style.setAttribute('data-animations-override', 'true');
  document.head.appendChild(style);
}

// Exportación para importar desde otros módulos
export default {
  initControlCenter,
  updateThemeButtonState
};