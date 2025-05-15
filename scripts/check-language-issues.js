import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesPath = path.join(__dirname, '..', 'src', 'pages');

// Idiomas disponibles
const languages = [
  'en', 'en-us', 'es', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

console.log('Verificando estructura de páginas...\n');

// Verificar páginas dinámicas
const dynamicPath = path.join(pagesPath, '[lang]');
if (fs.existsSync(dynamicPath)) {
  console.log('✅ Encontradas páginas dinámicas en [lang]/');
  const dynamicFiles = fs.readdirSync(dynamicPath);
  console.log('   Páginas:', dynamicFiles);
} else {
  console.log('❌ No se encontraron páginas dinámicas');
}

console.log('\n');

// Verificar páginas estáticas por idioma
let staticPages = {};
languages.forEach(lang => {
  const langPath = path.join(pagesPath, lang);
  if (fs.existsSync(langPath)) {
    const files = fs.readdirSync(langPath);
    staticPages[lang] = files;
    console.log(`✅ ${lang}: ${files.length} páginas estáticas encontradas`);
  } else {
    console.log(`❌ ${lang}: No hay directorio de páginas estáticas`);
  }
});

console.log('\nRecomendaciones:');
console.log('1. Usa solo páginas dinámicas [lang]/ para consistencia');
console.log('2. Elimina las páginas estáticas duplicadas');
console.log('3. Asegúrate de que getStaticPaths genere rutas para todos los idiomas');

// Verificar si hay conflictos
const hasConflict = Object.keys(staticPages).length > 0 && fs.existsSync(dynamicPath);
if (hasConflict) {
  console.log('\n⚠️  ADVERTENCIA: Hay páginas estáticas y dinámicas mezcladas.');
  console.log('Esto puede causar conflictos de rutas y problemas con los idiomas.');
}

// Verificar archivos de traducción
console.log('\nVerificando archivos de traducción...');
languages.forEach(lang => {
  const headerPath = path.join(__dirname, '..', 'src', 'translations', lang, 'header-items.json');
  if (fs.existsSync(headerPath)) {
    try {
      const content = JSON.parse(fs.readFileSync(headerPath, 'utf-8'));
      const isValid = content.every(item => item.title && item.label && item.url);
      if (isValid) {
        console.log(`✅ ${lang}/header-items.json: Válido`);
      } else {
        console.log(`❌ ${lang}/header-items.json: Tiene campos vacíos`);
      }
    } catch (e) {
      console.log(`❌ ${lang}/header-items.json: Error al parsear JSON`);
    }
  } else {
    console.log(`❌ ${lang}/header-items.json: No existe`);
  }
});
