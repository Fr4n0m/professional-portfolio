const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Obtener idiomas disponibles
const languages = fs.readdirSync(translationsDir).filter(
  dir => fs.statSync(path.join(translationsDir, dir)).isDirectory() && dir !== 'base'
);

console.log(`Verificando traducciones para ${languages.length} idiomas...`);

// Propiedades necesarias en certifications-page.json
const requiredProps = [
  'certifications',
  'certificationsTitle',
  'certificationsDescription',
  'pdfBadge',
  'downloadButton',
  'allCertifications',
  'allCertificationsLink',
  'viewMore',
  'selectedCertificationsSubtitle'
];

// Traducciones predeterminadas para cada idioma
const defaultTranslations = {
  'ar': {
    selectedCertificationsSubtitle: 'الشهادات المميزة',
    allCertifications: 'جميع الشهادات',
    viewMore: 'عرض المزيد من الشهادات'
  },
  'de': {
    selectedCertificationsSubtitle: 'Ausgewählte Zertifikate',
    allCertifications: 'Alle Zertifikate',
    viewMore: 'Weitere Zertifikate anzeigen'
  },
  'en': {
    selectedCertificationsSubtitle: 'Featured Certifications',
    allCertifications: 'All Certifications',
    viewMore: 'View more certifications'
  },
  'en-us': {
    selectedCertificationsSubtitle: 'Featured Certifications',
    allCertifications: 'All Certifications',
    viewMore: 'View more certifications'
  },
  'es': {
    selectedCertificationsSubtitle: 'Certificaciones destacadas',
    allCertifications: 'Todas las certificaciones',
    viewMore: 'Ver más certificaciones'
  },
  'es-mx': {
    selectedCertificationsSubtitle: 'Certificaciones destacadas',
    allCertifications: 'Todas las certificaciones',
    viewMore: 'Ver más certificaciones'
  },
  'fr': {
    selectedCertificationsSubtitle: 'Certifications en vedette',
    allCertifications: 'Toutes les certifications',
    viewMore: 'Voir plus de certifications'
  },
  'hi': {
    selectedCertificationsSubtitle: 'प्रमुख प्रमाणपत्र',
    allCertifications: 'सभी प्रमाणपत्र',
    viewMore: 'अधिक प्रमाणपत्र देखें'
  },
  'it': {
    selectedCertificationsSubtitle: 'Certificazioni in evidenza',
    allCertifications: 'Tutte le certificazioni',
    viewMore: 'Visualizza altre certificazioni'
  },
  'ja': {
    selectedCertificationsSubtitle: '注目の認定',
    allCertifications: 'すべての認定',
    viewMore: 'その他の認定を見る'
  },
  'ko': {
    selectedCertificationsSubtitle: '주요 자격증',
    allCertifications: '모든 자격증',
    viewMore: '더 많은 자격증 보기'
  },
  'nl': {
    selectedCertificationsSubtitle: 'Uitgelichte certificaten',
    allCertifications: 'Alle certificaten',
    viewMore: 'Meer certificaten bekijken'
  },
  'pl': {
    selectedCertificationsSubtitle: 'Wyróżnione certyfikaty',
    allCertifications: 'Wszystkie certyfikaty',
    viewMore: 'Zobacz więcej certyfikatów'
  },
  'pt': {
    selectedCertificationsSubtitle: 'Certificações em destaque',
    allCertifications: 'Todas as certificações',
    viewMore: 'Ver mais certificações'
  },
  'ru': {
    selectedCertificationsSubtitle: 'Избранные сертификаты',
    allCertifications: 'Все сертификаты',
    viewMore: 'Посмотреть больше сертификатов'
  },
  'tr': {
    selectedCertificationsSubtitle: 'Öne Çıkan Sertifikalar',
    allCertifications: 'Tüm sertifikalar',
    viewMore: 'Daha fazla sertifika gör'
  },
  'zh': {
    selectedCertificationsSubtitle: '精选证书',
    allCertifications: '所有证书',
    viewMore: '查看更多证书'
  },
  'hv': {
    selectedCertificationsSubtitle: 'Kīsir Naejot',
    allCertifications: 'Bisa Kīsir',
    viewMore: 'Ȳdragon ziry ēza kīsir'
  }
};

// Revisar y actualizar cada idioma
let updatedCount = 0;
let missingCount = 0;

languages.forEach(lang => {
  const certFilePath = path.join(translationsDir, lang, 'certifications-page.json');
  
  // Si no existe el archivo, lo creamos
  if (!fs.existsSync(certFilePath)) {
    try {
      // Leer el archivo base
      const baseFile = path.join(translationsDir, 'base', 'certifications-page.json');
      let baseData = {};
      
      if (fs.existsSync(baseFile)) {
        baseData = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
      }
      
      // Crear objeto con traducciones para este idioma
      const certData = { ...baseData };
      
      // Añadir las traducciones específicas del idioma
      if (defaultTranslations[lang]) {
        Object.keys(defaultTranslations[lang]).forEach(key => {
          certData[key] = defaultTranslations[lang][key];
        });
      }
      
      // Asegurar ruta correcta
      const langPrefix = lang === 'es' ? '' : `/${lang}`;
      certData.allCertificationsLink = `${langPrefix}/certifications`;
      
      // Guardar el archivo
      fs.writeFileSync(certFilePath, JSON.stringify(certData, null, 2), 'utf8');
      updatedCount++;
      console.log(`✅ Creado nuevo archivo de traducciones para ${lang}/certifications-page.json`);
    } catch (error) {
      console.error(`❌ Error al crear ${lang}/certifications-page.json:`, error.message);
    }
    
    missingCount++;
    return;
  }
  
  // Actualizar archivo existente
  try {
    let certData = JSON.parse(fs.readFileSync(certFilePath, 'utf8'));
    let hasUpdates = false;
    
    // Verificar propiedades faltantes
    requiredProps.forEach(prop => {
      if (!certData[prop]) {
        if (defaultTranslations[lang] && defaultTranslations[lang][prop]) {
          certData[prop] = defaultTranslations[lang][prop];
        } else if (prop === 'allCertificationsLink') {
          const langPrefix = lang === 'es' ? '' : `/${lang}`;
          certData[prop] = `${langPrefix}/certifications`;
        }
        hasUpdates = true;
      }
    });
    
    // Asegurar que la URL sea correcta para el idioma
    if (certData.allCertificationsLink) {
      const langPrefix = lang === 'es' ? '' : `/${lang}`;
      const correctUrl = `${langPrefix}/certifications`;
      
      if (certData.allCertificationsLink !== correctUrl) {
        certData.allCertificationsLink = correctUrl;
        hasUpdates = true;
      }
    }
    
    // Guardar si hay cambios
    if (hasUpdates) {
      fs.writeFileSync(certFilePath, JSON.stringify(certData, null, 2), 'utf8');
      updatedCount++;
      console.log(`✅ Actualizado ${lang}/certifications-page.json`);
    }
  } catch (error) {
    console.error(`❌ Error al procesar ${lang}/certifications-page.json:`, error.message);
  }
});

console.log(`
==================== RESUMEN ====================
✅ Archivos actualizados: ${updatedCount}
⚠️ Archivos faltantes: ${missingCount}
📁 Total de idiomas verificados: ${languages.length}
===============================================
`);
