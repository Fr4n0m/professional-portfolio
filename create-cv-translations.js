const fs = require('fs');
const path = require('path');

// Definición de traducciones para cada idioma
const translations = {
  'en': {
    cvOnline: 'View CV online',
    cvDownload: 'Download PDF'
  },
  'en-us': {
    cvOnline: 'View CV online',
    cvDownload: 'Download PDF'
  },
  'es': {
    cvOnline: 'Ver CV online',
    cvDownload: 'Descargar PDF'
  },
  'es-mx': {
    cvOnline: 'Ver CV en línea',
    cvDownload: 'Descargar PDF'
  },
  'de': {
    cvOnline: 'Online-Lebenslauf anzeigen',
    cvDownload: 'PDF herunterladen'
  },
  'fr': {
    cvOnline: 'Voir CV en ligne',
    cvDownload: 'Télécharger PDF'
  },
  'it': {
    cvOnline: 'Vedi CV online',
    cvDownload: 'Scarica PDF'
  },
  'pt': {
    cvOnline: 'Ver CV online',
    cvDownload: 'Baixar PDF'
  },
  'ar': {
    cvOnline: 'عرض السيرة الذاتية عبر الإنترنت',
    cvDownload: 'تحميل PDF'
  },
  'hi': {
    cvOnline: 'ऑनलाइन CV देखें',
    cvDownload: 'PDF डाउनलोड करें'
  },
  'ja': {
    cvOnline: 'オンラインでCVを見る',
    cvDownload: 'PDFをダウンロード'
  },
  'ko': {
    cvOnline: '온라인 CV 보기',
    cvDownload: 'PDF 다운로드'
  },
  'nl': {
    cvOnline: 'CV online bekijken',
    cvDownload: 'PDF downloaden'
  },
  'pl': {
    cvOnline: 'Zobacz CV online',
    cvDownload: 'Pobierz PDF'
  },
  'ru': {
    cvOnline: 'Просмотреть резюме онлайн',
    cvDownload: 'Скачать PDF'
  },
  'tr': {
    cvOnline: 'CV\'yi çevrimiçi görüntüle',
    cvDownload: 'PDF İndir'
  },
  'zh': {
    cvOnline: '在线查看简历',
    cvDownload: '下载PDF'
  },
  'hv': {
    cvOnline: 'Jelmȳsagon CV',
    cvDownload: 'Dohaeragon PDF'
  }
};

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Lista de directorios de idiomas
const langDirs = fs.readdirSync(translationsDir).filter(
  (dir) => fs.statSync(path.join(translationsDir, dir)).isDirectory() && dir !== 'base'
);

console.log(`Procesando ${langDirs.length} idiomas para el menú CV...`);

// Procesar cada idioma
langDirs.forEach(lang => {
  const cvMenuPath = path.join(translationsDir, lang, 'cv-menu.json');
  
  try {
    // Obtener traducciones para este idioma o usar las de inglés por defecto
    const translation = translations[lang] || translations['en'];
    
    // Guardar el archivo de traducciones
    fs.writeFileSync(cvMenuPath, JSON.stringify(translation, null, 2), 'utf8');
    console.log(`✅ Creado archivo de traducciones CV para ${lang}`);
  } catch (error) {
    console.error(`❌ Error al procesar el idioma ${lang}:`, error.message);
  }
});

console.log('Proceso de traducciones CV completado.');
