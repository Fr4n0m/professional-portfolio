import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// La ruta de las traducciones (relativa al script)
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Los idiomas disponibles
const languages = ['ar', 'de', 'en', 'en-us', 'es', 'es-mx', 'fr', 'hi', 'hv', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr', 'zh'];

// Los labels correctos (en español) que coinciden con los IDs de las secciones
const correctLabels = {
  home: 'inicio',
  skills: 'habilidades', 
  experience: 'experiencia',
  projects: 'proyectos',
  certifications: 'certificaciones',
  contact: 'contacto',
  cv: 'cv'
};

// Función para procesar cada archivo
function processLanguageFile(lang) {
  const filePath = path.join(translationsPath, lang, 'header-items.json');
  
  try {
    // Leer el archivo
    const content = fs.readFileSync(filePath, 'utf-8');
    const items = JSON.parse(content);
    
    // Procesar cada item
    const updatedItems = items.map(item => {
      // Encontrar el label correcto basado en el título
      let correctLabel = item.label;
      
      // Mapear los títulos comunes a los labels correctos
      const titleLower = item.title.toLowerCase();
      if (titleLower.includes('home') || titleLower.includes('inicio') || titleLower === 'home' || titleLower === 'início' || titleLower === 'accueil' || titleLower === 'главная' || titleLower === 'メイン') {
        correctLabel = 'inicio';
      } else if (titleLower.includes('skill') || titleLower.includes('habilidad') || titleLower.includes('компетенции') || titleLower.includes('スキル')) {
        correctLabel = 'habilidades';
      } else if (titleLower.includes('experience') || titleLower.includes('experiencia') || titleLower.includes('経験') || titleLower.includes('опыт')) {
        correctLabel = 'experiencia';
      } else if (titleLower.includes('project') || titleLower.includes('proyecto') || titleLower.includes('プロジェクト') || titleLower.includes('проекты')) {
        correctLabel = 'proyectos';
      } else if (titleLower.includes('certification') || titleLower.includes('certificación') || titleLower.includes('certificaciones') || titleLower.includes('сертификаты')) {
        correctLabel = 'certificaciones';
      } else if (titleLower.includes('contact') || titleLower.includes('contacto') || titleLower.includes('контакт')) {
        correctLabel = 'contacto';
      } else if (titleLower === 'cv') {
        correctLabel = 'cv';
      }
      
      // Actualizar la URL si es necesario
      let updatedUrl = item.url;
      if (item.url.includes('#')) {
        // Extraer la parte antes del hash
        const [basePath, hash] = item.url.split('#');
        // Actualizar el hash con el label correcto
        updatedUrl = `${basePath}#${correctLabel}`;
      }
      
      // Arreglar URLs que no tienen la barra correcta antes de certifications
      if (updatedUrl.includes('certifications') && !updatedUrl.includes('/certifications')) {
        const langPrefix = updatedUrl.match(/^\/[a-z-]+/)?.[0] || '';
        updatedUrl = `${langPrefix}/certifications`;
      }
      
      return {
        ...item,
        label: correctLabel,
        url: updatedUrl
      };
    });
    
    // Escribir el archivo actualizado
    fs.writeFileSync(filePath, JSON.stringify(updatedItems, null, 2));
    console.log(`✅ Actualizado: ${lang}/header-items.json`);
    
  } catch (error) {
    console.error(`❌ Error procesando ${lang}: ${error.message}`);
  }
}

// Procesar todos los idiomas
console.log('Iniciando actualización de archivos header-items.json...');
languages.forEach(processLanguageFile);
console.log('Proceso completado!');
