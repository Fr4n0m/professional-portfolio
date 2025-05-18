const fs = require('fs');
const path = require('path');

// Definición de traducciones para "Proyectos destacados" en cada idioma
const translations = {
  'en': 'Featured Projects',
  'en-us': 'Featured Projects',
  'es': 'Proyectos destacados',
  'es-mx': 'Proyectos destacados',
  'de': 'Ausgewählte Projekte',
  'fr': 'Projets en vedette',
  'it': 'Progetti in evidenza',
  'pt': 'Projetos em destaque',
  'ar': 'مشاريع مميزة',
  'hi': 'प्रमुख परियोजनाएं',
  'ja': '注目のプロジェクト',
  'ko': '주요 프로젝트',
  'nl': 'Uitgelichte projecten',
  'pl': 'Wyróżnione projekty',
  'ru': 'Избранные проекты',
  'tr': 'Öne Çıkan Projeler',
  'zh': '精选项目',
  'hv': 'Naejot dāeremagon'
};

// Directorio base de traducciones
const translationsDir = path.join(__dirname, 'src', 'translations');

// Lista de directorios de idiomas
const langDirs = fs.readdirSync(translationsDir).filter(
  (dir) => fs.statSync(path.join(translationsDir, dir)).isDirectory() && dir !== 'base'
);

console.log(`Actualizando ${langDirs.length} archivos projects-page.json...`);

// Procesar cada idioma
let updatedCount = 0;
let errorCount = 0;

langDirs.forEach(lang => {
  const projectsPagePath = path.join(translationsDir, lang, 'projects-page.json');
  
  if (fs.existsSync(projectsPagePath)) {
    try {
      // Leer el archivo JSON actual
      const projectsPage = JSON.parse(fs.readFileSync(projectsPagePath, 'utf8'));
      
      // Verificar si ya tiene la propiedad
      if (!projectsPage.selectedProjectsSubtitle) {
        // Añadir la propiedad con la traducción correspondiente
        projectsPage.selectedProjectsSubtitle = translations[lang] || translations['en'];
        
        // Guardar el archivo actualizado
        fs.writeFileSync(projectsPagePath, JSON.stringify(projectsPage, null, 2), 'utf8');
        updatedCount++;
        console.log(`✅ Actualizado ${lang}/projects-page.json con "selectedProjectsSubtitle"`);
      } else {
        console.log(`ℹ️ El archivo ${lang}/projects-page.json ya tiene la propiedad "selectedProjectsSubtitle"`);
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error al procesar ${lang}/projects-page.json:`, error.message);
    }
  } else {
    console.log(`⚠️ No existe el archivo projects-page.json para ${lang}`);
  }
});

console.log(`
==================== RESUMEN ====================
✅ Archivos actualizados: ${updatedCount}
❌ Errores encontrados: ${errorCount}
📁 Total de idiomas procesados: ${langDirs.length}
==================================================
`);
