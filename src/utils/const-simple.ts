import type { Language } from '@i18n/config';
import type { Translations } from '../types/translations';

// Traducciones por defecto
const defaultTranslations: Translations = {
  layout: {
    title: "Francisco José Rodríguez Martínez - Portfolio",
    titleDescription: "Full Stack Developer Portfolio"
  },
  mainPage: {
    skills: { skillsTitle: "Skills" },
    selectedProjects: { projectsTitle: "Projects" }
  },
  experience: { workExperience: "Experience" },
  projects: [],
  projectsPage: {
    allProjects: "All Projects",
    allProjectsLink: "/projects"
  },
  headerItems: [],
  personalInfo: {
    name: "Francisco José Rodríguez Martínez",
    role: "Full Stack Developer", 
    email: "fran11799@outlook.com",
    location: "Málaga, Spain"
  }
} as Translations;

// Exportar las traducciones con fallback para todos los idiomas
export const textsJson: Record<Language, Translations> = {
  es: defaultTranslations,
  en: defaultTranslations,
  'en-us': defaultTranslations,
  'es-mx': defaultTranslations,
  zh: defaultTranslations,
  pt: defaultTranslations,
  fr: defaultTranslations,
  de: defaultTranslations,
  ja: defaultTranslations,
  ru: defaultTranslations,
  ar: defaultTranslations,
  hi: defaultTranslations,
  it: defaultTranslations,
  ko: defaultTranslations,
  nl: defaultTranslations,
  pl: defaultTranslations,
  tr: defaultTranslations,
  hv: defaultTranslations,
};
