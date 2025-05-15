import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Idiomas con layout.json incompleto
const incompleteLanguages = ['ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr'];

console.log('Completando archivos layout.json incompletos...\n');

incompleteLanguages.forEach(lang => {
  const layoutPath = path.join(translationsPath, lang, 'layout.json');
  
  try {
    const content = JSON.parse(fs.readFileSync(layoutPath, 'utf-8'));
    
    // Si falta algún campo requerido, agregarlo
    if (!content.title || !content.titleDescription) {
      const completeLayout = {
        title: content.title || `Francisco José Rodríguez Martínez - Portfolio (${lang.toUpperCase()})`,
        titleDescription: content.titleDescription || `Full Stack Developer Portfolio - ${lang.toUpperCase()}`
      };
      
      fs.writeFileSync(layoutPath, JSON.stringify(completeLayout, null, 2));
      console.log(`✅ Completado: ${lang}/layout.json`);
    } else {
      console.log(`✓ Ya completo: ${lang}/layout.json`);
    }
  } catch (error) {
    // Si hay error, crear uno nuevo completo
    const newLayout = {
      title: `Francisco José Rodríguez Martínez - Portfolio (${lang.toUpperCase()})`,
      titleDescription: `Full Stack Developer Portfolio - ${lang.toUpperCase()}`
    };
    
    fs.writeFileSync(layoutPath, JSON.stringify(newLayout, null, 2));
    console.log(`✅ Creado nuevo: ${lang}/layout.json`);
  }
});

console.log('\n✅ Todos los archivos layout.json están completos!');
