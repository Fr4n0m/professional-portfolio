#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Función para buscar archivos con extensión específica
function findFiles(dir, ext) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
      results = results.concat(findFiles(filePath, ext));
    } else if (file.endsWith(ext)) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Buscar archivos Astro, JS, TS
const astroFiles = findFiles('./src', '.astro');
const jsFiles = findFiles('./src', '.js');
const tsFiles = findFiles('./src', '.ts');
const allFiles = [...astroFiles, ...jsFiles, ...tsFiles];

console.log('🔍 Buscando imports incorrectos...\n');

let foundIssues = false;

// Revisar cada archivo
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Buscar imports relativos de componentes que deberían usar alias
    if (line.includes("from './Tag.astro'") || 
        line.includes('from "./Tag.astro"') ||
        line.includes("from './Tag'") ||
        line.includes('from "./Tag"')) {
      console.log(`❌ Import incorrecto en ${file}:${index + 1}`);
      console.log(`   ${line.trim()}`);
      console.log(`   Debería ser: import Tag from '@components/ui/Tag.astro';`);
      console.log('');
      foundIssues = true;
    }
    
    if (line.includes("from './LinkButton") || 
        line.includes('from "./LinkButton')) {
      console.log(`❌ Import incorrecto en ${file}:${index + 1}`);
      console.log(`   ${line.trim()}`);
      console.log(`   Debería ser: import LinkButton from '@components/ui/LinkButton.astro';`);
      console.log('');
      foundIssues = true;
    }
    
    // Buscar imports de componentes sin la carpeta ui
    if (line.includes("from '@components/Tag") || 
        line.includes("from '@components/LinkButton")) {
      console.log(`❌ Import incorrecto en ${file}:${index + 1}`);
      console.log(`   ${line.trim()}`);
      console.log(`   Los componentes Tag y LinkButton están en @components/ui/`);
      console.log('');
      foundIssues = true;
    }
  });
}

if (!foundIssues) {
  console.log('✅ No se encontraron imports incorrectos!');
} else {
  console.log('\n📝 Ejecuta estos comandos para limpiar el caché:');
  console.log('   rm -rf node_modules .astro dist');
  console.log('   bun install');
  console.log('   bun run dev');
}
