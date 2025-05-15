
import fs from 'fs';
import path from 'path';

const missingFiles = [
  "en/index.json",
  "en/footer.json",
  "en-us/index.json",
  "en-us/footer.json",
  "es/index.json",
  "es/footer.json",
  "es-mx/index.json",
  "es-mx/footer.json",
  "zh/index.json",
  "zh/footer.json",
  "pt/index.json",
  "pt/footer.json",
  "fr/index.json",
  "fr/footer.json",
  "de/index.json",
  "de/footer.json",
  "ja/index.json",
  "ja/footer.json",
  "ru/index.json",
  "ru/footer.json",
  "ar/index.json",
  "ar/footer.json",
  "hi/index.json",
  "hi/footer.json",
  "it/index.json",
  "it/footer.json",
  "ko/index.json",
  "ko/footer.json",
  "nl/index.json",
  "nl/footer.json",
  "pl/index.json",
  "pl/footer.json",
  "tr/index.json",
  "tr/footer.json",
  "hv/index.json",
  "hv/footer.json"
];

missingFiles.forEach(file => {
  const [lang, filename] = file.split('/');
  if (filename) {
    const filePath = path.join('src/translations', file);
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Crear archivo con estructura básica
    const content = filename === 'header-items.json' ? '[]' : '{}';
    fs.writeFileSync(filePath, content);
    console.log(`✅ Creado: ${file}`);
  }
});
  