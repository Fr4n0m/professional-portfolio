import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Verificando imports de traducciones...\n');

// Intentar importar cada archivo index.ts
const languages = ['en', 'es', 'fr', 'de', 'ja', 'ru', 'zh', 'pt', 'it', 'ko', 'nl', 'pl', 'tr'];

for (const lang of languages) {
  console.log(`\n=== ${lang.toUpperCase()} ===`);
  
  try {
    // Verificar que existe el archivo
    const indexPath = path.join(__dirname, '..', 'src', 'translations', lang, 'index.ts');
    if (!fs.existsSync(indexPath)) {
      console.log(`❌ No existe index.ts`);
      continue;
    }
    
    // Verificar contenido
    const content = fs.readFileSync(indexPath, 'utf-8');
    console.log(`✅ index.ts existe (${content.length} caracteres)`);
    
    // Verificar imports en el archivo
    const imports = content.match(/import .* from/g);
    if (imports) {
      console.log(`   Imports encontrados: ${imports.length}`);
      
      // Verificar que los archivos importados existen
      const fileImports = content.match(/from '\.\/(.+)'/g);
      if (fileImports) {
        fileImports.forEach(imp => {
          const fileName = imp.match(/from '\.\/(.+)'/)?.[1];
          if (fileName) {
            const filePath = path.join(__dirname, '..', 'src', 'translations', lang, fileName);
            if (!fs.existsSync(filePath)) {
              console.log(`   ❌ Archivo faltante: ${fileName}`);
            }
          }
        });
      }
    }
    
    // Verificar exports
    if (content.includes('export default')) {
      console.log(`   ✅ Export default encontrado`);
    } else {
      console.log(`   ❌ No hay export default`);
    }
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

// Verificar const.ts
console.log('\n\n=== CONST.TS ===');
const constPath = path.join(__dirname, '..', 'src', 'utils', 'const.ts');
if (fs.existsSync(constPath)) {
  const content = fs.readFileSync(constPath, 'utf-8');
  console.log(`✅ const.ts existe (${content.length} caracteres)`);
  
  // Verificar estructura
  if (content.includes('textsJson')) {
    console.log('✅ textsJson definido');
  }
  if (content.includes('loadTranslations')) {
    console.log('✅ loadTranslations función encontrada');
  }
  
  // Buscar imports problemáticos
  const requireStatements = content.match(/require\(.+\)/g);
  if (requireStatements) {
    console.log(`\nRequire statements: ${requireStatements.length}`);
    requireStatements.forEach(req => {
      console.log(`   ${req}`);
    });
  }
}
