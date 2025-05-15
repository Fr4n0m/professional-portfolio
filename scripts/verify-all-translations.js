import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Idiomas disponibles
const languages = [
  'en', 'en-us', 'es', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Archivos de traducción esperados
const expectedFiles = [
  'header-items.json',
  'index.json',
  'certifications.json',
  'projects.json',
  'layout.json',
  'footer.json'
];

console.log('Verificando archivos de traducción para todos los idiomas...\n');

const missingFiles = [];
const emptyFiles = [];
const validFiles = [];

// Verificar cada idioma
languages.forEach(lang => {
  console.log(`\n=== ${lang.toUpperCase()} ===`);
  const langPath = path.join(translationsPath, lang);
  
  if (!fs.existsSync(langPath)) {
    console.log(`❌ Directorio no existe: ${lang}/`);
    missingFiles.push(`${lang}/ (directorio completo)`);
    return;
  }
  
  // Verificar cada archivo esperado
  expectedFiles.forEach(file => {
    const filePath = path.join(langPath, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ Falta: ${file}`);
      missingFiles.push(`${lang}/${file}`);
    } else {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const json = JSON.parse(content);
        
        // Verificar si está vacío o tiene campos vacíos
        if (Array.isArray(json)) {
          const hasEmpty = json.some(item => 
            Object.values(item).some(val => val === '' || val === null || val === undefined)
          );
          if (hasEmpty) {
            console.log(`⚠️  Campos vacíos: ${file}`);
            emptyFiles.push(`${lang}/${file}`);
          } else {
            console.log(`✅ OK: ${file}`);
            validFiles.push(`${lang}/${file}`);
          }
        } else if (typeof json === 'object') {
          const isEmpty = Object.keys(json).length === 0;
          if (isEmpty) {
            console.log(`⚠️  Vacío: ${file}`);
            emptyFiles.push(`${lang}/${file}`);
          } else {
            console.log(`✅ OK: ${file}`);
            validFiles.push(`${lang}/${file}`);
          }
        }
      } catch (error) {
        console.log(`❌ Error parseando: ${file} - ${error.message}`);
        emptyFiles.push(`${lang}/${file}`);
      }
    }
  });
});

// Resumen
console.log('\n\n=== RESUMEN ===');
console.log(`✅ Archivos válidos: ${validFiles.length}`);
console.log(`❌ Archivos faltantes: ${missingFiles.length}`);
console.log(`⚠️  Archivos con problemas: ${emptyFiles.length}`);

if (missingFiles.length > 0) {
  console.log('\nArchivos faltantes:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
}

if (emptyFiles.length > 0) {
  console.log('\nArchivos con problemas:');
  emptyFiles.forEach(file => console.log(`  - ${file}`));
}

// Generar script para crear archivos faltantes
if (missingFiles.length > 0) {
  const createScript = `
import fs from 'fs';
import path from 'path';

const missingFiles = ${JSON.stringify(missingFiles, null, 2)};

missingFiles.forEach(file => {
  const [lang, filename] = file.split('/');
  if (filename) {
    const filePath = path.join('src/translations', file);
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Crear archivo con estructura básica
    const content = filename === 'header-items.json' ? '[]' : '{}';
    fs.writeFileSync(filePath, content);
    console.log(\`✅ Creado: \${file}\`);
  }
});
  `;
  
  fs.writeFileSync(
    path.join(__dirname, 'create-missing-translations.js'),
    createScript
  );
  
  console.log('\n📝 Script generado: scripts/create-missing-translations.js');
  console.log('   Ejecuta este script para crear los archivos faltantes.');
}

// Verificar consistencia entre idiomas
console.log('\n\n=== VERIFICANDO CONSISTENCIA ===');

const referenceFiles = fs.readdirSync(path.join(translationsPath, 'es'));
languages.forEach(lang => {
  if (lang === 'es') return;
  
  const langFiles = fs.existsSync(path.join(translationsPath, lang)) 
    ? fs.readdirSync(path.join(translationsPath, lang))
    : [];
  
  const missingInLang = referenceFiles.filter(file => !langFiles.includes(file));
  
  if (missingInLang.length > 0) {
    console.log(`\n${lang}: Faltan ${missingInLang.length} archivos comparado con español`);
    missingInLang.forEach(file => console.log(`  - ${file}`));
  } else {
    console.log(`\n${lang}: ✅ Tiene todos los archivos`);
  }
});
