import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// La ruta de las traducciones (relativa al script)
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Los idiomas disponibles
const languages = [
  'en', 'en-us', 'es', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

// Función para procesar cada archivo
function processLanguageFile(lang) {
  const filePath = path.join(translationsPath, lang, 'header-items.json');
  
  try {
    // Leer el archivo
    const content = fs.readFileSync(filePath, 'utf-8');
    const items = JSON.parse(content);
    
    // Procesar cada item
    const updatedItems = items.map(item => {
      let updatedItem = { ...item };
      
      // Si el label es "inicio", "home" o similar, cambiar a "main"
      if (item.label === 'inicio' || item.label === 'home' || 
          item.url.includes('#inicio') || item.url.includes('#home')) {
        updatedItem.label = 'main';
        
        // Actualizar la URL para usar #main
        if (item.url.includes('#')) {
          updatedItem.url = lang === 'es' ? '/#main' : `/${lang}/#main`;
        }
      }
      
      return updatedItem;
    });
    
    // Escribir el archivo actualizado
    fs.writeFileSync(filePath, JSON.stringify(updatedItems, null, 2));
    console.log(`✅ Actualizado: ${lang}/header-items.json`);
    
  } catch (error) {
    console.error(`❌ Error procesando ${lang}: ${error.message}`);
  }
}

// Procesar todos los idiomas
console.log('Iniciando actualización de archivos header-items.json para corregir la sección home/inicio...');
languages.forEach(processLanguageFile);
console.log('Proceso completado!');