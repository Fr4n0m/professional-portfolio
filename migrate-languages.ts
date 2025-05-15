import fs from 'fs';
import path from 'path';

const languagesToMigrate = ['pt', 'fr', 'de', 'ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'];

async function migrateLanguage(lang: string) {
  const srcDir = `/Users/fran11799/Documents/professional-pf/src/translations`;
  const langDir = path.join(srcDir, lang);
  const jsonFile = path.join(srcDir, `${lang}.json`);
  
  // Crear directorio si no existe
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  // Leer archivo JSON original
  const jsonContent = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
  
  // Crear archivos modulares
  const modules = {
    'personal-info.json': jsonContent.personalInfo,
    'header-items.json': jsonContent.headerItems,
    'layout.json': jsonContent.layout,
    'main-page.json': jsonContent.mainPage,
    'projects-page.json': {
      allProjects: jsonContent.projectsPage?.allProjects,
      allProjectsTitle: jsonContent.projectsPage?.allProjectsTitle,
      allProjectsDescription: jsonContent.projectsPage?.allProjectsDescription,
      allProjectsLink: jsonContent.projectsPage?.allProjectsLink,
      projectsButtons: jsonContent.projectsPage?.projectsButtons
    },
    'projects.json': jsonContent.projectsPage?.projects || [],
    'certifications-page.json': {
      certifications: jsonContent.certificationsPage?.certifications,
      certificationsTitle: jsonContent.certificationsPage?.certificationsTitle,
      certificationsDescription: jsonContent.certificationsPage?.certificationsDescription
    },
    'certifications.json': jsonContent.certificationsPage?.certificationsList || [],
    'social-media.json': jsonContent.socialMedia,
    'experience.json': jsonContent.experience,
    'footer-items.json': jsonContent.footerItems,
    'keyboard-manager.json': jsonContent.keyboardManager,
    'language-names.json': jsonContent.languageNames
  };
  
  // Escribir archivos modulares
  for (const [filename, content] of Object.entries(modules)) {
    fs.writeFileSync(
      path.join(langDir, filename),
      JSON.stringify(content, null, 2),
      'utf-8'
    );
  }
  
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
  
  fs.writeFileSync(path.join(langDir, 'index.ts'), indexContent, 'utf-8');
  
  console.log(`Migrated ${lang}`);
}

// Migrar todos los idiomas
async function migrateAll() {
  for (const lang of languagesToMigrate) {
    await migrateLanguage(lang);
  }
  console.log('Migration complete!');
}

migrateAll();
