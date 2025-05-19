/**
 * Script para corregir el error JSX en utils/tags.ts
 * 
 * Este script busca y corrige el error "Expected ">" but found "className""
 * convirtiendo la sintaxis JSX a React.createElement.
 */

const fs = require('fs');
const path = require('path');

// Ruta al archivo tags.ts
const tagsPath = path.join(__dirname, '../src/utils/tags.ts');

try {
  // Leer el archivo
  console.log(`Leyendo archivo ${tagsPath}...`);
  let tagsContent = fs.readFileSync(tagsPath, 'utf8');
  
  // Buscar el patrón problemático (sintaxis JSX en archivo .ts)
  const jsxPattern = /icon: ICONS_MAP\[skill\] \|\| \(\(\) => \(\s*<span className="[^"]+">{\s*skill\.charAt\(0\)\s*}<\/span>\s*\)\)/;
  
  if (jsxPattern.test(tagsContent)) {
    console.log('Encontrado patrón JSX problemático.');
    
    // Reemplazar con React.createElement
    tagsContent = tagsContent.replace(
      jsxPattern,
      'icon: ICONS_MAP[skill] || ((props) => React.createElement(\'span\', { className: "text-xs font-bold" }, skill.charAt(0)))'
    );
    
    // Asegurarse de que React esté importado
    if (!tagsContent.includes('import React')) {
      // Buscar el último import
      const lastImportIndex = tagsContent.lastIndexOf('import');
      const lastImportEndIndex = tagsContent.indexOf(';', lastImportIndex) + 1;
      
      // Insertar el import de React después del último import
      const beforeImports = tagsContent.substring(0, lastImportEndIndex);
      const afterImports = tagsContent.substring(lastImportEndIndex);
      
      tagsContent = beforeImports + '\nimport React from \'react\';\n' + afterImports;
    }
    
    // Guardar el archivo
    fs.writeFileSync(tagsPath, tagsContent, 'utf8');
    console.log('✅ Archivo corregido exitosamente.');
  } else {
    console.log('No se encontró el patrón JSX problemático. El archivo podría ya estar corregido.');
  }
} catch (error) {
  console.error(`❌ Error al procesar el archivo: ${error.message}`);
  
  // Si el archivo no existe, sugerir cambiar la extensión
  if (error.code === 'ENOENT') {
    const tagsTsxPath = path.join(__dirname, '../src/utils/tags.tsx');
    
    try {
      // Verificar si existe tags.tsx
      fs.accessSync(tagsTsxPath, fs.constants.F_OK);
      console.log('ℹ️ Se encontró un archivo tags.tsx. No es necesario corregir el archivo tags.ts.');
    } catch (e) {
      console.log(`ℹ️ Recomendación: Cambia la extensión del archivo de '.ts' a '.tsx' con el siguiente comando:`);
      console.log(`  mv src/utils/tags.ts src/utils/tags.tsx\n`);
      console.log('  Esto permitirá usar la sintaxis JSX directamente sin necesidad de usar React.createElement.');
    }
  }
}
