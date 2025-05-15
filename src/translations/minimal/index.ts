// Estructura mínima de traducciones
import type { Translations } from '../../types/translations';

const minimalTranslations: Translations = {
  layout: {
    title: "Francisco José Rodríguez Martínez - Portfolio",
    titleDescription: "Full Stack Developer Portfolio"
  },
  mainPage: {
    hero: {
      heroTitle: "Hi, I'm Fran",
      heroBadge: "Available to work",
      heroDescription1: "Software and Full Stack web developer.",
      heroDescription2: "Dedicated to the detail eternal learner.",
      heroDescription3: "Specialized in creating and solving problems. 🤓"
    },
    socialPill: {
      socialPillTitle: "Visit",
      sendMailSocialPill: "Send mail to",
      copyButton: {
        copyTitle: "Copy mail",
        copyMail: "Mail copied!",
        copyMailError: "Error copying"
      }
    },
    skills: {
      skillsTitle: "Skills"
    },
    selectedProjects: {
      projectsTitle: "Projects"
    }
  },
  experience: {
    workExperience: "Experience",
    experience: []
  },
  projectsPage: {
    allProjects: "All Projects",
    allProjectsTitle: "Projects",
    allProjectsDescription: "All my projects",
    allProjectsLink: "/projects",
    projectsButtons: {
      textCodeButton: "Code",
      textDemoButton: "Demo",
      textDemo2Button: "Demo 2"
    },
    projects: []
  },
  headerItems: [],
  personalInfo: {
    name: "Francisco José Rodríguez Martínez",
    role: "Full Stack Developer",
    alias: "Fr4n0m",
    location: "Málaga, Spain",
    mail: "fran11799@outlook.com",
    profiles: []
  },
  certificationsPage: {
    certifications: "Certifications",
    certificationsTitle: "Certifications",
    certificationsDescription: "My certifications",
    pdfBadge: "PDF",
    downloadButton: "Download",
    certificationsList: []
  },
  socialMedia: {
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email"
  },
  footerItems: [],
  keyboardManager: {
    kmPlaceHolder: "Search",
    kmTitle: "Visit",
    kmSocialSection: "Social",
    kmNavigationSection: "Navigation",
    kmCommands: []
  },
  languageNames: {}
};

export default minimalTranslations;
