#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lista de idiomas que necesitan carpetas (todos excepto español que es el default)
const languages = ['zh', 'hi', 'ar', 'pt', 'fr', 'de', 'ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr'];

// Plantillas para cada tipo de página
const pageTemplates = {
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

const pagesPath = path.join(__dirname, '..', 'src', 'pages');

console.log('Starting to create language pages...');
console.log('Pages path:', pagesPath);

// Crear páginas para cada idioma
languages.forEach(lang => {
  console.log(`\nProcessing language: ${lang}`);
  const langPath = path.join(pagesPath, lang);
  
  // Crear directorio del idioma si no existe
  if (!fs.existsSync(langPath)) {
    fs.mkdirSync(langPath, { recursive: true });
    console.log(`  Created directory: ${langPath}`);
  }
  
  // Crear index.astro
  const indexPath = path.join(langPath, 'index.astro');
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, pageTemplates.index(lang));
    console.log(`  Created: ${indexPath}`);
  } else {
    console.log(`  Skipped (exists): ${indexPath}`);
  }
  
  // Crear certifications/index.astro
  const certPath = path.join(langPath, 'certifications');
  if (!fs.existsSync(certPath)) {
    fs.mkdirSync(certPath, { recursive: true });
    console.log(`  Created directory: ${certPath}`);
  }
  const certIndexPath = path.join(certPath, 'index.astro');
  if (!fs.existsSync(certIndexPath)) {
    fs.writeFileSync(certIndexPath, pageTemplates.certifications(lang));
    console.log(`  Created: ${certIndexPath}`);
  } else {
    console.log(`  Skipped (exists): ${certIndexPath}`);
  }
  
  // Crear projects/index.astro
  const projPath = path.join(langPath, 'projects');
  if (!fs.existsSync(projPath)) {
    fs.mkdirSync(projPath, { recursive: true });
    console.log(`  Created directory: ${projPath}`);
  }
  const projIndexPath = path.join(projPath, 'index.astro');
  if (!fs.existsSync(projIndexPath)) {
    fs.writeFileSync(projIndexPath, pageTemplates.projects(lang));
    console.log(`  Created: ${projIndexPath}`);
  } else {
    console.log(`  Skipped (exists): ${projIndexPath}`);
  }
});

console.log('\nAll language pages created successfully!');
console.log('\nDon\'t forget to restart the Astro dev server to see the changes.');
