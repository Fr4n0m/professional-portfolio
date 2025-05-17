// Solución temporal para indexación de idiomas
declare global {
  interface Window {
    // Definiciones globales de propiedades en window
    gsap: any;
    fbq: any;
    gtag: any;
  }
}

// Extiende HTMLElement para agregar propiedades que TypeScript no reconoce
interface HTMLElementWithStyle extends HTMLElement {
  style: CSSStyleDeclaration & {
    scale?: string;
    opacity?: string;
    width?: string;
    backgroundColor?: string;
    boxShadow?: string;
    transition?: string;
  };
}

// Extiende Element para agregar propiedades de dataset
interface ElementWithDataset extends Element {
  dataset: DOMStringMap & {
    theme?: string;
    src?: string;
    [key: string]: string | undefined;
  };
}

// Extiende HTMLElement para checked
interface HTMLInputElementWithChecked extends HTMLElement {
  checked: boolean;
}

// TypeScript ignora estos tipos, son solo para corregir errores
export const languages = {
  en: {
    name: 'English (UK)',
    nativeName: 'English (UK)',
    flag: '🇬🇧',
    direction: 'ltr',
  },
  'en-us': {
    name: 'English (US)',
    nativeName: 'English (US)',
    flag: '🇺🇸',
    direction: 'ltr',
  },
  es: {
    name: 'Spanish (Spain)',
    nativeName: 'Español (España)',
    flag: '🇪🇸',
    direction: 'ltr',
  },
  'es-mx': {
    name: 'Spanish (Mexico)',
    nativeName: 'Español (México)',
    flag: '🇲🇽',
    direction: 'ltr',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    direction: 'ltr',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    direction: 'ltr',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl', // Right to left
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    direction: 'ltr',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    direction: 'ltr',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    direction: 'ltr',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    direction: 'ltr',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    direction: 'ltr',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    direction: 'ltr',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
    flag: '🇳🇱',
    direction: 'ltr',
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱',
    direction: 'ltr',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    direction: 'ltr',
  },
  hv: {
    name: 'High Valyrian',
    nativeName: 'Alto Valyrio',
    flag: '🐉',
    direction: 'ltr',
  },
} as const;

export type Language = keyof typeof languages;

// Prioridad de idiomas para mostrar en el selector
export const languagePriority: Language[] = [
  'es', 'es-mx', 'en', 'en-us', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Función para obtener el idioma actual - versión supersegura
export function getCurrentLanguage(url: URL | string | null | undefined): Language {
  try {
    // Si no hay URL, devolver idioma por defecto
    if (!url) return 'es';
    
    // Convertir a URL si es string
    const urlObj = typeof url === 'string' ? new URL(url) : url;
    
    // Comprobar que es un objeto URL válido
    if (!urlObj || typeof urlObj !== 'object' || typeof urlObj.pathname !== 'string') {
      return 'es';
    }
    
    // Procesar la ruta
    const pathSegments = urlObj.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return 'es'; // Default para root
    
    const possibleLang = pathSegments[0];
    return languages[possibleLang as Language] ? (possibleLang as Language) : 'es';
  } catch (error) {
    console.error('Error en getCurrentLanguage:', error);
    return 'es'; // En caso de error, devolver idioma por defecto
  }
}

// Función para cambiar de idioma manteniendo la ruta actual - versión supersegura
export function getLanguageSwitchUrl(currentUrl: URL | string | null | undefined, targetLang: Language): string {
  try {
    // Si no hay URL, devolver ruta simple
    if (!currentUrl) {
      return targetLang === 'es' ? '/' : `/${targetLang}`;
    }
    
    // Convertir a URL si es string
    const urlObj = typeof currentUrl === 'string' ? new URL(currentUrl) : currentUrl;
    
    // Comprobar que es un objeto URL válido
    if (!urlObj || typeof urlObj !== 'object' || typeof urlObj.pathname !== 'string') {
      return targetLang === 'es' ? '/' : `/${targetLang}`;
    }
    
    // Obtener el idioma actual y los segmentos de la ruta de manera segura
    const currentLang = getCurrentLanguage(urlObj);
    let pathSegments: string[] = [];
    
    try {
      pathSegments = urlObj.pathname.split('/').filter(Boolean);
    } catch (error) {
      console.error('Error al procesar pathname:', error);
      return targetLang === 'es' ? '/' : `/${targetLang}`;
    }
    
    // Si el primer segmento es un idioma válido, lo quitamos
    if (pathSegments.length > 0 && languages[pathSegments[0] as Language]) {
      pathSegments.shift();
    }
    
    // Construir la nueva URL
    if (targetLang === 'es') {
      // Español es el default, no necesita prefijo
      return pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/';
    } else {
      // Otros idiomas necesitan prefijo
      return '/' + targetLang + (pathSegments.length > 0 ? '/' + pathSegments.join('/') : '');
    }
  } catch (error) {
    console.error('Error en getLanguageSwitchUrl:', error);
    return targetLang === 'es' ? '/' : `/${targetLang}`; // En caso de error, devolver ruta simple
  }
}

// Función para obtener rutas alternativas para el mismo contenido en diferentes idiomas - versión supersegura
export function getAlternateLanguageUrls(currentUrl: URL | string | null | undefined): Record<Language, string> {
  try {
    const result = {} as Record<Language, string>;
    
    // Creamos rutas para cada idioma soportado
    Object.keys(languages).forEach((lang) => {
      result[lang as Language] = getLanguageSwitchUrl(currentUrl, lang as Language);
    });
    
    return result;
  } catch (error) {
    console.error('Error en getAlternateLanguageUrls:', error);
    
    // En caso de error, devolver rutas básicas
    const result = {} as Record<Language, string>;
    Object.keys(languages).forEach((lang) => {
      result[lang as Language] = lang === 'es' ? '/' : `/${lang}`;
    });
    return result;
  }
}
