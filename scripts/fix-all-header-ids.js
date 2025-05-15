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

// Los labels correctos (en español) que coinciden con los IDs de las secciones
const sectionIds = {
  home: 'inicio',
  skills: 'habilidades', 
  experience: 'experiencia',
  projects: 'proyectos'
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
      let updatedUrl = item.url;
      
      // Mapear los títulos comunes a los labels correctos
      const titleLower = item.title.toLowerCase();
      
      // Home section
      if (titleLower.includes('home') || titleLower.includes('inicio') || 
          titleLower === 'accueil' || titleLower === 'startseite' || 
          titleLower === 'главная' || titleLower === 'メイン' ||
          titleLower === 'início' || titleLower === '홈' ||
          titleLower === '主页' || titleLower === 'गृह' ||
          titleLower === 'الرئيسية' || titleLower === 'start' ||
          titleLower === 'ana sayfa' || titleLower === 'pagina principale') {
        correctLabel = 'inicio';
        updatedUrl = lang === 'es' ? '/#inicio' : `/${lang}/#inicio`;
      }
      // Skills section
      else if (titleLower.includes('skill') || titleLower.includes('habilidad') || 
               titleLower.includes('компетенции') || titleLower.includes('スキル') ||
               titleLower.includes('compétences') || titleLower.includes('fähigkeiten') ||
               titleLower.includes('competenze') || titleLower.includes('habilidades') ||
               titleLower.includes('技能') || titleLower.includes('कौशल') ||
               titleLower.includes('مهارات') || titleLower.includes('vaardigheden') ||
               titleLower.includes('umiejętności') || titleLower.includes('yetenekler')) {
        correctLabel = 'habilidades';
        updatedUrl = lang === 'es' ? '/#habilidades' : `/${lang}/#habilidades`;
      }
      // Experience section
      else if (titleLower.includes('experience') || titleLower.includes('experiencia') || 
               titleLower.includes('経験') || titleLower.includes('опыт') ||
               titleLower.includes('expérience') || titleLower.includes('erfahrung') ||
               titleLower.includes('esperienza') || titleLower.includes('experiência') ||
               titleLower.includes('经验') || titleLower.includes('अनुभव') ||
               titleLower.includes('خبرة') || titleLower.includes('경험') ||
               titleLower.includes('ervaring') || titleLower.includes('doświadczenie') ||
               titleLower.includes('deneyim')) {
        correctLabel = 'experiencia';
        updatedUrl = lang === 'es' ? '/#experiencia' : `/${lang}/#experiencia`;
      }
      // Projects section
      else if (titleLower.includes('project') || titleLower.includes('proyecto') || 
               titleLower.includes('プロジェクト') || titleLower.includes('проекты') ||
               titleLower.includes('projet') || titleLower.includes('projekt') ||
               titleLower.includes('progetti') || titleLower.includes('projetos') ||
               titleLower.includes('项目') || titleLower.includes('प्रोजेक्ट') ||
               titleLower.includes('مشاريع') || titleLower.includes('프로젝트') ||
               titleLower.includes('projecten') || titleLower.includes('projekty') ||
               titleLower.includes('projeler')) {
        correctLabel = 'proyectos';
        updatedUrl = lang === 'es' ? '/#proyectos' : `/${lang}/#proyectos`;
      }
      // Certifications section
      else if (titleLower.includes('certification') || titleLower.includes('certificación') || 
               titleLower.includes('certificazioni') || titleLower.includes('certificações') ||
               titleLower.includes('certifications') || titleLower.includes('certificados') ||
               titleLower.includes('zertifikate') || titleLower.includes('certificats') ||
               titleLower.includes('证书') || titleLower.includes('प्रमाणपत्र') ||
               titleLower.includes('شهادات') || titleLower.includes('인증') ||
               titleLower.includes('certificaten') || titleLower.includes('certyfikaty') ||
               titleLower.includes('sertifikalar')) {
        correctLabel = 'certificaciones';
        updatedUrl = lang === 'es' ? '/certifications' : `/${lang}/certifications`;
      }
      // Contact section
      else if (titleLower.includes('contact') || titleLower.includes('contacto') ||
               titleLower.includes('контакт') || titleLower.includes('連絡') ||
               titleLower.includes('联系') || titleLower.includes('संपर्क') ||
               titleLower.includes('اتصل') || titleLower.includes('연락') ||
               titleLower.includes('contatto') || titleLower.includes('contato') ||
               titleLower.includes('kontakt') || titleLower.includes('iletişim')) {
        correctLabel = 'contacto';
        // El email ya tiene la URL correcta
      }
      // CV section
      else if (titleLower === 'cv' || titleLower.includes('resume') || 
               titleLower === 'lebenslauf' || titleLower === '履歴書') {
        correctLabel = 'cv';
        // Mantener la URL del CV como está
      }
      
      return {
        ...item,
        label: correctLabel,
        url: item.url.includes('mailto:') || item.url.includes('http') ? item.url : updatedUrl
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
