import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Template correcto para index.ts
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
    certifications: certificationsList
  },
  socialMedia,
  experience,
  footerItems,
  keyboardManager,
  languageNames
};
`;

const languages = fs.readdirSync(translationsPath).filter(dir => 
  fs.statSync(path.join(translationsPath, dir)).isDirectory() && 
  dir !== 'minimal' && 
  dir !== 'base'
);

console.log('Actualizando todos los archivos index.ts...\n');

languages.forEach(lang => {
  const indexPath = path.join(translationsPath, lang, 'index.ts');
  
  try {
    fs.writeFileSync(indexPath, indexTemplate);
    console.log(`✅ Actualizado: ${lang}/index.ts`);
  } catch (error) {
    console.error(`❌ Error actualizando ${lang}/index.ts:`, error.message);
  }
});

console.log('\n✅ Todos los archivos index.ts han sido actualizados!');
