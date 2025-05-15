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

console.log('Verificando estructura de archivos de traducción...\n');

const missingStructure = [];

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  console.log(`\n=== ${lang.toUpperCase()} ===`);
  
  // Verificar directorio
  if (!fs.existsSync(langPath)) {
    console.log(`❌ Directorio no existe`);
    missingStructure.push(`${lang}: directorio completo`);
    return;
  }
  
  // Verificar index.ts
  const indexPath = path.join(langPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    console.log(`❌ Falta index.ts`);
    missingStructure.push(`${lang}: index.ts`);
  } else {
    console.log(`✅ index.ts existe`);
  }
  
  // Verificar archivos JSON críticos
  const criticalFiles = ['layout.json', 'header-items.json', 'main-page.json'];
  criticalFiles.forEach(file => {
    const filePath = path.join(langPath, file);
    if (!fs.existsSync(filePath)) {
      console.log(`❌ Falta ${file}`);
      missingStructure.push(`${lang}: ${file}`);
    } else {
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        if (file === 'layout.json' && (!content.title || !content.titleDescription)) {
          console.log(`⚠️  ${file} incompleto`);
        } else {
          console.log(`✅ ${file} válido`);
        }
      } catch (e) {
        console.log(`❌ ${file} JSON inválido`);
        missingStructure.push(`${lang}: ${file} (JSON inválido)`);
      }
    }
  });
});

if (missingStructure.length > 0) {
  console.log('\n\n❌ PROBLEMAS ENCONTRADOS:');
  missingStructure.forEach(issue => console.log(`  - ${issue}`));
  
  console.log('\n\n📝 SOLUCIÓN:');
  console.log('Ejecuta estos scripts en orden:');
  console.log('1. node scripts/fix-translation-imports.js');
  console.log('2. node scripts/create-minimal-translations.js');
} else {
  console.log('\n\n✅ Todas las traducciones tienen la estructura correcta!');
}
