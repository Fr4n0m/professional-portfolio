const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Definir las traducciones para certificaciones destacadas en cada idioma
const certificationSubtitles = {
  'ar': 'الشهادات المميزة',
  'de': 'Ausgewählte Zertifikate',
  'es': 'Certificaciones destacadas',
  'es-mx': 'Certificaciones destacadas',
  'en': 'Featured Certifications',
  'en-us': 'Featured Certifications',
  'fr': 'Certifications en vedette',
  'hi': 'प्रमुख प्रमाणपत्र',
  'hv': 'Kīsir Naejot',
  'it': 'Certificazioni in evidenza',
  'ja': '注目の認定',
  'ko': '주요 자격증',
  'nl': 'Uitgelichte certificaten',
  'pl': 'Wyróżnione certyfikaty',
  'pt': 'Certificações em destaque',
  'ru': 'Избранные сертификаты',
  'tr': 'Öne Çıkan Sertifikalar',
  'zh': '精选证书'
};

// Procesar cada idioma
const languages = Object.keys(certificationSubtitles);
let updatedCount = 0;

languages.forEach(lang => {
  const certFilePath = path.join(translationsDir, lang, 'certifications-page.json');
  
  if (fs.existsSync(certFilePath)) {
    try {
      let certData = JSON.parse(fs.readFileSync(certFilePath, 'utf8'));
      
      // Añadir la propiedad selectedCertificationsSubtitle si no existe
      if (!certData.selectedCertificationsSubtitle) {
        certData.selectedCertificationsSubtitle = certificationSubtitles[lang];
        
        // Asegurar que la URL de allCertificationsLink sea correcta
        if (certData.allCertificationsLink) {
          // Si el idioma es español (raíz), la URL es /certifications
          // Para otros idiomas, la URL debe incluir el prefijo del idioma
          const langPrefix = lang === 'es' ? '' : `/${lang}`;
          certData.allCertificationsLink = `${langPrefix}/certifications`;
        }
        
        // Guardar el archivo actualizado
        fs.writeFileSync(certFilePath, JSON.stringify(certData, null, 2), 'utf8');
        updatedCount++;
        console.log(`✅ Actualizado ${lang}/certifications-page.json`);
      } else {
        console.log(`ℹ️ El archivo ${lang}/certifications-page.json ya tiene la propiedad selectedCertificationsSubtitle`);
      }
    } catch (error) {
      console.error(`❌ Error al procesar ${lang}/certifications-page.json:`, error.message);
    }
  } else {
    console.log(`⚠️ No existe el archivo certifications-page.json para ${lang}`);
  }
});

console.log(`
==================== RESUMEN ====================
✅ Archivos de traducciones actualizados: ${updatedCount}
📁 Total de idiomas procesados: ${languages.length}
==============================================
`);
