const fs = require('fs');
const path = require('path');

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Lista de directorios de idiomas
const langDirs = fs.readdirSync(translationsDir).filter(
  (dir) => fs.statSync(path.join(translationsDir, dir)).isDirectory()
);

console.log(`Procesando ${langDirs.length} idiomas...`);

// Procesar cada idioma
langDirs.forEach((lang) => {
  const headerItemsPath = path.join(translationsDir, lang, 'header-items.json');
  
  // Verificar si el archivo existe
  if (fs.existsSync(headerItemsPath)) {
    try {
      // Leer el archivo
      const headerItems = JSON.parse(fs.readFileSync(headerItemsPath, 'utf8'));
      
      // Buscar el ítem de certificaciones
      const certItem = headerItems.find(item => 
        item.label === 'certifications' || 
        item.url.includes('/certifications')
      );
      
      if (certItem) {
        // Actualizar el ítem
        certItem.label = 'certifications-preview';
        
        // Actualizar la URL para que apunte al anchor
        if (certItem.url.includes('/certifications')) {
          // Si la URL apunta a una página de certificaciones, cambiarla para que apunte al anchor
          const langPrefix = lang === 'es' ? '' : `/${lang}`;
          certItem.url = `${langPrefix}/#certifications-preview`;
        }
        
        // Guardar el archivo actualizado
        fs.writeFileSync(headerItemsPath, JSON.stringify(headerItems, null, 2), 'utf8');
        console.log(`✅ Actualizado ${lang}/header-items.json`);
      } else {
        console.log(`⚠️ No se encontró el ítem de certificaciones en ${lang}/header-items.json`);
      }
    } catch (error) {
      console.error(`❌ Error procesando ${lang}/header-items.json:`, error);
    }
  } else {
    console.log(`⚠️ No existe el archivo header-items.json para ${lang}`);
  }
});

console.log('Proceso completo.');
