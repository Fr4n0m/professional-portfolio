import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de archivos JSON a eliminar
const jsonFilesToDelete = [
  'ar.json',
  'de.json',
  'en-us.json',
  'en.json',
  'es-mx.json',
  'es.json',
  'fr.json',
  'hi.json',
  'hv.json',
  'it.json',
  'ja.json',
  'ko.json',
  'nl.json',
  'pl.json',
  'pt.json',
  'ru.json',
  'tr.json',
  'zh.json'
];

// Eliminar archivos JSON grandes
jsonFilesToDelete.forEach(file => {
  const filePath = path.join(__dirname, 'src/translations', file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted ${file}`);
    } else {
      console.log(`⚠ ${file} not found`);
    }
  } catch (error) {
    console.error(`✗ Error deleting ${file}:`, error.message);
  }
});

console.log('\n✓ Old JSON files cleaned up!');
