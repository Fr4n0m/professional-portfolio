// Script para actualizar el menú de certificaciones en todos los idiomas
const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Obtener todos los directorios de idiomas
const langDirs = fs.readdirSync(translationsDir).filter(
  dir => fs.statSync(path.join(translationsDir, dir)).isDirectory()
);

console.log(`Procesando ${langDirs.length} idiomas...`);

// Procesar cada idioma
let updatedCount = 0;
let errorCount = 0;

langDirs.forEach(lang => {
  const headerItemsPath = path.join(translationsDir, lang, 'header-items.json');
  
  if (fs.existsSync(headerItemsPath)) {
    try {
      // Leer el archivo JSON
      let headerItems = JSON.parse(fs.readFileSync(headerItemsPath, 'utf8'));
      
      // Buscar el ítem de certificaciones (puede tener diferentes nombres pero el label o la URL contiene 'certifications')
      const certIndex = headerItems.findIndex(item => 
        item.label === 'certifications' || 
        (item.url && item.url.includes('/certifications'))
      );
      
      if (certIndex !== -1) {
        // Guardar el título actual (en el idioma correspondiente)
        const currentTitle = headerItems[certIndex].title;
        
        // Construir la URL correcta para el anchor
        const langPrefix = lang === 'es' ? '' : `/${lang}`;
        
        // Actualizar el ítem
        headerItems[certIndex] = {
          title: currentTitle,
          label: 'certifications-preview',
          url: `${langPrefix}/#certifications-preview`
        };
        
        // Guardar el archivo actualizado
        fs.writeFileSync(headerItemsPath, JSON.stringify(headerItems, null, 2) + '\n', 'utf8');
        updatedCount++;
        console.log(`✅ Actualizado ${lang}/header-items.json - "${currentTitle}" ahora apunta a certifications-preview`);
      } else {
        console.log(`⚠️ No se encontró el ítem de certificaciones en ${lang}/header-items.json`);
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error procesando ${lang}/header-items.json:`, error.message);
    }
  } else {
    console.log(`⚠️ No existe el archivo header-items.json para ${lang}`);
  }
});

console.log(`
==================== RESUMEN ====================
✅ Archivos actualizados: ${updatedCount}
❌ Errores encontrados: ${errorCount}
📁 Total de idiomas procesados: ${langDirs.length}
==================================================
`);
