import * as fs from 'fs';
import * as path from 'path';

const translationsDir = './src/translations';
const languages = [
  'es', 'en', 'en-us', 'es-mx', 'zh', 'pt', 'fr', 'de', 
  'ja', 'ru', 'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Estructura de traducción por defecto
const defaultTranslation = {
  personalInfo: {
    name: "Francisco José Rodríguez Martínez",
    role: "Full Stack Developer",
    alias: "Fr4n0m",
    location: "📍 Málaga, España",
    mail: "Fran11799@outlook.com",
    profiles: [
      {
        network: "LinkedIn",
        username: "Francisco Rodríguez",
        url: "https://www.linkedin.com/in/francisco-jos%C3%A9-r-5b2181bb/"
      },
      {
        network: "GitHub",
        username: "Fr4n0m",
        url: "https://github.com/Fr4n0m"
      },
      {
        network: "CV",
        username: "Francisco Rodríguez",
        url: "https://cv-web-smoky.vercel.app/"
      }
    ]
  },
  headerItems: [],
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
  projectsPage: {
    allProjects: "All Projects",
    allProjectsTitle: "All Projects",
    allProjectsDescription: "All my projects",
    allProjectsLink: "/projects",
    projectsButtons: {
      textCodeButton: "Code",
      textDemoButton: "Demo",
      textDemo2Button: "Demo 2"
    },
    projects: []
  },
  certificationsPage: {
    certifications: "Certifications",
    certificationsTitle: "Certifications",
    certificationsDescription: "My certifications",
    certificationsList: []
  },
  socialMedia: {
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email"
  },
  experience: {
    workExperience: "Experience",
    experience: []
  },
  footerItems: [],
  keyboardManager: {
    kmPlaceHolder: "Search",
    kmTitle: "Visit",
    kmSocialSection: "Social",
    kmNavigationSection: "Navigation",
    kmCommands: []
  }
};

function ensureTranslationComplete(lang: string) {
  console.log(`Checking ${lang}...`);
  
  // Verificar si existe el directorio
  const langDir = path.join(translationsDir, lang);
  if (!fs.existsSync(langDir)) {
    console.log(`Creating directory for ${lang}`);
    fs.mkdirSync(langDir, { recursive: true });
  }

  // Archivos requeridos
  const requiredFiles = [
    'personal-info.json',
    'header-items.json',
    'layout.json',
    'main-page.json',
    'projects-page.json',
    'projects.json',
    'certifications-page.json',
    'certifications.json',
    'social-media.json',
    'experience.json',
    'footer-items.json',
    'keyboard-manager.json',
    'language-names.json'
  ];

  requiredFiles.forEach(file => {
    const filePath = path.join(langDir, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`Creating ${file} for ${lang}`);
      
      let content = {};
      
      switch(file) {
        case 'personal-info.json':
          content = defaultTranslation.personalInfo;
          break;
        case 'header-items.json':
          content = [];
          break;
        case 'layout.json':
          content = defaultTranslation.layout;
          break;
        case 'main-page.json':
          content = defaultTranslation.mainPage;
          break;
        case 'projects-page.json':
          content = {
            allProjects: defaultTranslation.projectsPage.allProjects,
            allProjectsTitle: defaultTranslation.projectsPage.allProjectsTitle,
            allProjectsDescription: defaultTranslation.projectsPage.allProjectsDescription,
            allProjectsLink: defaultTranslation.projectsPage.allProjectsLink,
            projectsButtons: defaultTranslation.projectsPage.projectsButtons
          };
          break;
        case 'projects.json':
          content = [];
          break;
        case 'certifications-page.json':
          content = {
            certifications: defaultTranslation.certificationsPage.certifications,
            certificationsTitle: defaultTranslation.certificationsPage.certificationsTitle,
            certificationsDescription: defaultTranslation.certificationsPage.certificationsDescription
          };
          break;
        case 'certifications.json':
          content = [];
          break;
        case 'social-media.json':
          content = defaultTranslation.socialMedia;
          break;
        case 'experience.json':
          content = {
            workExperience: defaultTranslation.experience.workExperience,
            experience: []
          };
          break;
        case 'footer-items.json':
          content = [];
          break;
        case 'keyboard-manager.json':
          content = defaultTranslation.keyboardManager;
          break;
        case 'language-names.json':
          content = {};
          break;
      }
      
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    } else {
      // Verificar que el archivo tenga todas las propiedades necesarias
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let updated = false;
      
      switch(file) {
        case 'personal-info.json':
          if (!content.name) { content.name = defaultTranslation.personalInfo.name; updated = true; }
          if (!content.alias) { content.alias = defaultTranslation.personalInfo.alias; updated = true; }
          if (!content.mail) { content.mail = defaultTranslation.personalInfo.mail; updated = true; }
          break;
      }
      
      if (updated) {
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        console.log(`Updated ${file} for ${lang}`);
      }
    }
  });

  // Crear o actualizar index.ts
  const indexPath = path.join(langDir, 'index.ts');
  const indexContent = `import personalInfo from './personal-info.json';
import headerItems from './header-items.json';
import layout from './layout.json';
import mainPage from './main-page.json';
import projectsPage from './projects-page.json';
import projects from './projects.json';
import certificationsPage from './certifications-page.json';
import certificationsList from './certifications.json';
import socialMedia from './social-media.json';
import experience from './experience.json';
import footerItems from './footer-items.json';
import keyboardManager from './keyboard-manager.json';
import languageNames from './language-names.json';

export default {
  personalInfo,
  headerItems,
  layout,
  mainPage,
  projectsPage: {
    ...projectsPage,
    projects
  },
  certificationsPage: {
    ...certificationsPage,
    certificationsList
  },
  socialMedia,
  experience: {
    ...experience,
    experience: experience.experience || []
  },
  footerItems,
  keyboardManager,
  languageNames
};
`;

  fs.writeFileSync(indexPath, indexContent);
  console.log(`Updated index.ts for ${lang}`);
}

// Ejecutar para todos los idiomas
languages.forEach(lang => {
  ensureTranslationComplete(lang);
});

console.log('Translation check complete!');
