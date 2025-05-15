import type { Language } from '@i18n/config';
import type { Translations } from '../types/translations';

// Imports con valores por defecto para evitar errores
const safeImport = async (path: string, fallback: any = {}) => {
  try {
    const module = await import(path);
    return module.default || module;
  } catch (e) {
    console.warn(`Failed to import ${path}, using fallback`);
    return fallback;
  }
};

// Fallback para traducciones faltantes
const defaultTranslation: Translations = {
  layout: { 
    title: 'Portfolio', 
    titleDescription: 'Professional Portfolio' 
  },
  mainPage: { 
    skills: { skillsTitle: 'Skills' },
    selectedProjects: { projectsTitle: 'Projects' }
  },
  experience: { workExperience: 'Experience' },
  projects: [],
  projectsPage: { 
    allProjects: 'All Projects', 
    allProjectsLink: '/projects' 
  },
  headerItems: [],
  personalInfo: {
    name: 'Your Name',
    role: 'Developer',
    email: 'email@example.com',
    location: 'Location'
  },
  certificationsPage: {
    certificationsTitle: 'Certifications',
    certificationsDescription: 'My certifications',
    certifications: []
  },
  socialMedia: [],
  footerItems: [],
  keyboardManager: {},
  languageNames: {}
};

// Importar todas las traducciones con manejo de errores
import esTranslations from '../translations/es/index';

// Para los demás idiomas, usar imports dinámicos con fallback
const textsJson: Record<Language, Translations> = {
  es: esTranslations,
  en: defaultTranslation,
  'en-us': defaultTranslation,
  'es-mx': defaultTranslation,
  zh: defaultTranslation,
  pt: defaultTranslation,
  fr: defaultTranslation,
  de: defaultTranslation,
  ja: defaultTranslation,
  ru: defaultTranslation,
  ar: defaultTranslation,
  hi: defaultTranslation,
  it: defaultTranslation,
  ko: defaultTranslation,
  nl: defaultTranslation,
  pl: defaultTranslation,
  tr: defaultTranslation,
  hv: defaultTranslation,
};

// Cargar traducciones de forma asíncrona
(async () => {
  for (const lang of Object.keys(textsJson) as Language[]) {
    if (lang !== 'es') {
      try {
        const translations = await import(`../translations/${lang}/index`);
        textsJson[lang] = translations.default || translations;
      } catch (e) {
        console.warn(`Using default translations for ${lang}`);
      }
    }
  }
})();

export { textsJson };
