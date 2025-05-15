import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

const languages = [
  'en', 'en-us', 'es', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Template para index.ts
const indexTemplate = `import personalInfo from './personal-info.json';
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
  experience,
  footerItems,
  keyboardManager,
  languageNames
};
`;

// Archivos JSON esperados
const expectedFiles = [
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

console.log('Creando estructura de traducciones para todos los idiomas...\n');

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  
  // Crear directorio si no existe
  if (!fs.existsSync(langPath)) {
    fs.mkdirSync(langPath, { recursive: true });
    console.log(`✅ Creado directorio: ${lang}/`);
  }
  
  // Crear index.ts si no existe
  const indexPath = path.join(langPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, indexTemplate);
    console.log(`✅ Creado: ${lang}/index.ts`);
  }
  
  // Crear archivos JSON faltantes con estructura básica
  expectedFiles.forEach(file => {
    const filePath = path.join(langPath, file);
    if (!fs.existsSync(filePath)) {
      let content = '{}';
      
      // Para algunos archivos, usar array vacío
      if (file.includes('items') || file === 'projects.json' || file === 'certifications.json') {
        content = '[]';
      }
      
      // Para layout.json, crear estructura básica
      if (file === 'layout.json') {
        content = JSON.stringify({
          title: `Portfolio - ${lang.toUpperCase()}`,
          titleDescription: `Professional portfolio in ${lang.toUpperCase()}`
        }, null, 2);
      }
      
      // Para main-page.json, crear estructura básica
      if (file === 'main-page.json') {
        content = JSON.stringify({
          skills: {
            skillsTitle: "Skills"
          },
          selectedProjects: {
            projectsTitle: "Projects"
          }
        }, null, 2);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Creado: ${lang}/${file}`);
    }
  });
  
  console.log(`\n`);
});

console.log('✅ Estructura de traducciones creada para todos los idiomas!');
console.log('\nAhora necesitas completar el contenido de los archivos JSON con las traducciones correspondientes.');
