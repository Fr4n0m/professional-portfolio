import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir la ruta base
const srcPath = path.join(__dirname, '..', 'src');
const pagesPath = path.join(srcPath, 'pages');

// Lista de todos los idiomas (excepto español que es el default)
const languages = [
  'zh', 'hi', 'ar', 'pt', 'fr', 'de', 'ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr'
];

// Plantillas para cada tipo de página
const templates = {
  index: (lang) => `---
import Layout from '@layouts/Layout.astro';
import HomePage from '@components/pages/HomePage.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../types/translations';

const langJson = textsJson.${lang};
const translations: Translations = langJson;

const layout = translations.layout;
---

<Layout
	title={layout.title}
	description={layout.titleDescription}
	json={langJson}
>
	<HomePage translations={translations} />
</Layout>
`,

  certifications: (lang) => `---
import Layout from '@layouts/Layout.astro';
import Certifications from '@components/Certifications.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../../types/translations';

const langJson = textsJson.${lang};
const translations: Translations = langJson;

const { certifications, certificationsTitle, certificationsDescription } = translations.certificationsPage;
---

<Layout
	title={certificationsTitle}
	description={certificationsDescription}
	json={langJson}
>
	<section class='px-8'>
		<Certifications certifications={certifications} />
	</section>
</Layout>
`,

  projects: (lang) => `---
import Layout from '@layouts/Layout.astro';
import AllProjects from '@components/Projects/AllProjects.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../../types/translations';

const langJson = textsJson.${lang};
const translations: Translations = langJson;

const { allProjectsTitle, allProjectsDescription } = translations.projectsPage;
---

<Layout
	title={allProjectsTitle}
	description={allProjectsDescription}
	json={langJson}
>
	<section class='px-8'>
		<AllProjects translations={translations} />
	</section>
</Layout>
`
};

// Función para crear archivos y directorios
function createLanguagePages(lang) {
  console.log(`Creating pages for language: ${lang}`);
  
  const langDir = path.join(pagesPath, lang);
  
  // Crear directorio principal del idioma
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }
  
  // Crear index.astro
  const indexFile = path.join(langDir, 'index.astro');
  fs.writeFileSync(indexFile, templates.index(lang));
  console.log(`  Created: ${indexFile}`);
  
  // Crear certifications/index.astro
  const certDir = path.join(langDir, 'certifications');
  if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true });
  }
  const certFile = path.join(certDir, 'index.astro');
  fs.writeFileSync(certFile, templates.certifications(lang));
  console.log(`  Created: ${certFile}`);
  
  // Crear projects/index.astro
  const projDir = path.join(langDir, 'projects');
  if (!fs.existsSync(projDir)) {
    fs.mkdirSync(projDir, { recursive: true });
  }
  const projFile = path.join(projDir, 'index.astro');
  fs.writeFileSync(projFile, templates.projects(lang));
  console.log(`  Created: ${projFile}`);
}

// Crear páginas para todos los idiomas
console.log('Starting to create language pages...\n');

languages.forEach(lang => {
  try {
    createLanguagePages(lang);
    console.log(`Successfully created pages for ${lang}\n`);
  } catch (error) {
    console.error(`Error creating pages for ${lang}:`, error);
  }
});

console.log('All pages created successfully!');
console.log('\nIMPORTANT: Restart the Astro dev server to see the changes.');
