import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dynamicPagesPath = path.join(__dirname, '..', 'src', 'pages', '[lang]');

// Template para páginas dinámicas
const pageTemplate = (pageName, importPath, componentName) => `---
import Layout from '@layouts/Layout.astro';
import ${componentName} from '${importPath}';
import { textsJson } from '@utils/const';
import type { Translations } from '../../types/translations';
import { languages } from '@i18n/config';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang }
  }));
}

const { lang } = Astro.params;
const langJson = textsJson[lang as keyof typeof textsJson];
const translations: Translations = langJson;

const layout = translations.layout;
---

<Layout
  title={layout.title}
  description={layout.titleDescription}
  json={langJson}
>
  <${componentName} translations={translations} />
</Layout>
`;

// Verificar y actualizar páginas dinámicas
const pages = [
  { file: 'index.astro', name: 'HomePage', import: '@components/pages/HomePage.astro' },
  { file: 'certifications/index.astro', name: 'Certifications', import: '@components/Certifications.astro' },
  { file: 'projects/index.astro', name: 'Projects', import: '@components/Projects/Projects.astro' }
];

console.log('Verificando páginas dinámicas...\n');

pages.forEach(page => {
  const filePath = path.join(dynamicPagesPath, page.file);
  const dir = path.dirname(filePath);
  
  // Crear directorio si no existe
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Creado directorio: ${path.relative(dynamicPagesPath, dir)}`);
  }
  
  // Verificar si la página existe y tiene getStaticPaths
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('getStaticPaths')) {
      console.log(`✅ ${page.file}: OK`);
    } else {
      console.log(`⚠️  ${page.file}: No tiene getStaticPaths`);
    }
  } else {
    // Crear la página si no existe
    fs.writeFileSync(filePath, pageTemplate(page.name, page.import, page.name));
    console.log(`✅ Creado: ${page.file}`);
  }
});

console.log('\n✅ Todas las páginas dinámicas configuradas correctamente!');
