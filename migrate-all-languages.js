import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Script para migrar automáticamente los idiomas a la estructura modular
const languages = ['fr', 'de', 'ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'];

function createModularStructure(lang, jsonData) {
  const langDir = path.join(__dirname, 'src/translations', lang);
  
  // Crear directorio
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  // Archivos a crear
  const files = {
    'personal-info.json': jsonData.personalInfo,
    'header-items.json': jsonData.headerItems,
    'layout.json': jsonData.layout,
    'main-page.json': jsonData.mainPage,
    'projects-page.json': {
      allProjects: jsonData.projectsPage?.allProjects,
      allProjectsTitle: jsonData.projectsPage?.allProjectsTitle,
      allProjectsDescription: jsonData.projectsPage?.allProjectsDescription,
      allProjectsLink: jsonData.projectsPage?.allProjectsLink,
      projectsButtons: jsonData.projectsPage?.projectsButtons
    },
    'projects.json': jsonData.projectsPage?.projects || [],
    'certifications-page.json': {
      certifications: jsonData.certificationsPage?.certifications,
      certificationsTitle: jsonData.certificationsPage?.certificationsTitle,
      certificationsDescription: jsonData.certificationsPage?.certificationsDescription
    },
    'certifications.json': jsonData.certificationsPage?.certificationsList || [],
    'social-media.json': jsonData.socialMedia,
    'experience.json': jsonData.experience,
    'footer-items.json': jsonData.footerItems,
    'keyboard-manager.json': jsonData.keyboardManager,
    'language-names.json': jsonData.languageNames
  };
  
  // Crear archivos
  Object.entries(files).forEach(([fileName, content]) => {
    fs.writeFileSync(
      path.join(langDir, fileName),
      JSON.stringify(content, null, 2),
      'utf-8'
    );
  });
  
  // Crear index.ts
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
\tpersonalInfo,
\theaderItems,
\tlayout,
\tmainPage,
\tprojectsPage: {
\t\t...projectsPage,
\t\tprojects
\t},
\tcertificationsPage: {
\t\t...certificationsPage,
\t\tcertificationsList
\t},
\tsocialMedia,
\texperience,
\tfooterItems,
\tkeyboardManager,
\tlanguageNames
};
`;
  
  fs.writeFileSync(path.join(langDir, 'index.ts'), indexContent, 'utf-8');
  console.log(`✓ Migrated ${lang}`);
}

// Migrar todos los idiomas
languages.forEach(lang => {
  try {
    const jsonPath = path.join(__dirname, 'src/translations', `${lang}.json`);
    if (fs.existsSync(jsonPath)) {
      const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      createModularStructure(lang, jsonData);
    } else {
      console.log(`⚠ ${lang}.json not found`);
    }
  } catch (error) {
    console.error(`✗ Error migrating ${lang}:`, error.message);
  }
});

console.log('\n✓ Migration complete!');
