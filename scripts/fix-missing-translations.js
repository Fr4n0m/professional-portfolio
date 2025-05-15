import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Traducciones por defecto para idiomas con problemas
const defaultTranslations = {
  'it': [
    { title: "Pagina principale", label: "inicio", url: "/it/#inicio" },
    { title: "Competenze", label: "habilidades", url: "/it/#habilidades" },
    { title: "Esperienza", label: "experiencia", url: "/it/#experiencia" },
    { title: "Progetti", label: "proyectos", url: "/it/#proyectos" },
    { title: "Certificazioni", label: "certificaciones", url: "/it/certifications" },
    { title: "Contatto", label: "contacto", url: "mailto:fran11799@outlook.com" },
    { title: "CV", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ],
  'nl': [
    { title: "Start", label: "inicio", url: "/nl/#inicio" },
    { title: "Vaardigheden", label: "habilidades", url: "/nl/#habilidades" },
    { title: "Ervaring", label: "experiencia", url: "/nl/#experiencia" },
    { title: "Projecten", label: "proyectos", url: "/nl/#proyectos" },
    { title: "Certificaten", label: "certificaciones", url: "/nl/certifications" },
    { title: "Contact", label: "contacto", url: "mailto:fran11799@outlook.com" },
    { title: "CV", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ],
  'tr': [
    { title: "Ana Sayfa", label: "inicio", url: "/tr/#inicio" },
    { title: "Yetenekler", label: "habilidades", url: "/tr/#habilidades" },
    { title: "Deneyim", label: "experiencia", url: "/tr/#experiencia" },
    { title: "Projeler", label: "proyectos", url: "/tr/#proyectos" },
    { title: "Sertifikalar", label: "certificaciones", url: "/tr/certifications" },
    { title: "İletişim", label: "contacto", url: "mailto:fran11799@outlook.com" },
    { title: "CV", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ]
};

// Reparar archivos vacíos
Object.entries(defaultTranslations).forEach(([lang, translations]) => {
  const filePath = path.join(translationsPath, lang, 'header-items.json');
  
  try {
    // Escribir las traducciones por defecto
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2));
    console.log(`✅ Reparado: ${lang}/header-items.json`);
  } catch (error) {
    console.error(`❌ Error reparando ${lang}: ${error.message}`);
  }
});

console.log('Reparación completada!');
