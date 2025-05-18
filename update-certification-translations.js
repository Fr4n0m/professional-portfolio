const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Definir las traducciones para certificaciones en cada idioma
const certificationTexts = {
  'ar': {
    'allCertifications': 'جميع الشهادات',
    'allCertificationsLink': '/ar/certifications',
    'viewMore': 'عرض المزيد من الشهادات'
  },
  'de': {
    'allCertifications': 'Alle Zertifikate',
    'allCertificationsLink': '/de/certifications',
    'viewMore': 'Weitere Zertifikate anzeigen'
  },
  'fr': {
    'allCertifications': 'Toutes les certifications',
    'allCertificationsLink': '/fr/certifications',
    'viewMore': 'Voir plus de certifications'
  },
  'hi': {
    'allCertifications': 'सभी प्रमाणपत्र',
    'allCertificationsLink': '/hi/certifications',
    'viewMore': 'अधिक प्रमाणपत्र देखें'
  },
  'hv': {
    'allCertifications': 'Bisa Kīsir',
    'allCertificationsLink': '/hv/certifications',
    'viewMore': 'Ȳdragon ziry ēza kīsir'
  },
  'it': {
    'allCertifications': 'Tutte le certificazioni',
    'allCertificationsLink': '/it/certifications',
    'viewMore': 'Visualizza altre certificazioni'
  },
  'ja': {
    'allCertifications': 'すべての認定',
    'allCertificationsLink': '/ja/certifications',
    'viewMore': 'その他の認定を見る'
  },
  'ko': {
    'allCertifications': '모든 자격증',
    'allCertificationsLink': '/ko/certifications',
    'viewMore': '더 많은 자격증 보기'
  },
  'nl': {
    'allCertifications': 'Alle certificaten',
    'allCertificationsLink': '/nl/certifications',
    'viewMore': 'Meer certificaten bekijken'
  },
  'pl': {
    'allCertifications': 'Wszystkie certyfikaty',
    'allCertificationsLink': '/pl/certifications',
    'viewMore': 'Zobacz więcej certyfikatów'
  },
  'pt': {
    'allCertifications': 'Todas as certificações',
    'allCertificationsLink': '/pt/certifications',
    'viewMore': 'Ver mais certificações'
  },
  'ru': {
    'allCertifications': 'Все сертификаты',
    'allCertificationsLink': '/ru/certifications',
    'viewMore': 'Посмотреть больше сертификатов'
  },
  'tr': {
    'allCertifications': 'Tüm sertifikalar',
    'allCertificationsLink': '/tr/certifications',
    'viewMore': 'Daha fazla sertifika gör'
  },
  'zh': {
    'allCertifications': '所有证书',
    'allCertificationsLink': '/zh/certifications',
    'viewMore': '查看更多证书'
  },
  'es-mx': {
    'allCertifications': 'Todas las certificaciones',
    'allCertificationsLink': '/es-mx/certifications',
    'viewMore': 'Ver más certificaciones'
  }
};

// Procesar cada idioma
const languages = Object.keys(certificationTexts);
let updatedCount = 0;

languages.forEach(lang => {
  const certFilePath = path.join(translationsDir, lang, 'certifications-page.json');
  
  if (fs.existsSync(certFilePath)) {
    try {
      let certData = JSON.parse(fs.readFileSync(certFilePath, 'utf8'));
      
      // Añadir las propiedades faltantes
      let updated = false;
      
      if (!certData.allCertifications) {
        certData.allCertifications = certificationTexts[lang].allCertifications;
        updated = true;
      }
      
      if (!certData.allCertificationsLink) {
        certData.allCertificationsLink = certificationTexts[lang].allCertificationsLink;
        updated = true;
      }
      
      if (!certData.viewMore) {
        certData.viewMore = certificationTexts[lang].viewMore;
        updated = true;
      }
      
      // Guardar los cambios si se realizaron actualizaciones
      if (updated) {
        fs.writeFileSync(certFilePath, JSON.stringify(certData, null, 2), 'utf8');
        updatedCount++;
        console.log(`✅ Actualizado ${lang}/certifications-page.json`);
      } else {
        console.log(`ℹ️ No se requieren actualizaciones para ${lang}/certifications-page.json`);
      }
    } catch (error) {
      console.error(`❌ Error al procesar ${lang}/certifications-page.json:`, error.message);
    }
  } else {
    console.log(`⚠️ No existe el archivo certifications-page.json para ${lang}`);
  }
});

console.log(`
=================== RESUMEN ===================
✅ Archivos de traducciones actualizados: ${updatedCount}
📁 Total de idiomas procesados: ${languages.length}
==============================================
`);
