import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Traducciones por defecto para cada idioma
const defaultTranslations = {
  'ru': [
    { title: "Главная", label: "inicio", url: "/ru/#inicio" },
    { title: "Навыки", label: "habilidades", url: "/ru/#habilidades" },
    { title: "Опыт", label: "experiencia", url: "/ru/#experiencia" },
    { title: "Проекты", label: "proyectos", url: "/ru/#proyectos" },
    { title: "Сертификаты", label: "certificaciones", url: "/ru/certifications" },
    { title: "Контакт", label: "contacto", url: "mailto:Fran11799@outlook.com" },
    { title: "Резюме", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ],
  'ko': [
    { title: "홈", label: "inicio", url: "/ko/#inicio" },
    { title: "기술", label: "habilidades", url: "/ko/#habilidades" },
    { title: "경험", label: "experiencia", url: "/ko/#experiencia" },
    { title: "프로젝트", label: "proyectos", url: "/ko/#proyectos" },
    { title: "인증", label: "certificaciones", url: "/ko/certifications" },
    { title: "연락처", label: "contacto", url: "mailto:Fran11799@outlook.com" },
    { title: "이력서", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ],
  'pl': [
    { title: "Start", label: "inicio", url: "/pl/#inicio" },
    { title: "Umiejętności", label: "habilidades", url: "/pl/#habilidades" },
    { title: "Doświadczenie", label: "experiencia", url: "/pl/#experiencia" },
    { title: "Projekty", label: "proyectos", url: "/pl/#proyectos" },
    { title: "Certyfikaty", label: "certificaciones", url: "/pl/certifications" },
    { title: "Kontakt", label: "contacto", url: "mailto:Fran11799@outlook.com" },
    { title: "CV", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ],
  'hv': [
    { title: "Home", label: "inicio", url: "/hv/#inicio" },
    { title: "Skills", label: "habilidades", url: "/hv/#habilidades" },
    { title: "Experience", label: "experiencia", url: "/hv/#experiencia" },
    { title: "Projects", label: "proyectos", url: "/hv/#proyectos" },
    { title: "Certifications", label: "certificaciones", url: "/hv/certifications" },
    { title: "Contact", label: "contacto", url: "mailto:Fran11799@outlook.com" },
    { title: "CV", label: "cv", url: "https://cv-web-smoky.vercel.app/" }
  ]
};

// Verificar todos los idiomas
const languages = Object.keys(defaultTranslations);

languages.forEach(lang => {
  const filePath = path.join(translationsPath, lang, 'header-items.json');
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const items = JSON.parse(content);
    
    // Verificar si hay campos vacíos
    const hasEmptyFields = items.some(item => !item.title || !item.label || !item.url);
    
    if (hasEmptyFields) {
      // Reemplazar con las traducciones por defecto
      fs.writeFileSync(filePath, JSON.stringify(defaultTranslations[lang], null, 2));
      console.log(`✅ Reparado: ${lang}/header-items.json`);
    } else {
      console.log(`✅ OK: ${lang}/header-items.json`);
    }
  } catch (error) {
    // Si hay error, crear el archivo con las traducciones por defecto
    fs.writeFileSync(filePath, JSON.stringify(defaultTranslations[lang], null, 2));
    console.log(`✅ Creado: ${lang}/header-items.json`);
  }
});

console.log('Verificación completada!');
