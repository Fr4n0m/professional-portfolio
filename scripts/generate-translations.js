// Script para generar archivos de traducción base para todos los idiomas
import fs from 'fs';
import path from 'path';

// Configuración de idiomas (copiada de config.ts ya que no podemos importar TypeScript directamente)
const languages = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    direction: 'ltr',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    direction: 'ltr',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    direction: 'ltr',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    direction: 'ltr',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    direction: 'ltr',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    direction: 'ltr',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    direction: 'ltr',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    direction: 'ltr',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    direction: 'ltr',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    direction: 'ltr',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    direction: 'ltr',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
    flag: '🇳🇱',
    direction: 'ltr',
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱',
    direction: 'ltr',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    direction: 'ltr',
  },
};

// Leer archivo base (español o inglés)
const baseTranslations = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'src/translations/en.json'), 'utf-8')
);

// Función para crear estructura de traducción vacía
function createEmptyTranslation(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return typeof obj === 'string' ? '' : obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(createEmptyTranslation);
  }
  
  const empty = {};
  for (const key in obj) {
    empty[key] = createEmptyTranslation(obj[key]);
  }
  return empty;
}

// Generar archivos para cada idioma
Object.keys(languages).forEach(lang => {
  const filePath = path.join(process.cwd(), `src/translations/${lang}.json`);
  
  // Si ya existe, no sobrescribir
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${lang}.json already exists`);
    return;
  }
  
  // Crear estructura vacía basada en el archivo base
  const emptyTranslations = createEmptyTranslation(baseTranslations);
  
  // Añadir metadata del idioma
  emptyTranslations._metadata = {
    language: lang,
    languageName: languages[lang].name,
    nativeName: languages[lang].nativeName,
    direction: languages[lang].direction,
    lastUpdated: new Date().toISOString(),
    translationProgress: 0
  };
  
  // Escribir archivo
  fs.writeFileSync(filePath, JSON.stringify(emptyTranslations, null, 2));
  console.log(`✨ Created ${lang}.json`);
});

console.log('🌍 Translation files generation complete!');
