// Estructura mínima de traducciones
import type { Translations } from '../../types/translations';

const minimalTranslations: Translations = {
  layout: {
    title: "Francisco José Rodríguez Martínez - Portfolio",
    titleDescription: "Full Stack Developer Portfolio"
  },
  mainPage: {
    skills: {
      skillsTitle: "Skills"
    },
    selectedProjects: {
      projectsTitle: "Projects"
    }
  },
  experience: {
    workExperience: "Experience"
  },
  projects: [],
  projectsPage: {
    allProjects: "All Projects",
    allProjectsLink: "/projects",
    projectsTitle: "Projects",
    projectsList: []
  },
  headerItems: [],
  personalInfo: {
    name: "Francisco José Rodríguez Martínez", 
    role: "Full Stack Developer",
    email: "fran11799@outlook.com",
    location: "Málaga, Spain",
    profiles: []
  },
  certificationsPage: {
    certificationsTitle: "Certifications",
    certificationsDescription: "My certifications",
    certifications: "Certifications",
    certificationsList: []
  },
  socialMedia: [],
  footerItems: [],
  keyboardManager: {
    kmPlaceHolder: "Search",
    kmTitle: "Visit",
    kmSocialSection: "Social",
    kmNavigationSection: "Navigation",
    kmCommands: []
  },
  languageNames: {},
  certifications: [] // Añadido por compatibilidad
};

export default minimalTranslations;
