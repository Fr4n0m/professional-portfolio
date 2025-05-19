const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Obtener idiomas disponibles
const languages = fs.readdirSync(translationsDir).filter(
  dir => fs.statSync(path.join(translationsDir, dir)).isDirectory() && dir !== 'base'
);

console.log(`Verificando rutas de imágenes para ${languages.length} idiomas...`);

// Rutas correctas de imágenes y PDFs
const correctPaths = {
  'Certificado-CodeSpace': {
    image: '/assets/images/certificates/images/Certificado-CodeSpace.webp',
    pdf: '/assets/images/certificates/pdf/Certificado-CodeSpace.pdf'
  },
  'Certificado-Hack4u-PersonalizacionLinux': {
    image: '/assets/images/certificates/images/Certificado-Hack4u-PersonalizacionLinux.webp',
    pdf: '/assets/images/certificates/pdf/Certificado-Hack4u-PersonalizacionLinux.pdf'
  }
};

// Patrones comunes de errores en las rutas
const pathPatterns = [
  { 
    pattern: /Personalizaci(ó|o)nLinux/g, 
    replacement: 'PersonalizacionLinux' 
  },
  { 
    pattern: /[\\\/]images[\\\/]certificates[\\\/]/g, 
    replacement: '/assets/images/certificates/' 
  },
  {
    pattern: /[\\\/]certificates[\\\/]Certificado/g,
    replacement: '/assets/images/certificates/images/Certificado'
  }
];

// Revisar y corregir cada idioma
let updatedCount = 0;
let errorsFound = 0;

languages.forEach(lang => {
  const certFile = path.join(translationsDir, lang, 'certifications.json');
  
  if (fs.existsSync(certFile)) {
    try {
      let certifications = JSON.parse(fs.readFileSync(certFile, 'utf8'));
      let hasUpdates = false;
      
      // Revisar cada certificación
      certifications.forEach(cert => {
        // Verificar ruta de imagen
        if (cert.image) {
          const origImagePath = cert.image;
          
          // Aplicar correcciones comunes
          pathPatterns.forEach(({ pattern, replacement }) => {
            cert.image = cert.image.replace(pattern, replacement);
          });
          
          // Verificar si hay un path conocido para este certificado
          for (const [key, paths] of Object.entries(correctPaths)) {
            if (cert.image.includes(key)) {
              cert.image = paths.image;
              break;
            }
          }
          
          // Detectar si se realizó un cambio
          if (origImagePath !== cert.image) {
            hasUpdates = true;
            console.log(`⚠️ Corrigiendo ruta de imagen en ${lang}: "${origImagePath}" -> "${cert.image}"`);
            errorsFound++;
          }
        }
        
        // Verificar ruta de PDF
        if (cert.url) {
          const origPdfPath = cert.url;
          
          // Aplicar correcciones comunes
          pathPatterns.forEach(({ pattern, replacement }) => {
            if (pattern.toString().includes('images')) {
              // Para PDFs, reemplazamos 'images' por 'pdf'
              const pdfReplacement = replacement.replace('/images/', '/pdf/');
              cert.url = cert.url.replace(pattern, pdfReplacement);
            } else {
              cert.url = cert.url.replace(pattern, replacement);
            }
          });
          
          // Verificar si hay un path conocido para este certificado
          for (const [key, paths] of Object.entries(correctPaths)) {
            if (cert.url.includes(key)) {
              cert.url = paths.pdf;
              break;
            }
          }
          
          // Detectar si se realizó un cambio
          if (origPdfPath !== cert.url) {
            hasUpdates = true;
            console.log(`⚠️ Corrigiendo ruta de PDF en ${lang}: "${origPdfPath}" -> "${cert.url}"`);
            errorsFound++;
          }
        }
      });
      
      // Guardar si hay cambios
      if (hasUpdates) {
        fs.writeFileSync(certFile, JSON.stringify(certifications, null, 2), 'utf8');
        updatedCount++;
      }
    } catch (error) {
      console.error(`❌ Error al procesar ${lang}/certifications.json:`, error.message);
    }
  }
});

console.log(`
==================== RESUMEN ====================
✅ Archivos actualizados: ${updatedCount}
⚠️ Errores de ruta encontrados y corregidos: ${errorsFound}
📁 Total de idiomas verificados: ${languages.length}
===============================================
`);
