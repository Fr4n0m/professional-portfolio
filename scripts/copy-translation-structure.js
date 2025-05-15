import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

const languages = [
  'en', 'en-us', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Copiar estructura desde español
const esPath = path.join(translationsPath, 'es');
const esFiles = fs.readdirSync(esPath).filter(file => file.endsWith('.json'));

console.log('Copiando estructura de traducciones desde español a otros idiomas...\n');

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  
  // Crear directorio si no existe
  if (!fs.existsSync(langPath)) {
    fs.mkdirSync(langPath, { recursive: true });
    console.log(`✅ Creado directorio: ${lang}/`);
  }
  
  // Copiar index.ts desde español
  const esIndexPath = path.join(esPath, 'index.ts');
  const langIndexPath = path.join(langPath, 'index.ts');
  if (!fs.existsSync(langIndexPath) && fs.existsSync(esIndexPath)) {
    fs.copyFileSync(esIndexPath, langIndexPath);
    console.log(`✅ Copiado: ${lang}/index.ts`);
  }
  
  // Procesar cada archivo JSON
  esFiles.forEach(file => {
    const esFilePath = path.join(esPath, file);
    const langFilePath = path.join(langPath, file);
    
    if (!fs.existsSync(langFilePath)) {
      try {
        const esContent = JSON.parse(fs.readFileSync(esFilePath, 'utf-8'));
        let langContent;
        
        // Mantener estructura pero con valores por traducir
        if (Array.isArray(esContent)) {
          langContent = esContent.map(item => {
            const newItem = {};
            Object.keys(item).forEach(key => {
              if (key === 'url' || key === 'label') {
                // Mantener URLs y labels
                newItem[key] = item[key];
              } else if (typeof item[key] === 'string') {
                // Marcar strings para traducción
                newItem[key] = `[${lang.toUpperCase()}] ${item[key]}`;
              } else {
                newItem[key] = item[key];
              }
            });
            return newItem;
          });
        } else if (typeof esContent === 'object') {
          langContent = {};
          const processObject = (obj, target) => {
            Object.keys(obj).forEach(key => {
              if (typeof obj[key] === 'string') {
                if (key === 'url' || key === 'label' || key.includes('Link')) {
                  target[key] = obj[key];
                } else {
                  target[key] = `[${lang.toUpperCase()}] ${obj[key]}`;
                }
              } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                target[key] = {};
                processObject(obj[key], target[key]);
              } else {
                target[key] = obj[key];
              }
            });
          };
          processObject(esContent, langContent);
        }
        
        fs.writeFileSync(langFilePath, JSON.stringify(langContent, null, 2));
        console.log(`✅ Creado: ${lang}/${file}`);
        
      } catch (error) {
        // Si no se puede parsear, copiar estructura vacía
        const content = fs.readFileSync(esFilePath, 'utf-8');
        if (content.trim().startsWith('[')) {
          fs.writeFileSync(langFilePath, '[]');
        } else {
          fs.writeFileSync(langFilePath, '{}');
        }
        console.log(`✅ Creado vacío: ${lang}/${file}`);
      }
    } else {
      console.log(`✓ Ya existe: ${lang}/${file}`);
    }
  });
  
  console.log('');
});

console.log('✅ Estructura copiada exitosamente!');
console.log('\nLos archivos creados tienen prefijos [LANG] para identificar qué textos necesitan traducción.');
