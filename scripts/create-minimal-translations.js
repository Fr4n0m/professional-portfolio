import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');
const utilsPath = path.join(__dirname, '..', 'src', 'utils');

const languages = [
  'en', 'en-us', 'es', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Asegurar que cada idioma tenga al menos layout.json
console.log('Creando archivos de traducción mínimos...\n');

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  
  // Crear directorio si no existe
  if (!fs.existsSync(langPath)) {
    fs.mkdirSync(langPath, { recursive: true });
    console.log(`✅ Creado directorio: ${lang}/`);
  }
  
  // Crear layout.json mínimo
  const layoutPath = path.join(langPath, 'layout.json');
  if (!fs.existsSync(layoutPath)) {
    const layoutContent = {
      title: `Portfolio - ${lang.toUpperCase()}`,
      titleDescription: `Professional Portfolio (${lang})`
    };
    fs.writeFileSync(layoutPath, JSON.stringify(layoutContent, null, 2));
    console.log(`✅ Creado: ${lang}/layout.json`);
  }
  
  // Crear main-page.json mínimo
  const mainPagePath = path.join(langPath, 'main-page.json');
  if (!fs.existsSync(mainPagePath)) {
    const mainPageContent = {
      skills: {
        skillsTitle: "Skills"
      },
      selectedProjects: {
        projectsTitle: "Projects"
      }
    };
    fs.writeFileSync(mainPagePath, JSON.stringify(mainPageContent, null, 2));
    console.log(`✅ Creado: ${lang}/main-page.json`);
  }
  
  // Crear experience.json mínimo
  const experiencePath = path.join(langPath, 'experience.json');
  if (!fs.existsSync(experiencePath)) {
    const experienceContent = {
      workExperience: "Work Experience"
    };
    fs.writeFileSync(experiencePath, JSON.stringify(experienceContent, null, 2));
    console.log(`✅ Creado: ${lang}/experience.json`);
  }
  
  // Crear projects.json vacío
  const projectsPath = path.join(langPath, 'projects.json');
  if (!fs.existsSync(projectsPath)) {
    fs.writeFileSync(projectsPath, '[]');
    console.log(`✅ Creado: ${lang}/projects.json`);
  }
  
  // Crear projects-page.json mínimo
  const projectsPagePath = path.join(langPath, 'projects-page.json');
  if (!fs.existsSync(projectsPagePath)) {
    const projectsPageContent = {
      allProjects: "All Projects",
      allProjectsLink: `/${lang}/projects`
    };
    fs.writeFileSync(projectsPagePath, JSON.stringify(projectsPageContent, null, 2));
    console.log(`✅ Creado: ${lang}/projects-page.json`);
  }
  
  // Crear index.ts
  const indexPath = path.join(langPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    const indexContent = `// Auto-generated translation index
export default {
  layout: require('./layout.json'),
  mainPage: require('./main-page.json'),
  experience: require('./experience.json'),
  projects: require('./projects.json'),
  projectsPage: require('./projects-page.json'),
  headerItems: require('./header-items.json'),
  // Agrega más imports según sea necesario
};
`;
    fs.writeFileSync(indexPath, indexContent);
    console.log(`✅ Creado: ${lang}/index.ts`);
  }
});

// Actualizar const.ts para manejar imports dinámicos
console.log('\nActualizando const.ts...');

const constContent = `import type { Language } from '@i18n/config';
import type { Translations } from '../types/translations';

// Importar traducciones con manejo de errores
const loadTranslation = (lang: string) => {
  try {
    return require(\`../translations/\${lang}/index\`).default;
  } catch (e) {
    console.warn(\`Failed to load translations for \${lang}, using fallback\`);
    return {
      layout: { title: 'Portfolio', titleDescription: 'Professional Portfolio' },
      mainPage: { 
        skills: { skillsTitle: 'Skills' },
        selectedProjects: { projectsTitle: 'Projects' }
      },
      experience: { workExperience: 'Experience' },
      projects: [],
      projectsPage: { allProjects: 'All Projects', allProjectsLink: '/projects' },
      headerItems: []
    };
  }
};

// Cargar todas las traducciones
export const textsJson: Record<Language, Translations> = {
  es: loadTranslation('es'),
  en: loadTranslation('en'),
  'en-us': loadTranslation('en-us'),
  'es-mx': loadTranslation('es-mx'),
  zh: loadTranslation('zh'),
  pt: loadTranslation('pt'),
  fr: loadTranslation('fr'),
  de: loadTranslation('de'),
  ja: loadTranslation('ja'),
  ru: loadTranslation('ru'),
  ar: loadTranslation('ar'),
  hi: loadTranslation('hi'),
  it: loadTranslation('it'),
  ko: loadTranslation('ko'),
  nl: loadTranslation('nl'),
  pl: loadTranslation('pl'),
  tr: loadTranslation('tr'),
  hv: loadTranslation('hv'),
};
`;

fs.writeFileSync(path.join(utilsPath, 'const.ts'), constContent);
console.log('✅ const.ts actualizado con manejo de errores');

console.log('\n✅ Proceso completado!');
console.log('Ahora todos los idiomas tienen los archivos mínimos necesarios.');
