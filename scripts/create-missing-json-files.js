
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Plantillas para archivos faltantes
const templates = {
  'personal-info.json': {
    name: "Francisco José Rodríguez Martínez",
    role: "Full Stack Developer",
    email: "fran11799@outlook.com",
    location: "Málaga, Spain"
  },
  'projects-page.json': {
    projectsTitle: "Projects",
    projectsDescription: "My projects",
    allProjects: "All Projects",
    allProjectsLink: "/projects"
  },
  'certifications-page.json': {
    certificationsTitle: "Certifications",
    certificationsDescription: "My certifications"
  },
  'social-media.json': [],
  'footer-items.json': [],
  'keyboard-manager.json': {},
  'language-names.json': {},
  'certifications.json': []
};

const languages = fs.readdirSync(translationsPath).filter(dir => 
  fs.statSync(path.join(translationsPath, dir)).isDirectory() && dir !== 'minimal'
);

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  const existingFiles = fs.readdirSync(langPath).filter(file => file.endsWith('.json'));
  
  Object.keys(templates).forEach(file => {
    if (!existingFiles.includes(file)) {
      const filePath = path.join(langPath, file);
      const content = JSON.stringify(templates[file], null, 2);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Creado: ${lang}/${file}`);
    }
  });
});

console.log('\n✅ Archivos faltantes creados!');
