import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, '..', 'src');

// Buscar todos los archivos Astro que necesitan verificación
function findAstroFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.startsWith('.')) {
        findAstroFiles(filePath, fileList);
      }
    } else if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Analizar archivos para problemas de idioma
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];
  const fixes = [];
  
  // Verificar detección de idioma incorrecta
  if (content.includes("includes('/en')") || content.includes('includes("/en")')) {
    issues.push('Detección de idioma limitada a en/es');
    fixes.push('Usar getCurrentLanguage() de @i18n/config');
  }
  
  // Verificar props de idioma faltantes
  if (content.includes('Astro.props') && content.includes('translations') && !content.includes('lang')) {
    issues.push('Componente recibe translations pero no lang');
    fixes.push('Agregar lang a las props del componente');
  }
  
  // Verificar URLs hardcodeadas
  const urlPatterns = [
    /href=["']\/(?!assets|public|api)/g,
    /to=["']\/(?!assets|public|api)/g,
    /url=["']\/(?!assets|public|api)/g
  ];
  
  urlPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches && !content.includes('[lang]')) {
      issues.push(`URLs hardcodeadas encontradas: ${matches.join(', ')}`);
      fixes.push('Usar rutas dinámicas con el idioma actual');
    }
  });
  
  // Verificar componentes que usan traducciones sin pasarlas
  if (content.includes('<') && content.includes('translations') && !content.includes('translations={')) {
    issues.push('Componente usa traducciones pero no las pasa a subcomponentes');
    fixes.push('Pasar translations como prop a todos los subcomponentes');
  }
  
  // Verificar getStaticPaths en páginas
  if (filePath.includes('/pages/') && content.includes('export') && !content.includes('getStaticPaths')) {
    if (!filePath.includes('[lang]') && !filePath.includes('api') && !filePath.includes('index.astro')) {
      issues.push('Página sin getStaticPaths para múltiples idiomas');
      fixes.push('Agregar getStaticPaths para generar rutas de todos los idiomas');
    }
  }
  
  return { issues, fixes };
}

console.log('Analizando todos los componentes para problemas de idioma...\n');

const files = findAstroFiles(srcPath);
const problemFiles = [];

files.forEach(file => {
  const relativePath = path.relative(srcPath, file);
  const { issues, fixes } = analyzeFile(file);
  
  if (issues.length > 0) {
    problemFiles.push({ file: relativePath, issues, fixes });
  }
});

// Mostrar resultados
if (problemFiles.length === 0) {
  console.log('✅ No se encontraron problemas de idioma en los componentes!');
} else {
  console.log(`❌ Se encontraron problemas en ${problemFiles.length} archivos:\n`);
  
  problemFiles.forEach(({ file, issues, fixes }) => {
    console.log(`📄 ${file}`);
    console.log('  Problemas:');
    issues.forEach(issue => console.log(`    - ${issue}`));
    console.log('  Soluciones:');
    fixes.forEach(fix => console.log(`    ✓ ${fix}`));
    console.log('');
  });
  
  // Generar informe
  const report = {
    totalFiles: files.length,
    filesWithIssues: problemFiles.length,
    details: problemFiles,
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(__dirname, 'language-issues-report.json'), 
    JSON.stringify(report, null, 2)
  );
  
  console.log('📊 Informe detallado guardado en: scripts/language-issues-report.json');
}

// Verificar componentes críticos
console.log('\n--- Verificando componentes críticos ---\n');

const criticalComponents = [
  'components/layout/Header.astro',
  'components/layout/Footer.astro',
  'components/LanguageToggle.astro',
  'components/pages/HomePage.astro',
  'layouts/Layout.astro'
];

criticalComponents.forEach(comp => {
  const fullPath = path.join(srcPath, comp);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const hasLangProp = content.includes('const { lang }') || content.includes('Astro.props.lang');
    const usesGetCurrentLanguage = content.includes('getCurrentLanguage');
    
    console.log(`${comp}:`);
    console.log(`  - Recibe prop lang: ${hasLangProp ? '✅' : '❌'}`);
    console.log(`  - Usa getCurrentLanguage: ${usesGetCurrentLanguage ? '✅' : '❌'}`);
  } else {
    console.log(`${comp}: ❌ No encontrado`);
  }
});
