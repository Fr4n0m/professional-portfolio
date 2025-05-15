import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesPath = path.join(__dirname, '..', 'src', 'pages');

// Idiomas que no son dinámicos
const staticLanguages = [
  'en', 'en-us', 'es-mx', 'zh', 'pt', 'fr', 'de', 'ja', 'ru', 
  'ar', 'hi', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'
];

console.log('Creando backup y eliminando páginas estáticas...\n');

// Crear directorio de backup
const backupPath = path.join(__dirname, '..', 'backup-static-pages');
if (!fs.existsSync(backupPath)) {
  fs.mkdirSync(backupPath, { recursive: true });
}

// Función para copiar directorio recursivamente
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (exists && isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Hacer backup y eliminar cada directorio de idioma estático
staticLanguages.forEach(lang => {
  const langPath = path.join(pagesPath, lang);
  const backupLangPath = path.join(backupPath, lang);
  
  if (fs.existsSync(langPath)) {
    try {
      // Crear backup
      copyRecursiveSync(langPath, backupLangPath);
      console.log(`✅ Backup creado: ${lang}/`);
      
      // Eliminar directorio original
      fs.rmSync(langPath, { recursive: true, force: true });
      console.log(`✅ Eliminado: ${lang}/`);
    } catch (error) {
      console.error(`❌ Error procesando ${lang}: ${error.message}`);
    }
  }
});

// También mover certifications y projects a [lang]
const staticDirs = ['certifications', 'projects'];
staticDirs.forEach(dir => {
  const dirPath = path.join(pagesPath, dir);
  const backupDirPath = path.join(backupPath, dir);
  
  if (fs.existsSync(dirPath)) {
    try {
      copyRecursiveSync(dirPath, backupDirPath);
      console.log(`✅ Backup creado: ${dir}/`);
      
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Eliminado: ${dir}/`);
    } catch (error) {
      console.error(`❌ Error procesando ${dir}: ${error.message}`);
    }
  }
});

console.log('\n✅ Proceso completado!');
console.log(`Backup guardado en: ${backupPath}`);
console.log('\nAhora solo hay páginas dinámicas en [lang]/');
console.log('Esto resolverá los conflictos de rutas.');
