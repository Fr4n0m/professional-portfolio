import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, '..', 'src');

// Lista de componentes que necesitan recibir lang
const componentsNeedingLang = [
  'components/Experience.astro',
  'components/Projects/Projects.astro',
  'components/Skills.astro',
  'components/Certifications.astro',
  'components/sections/Hero.astro',
  'components/layout/Footer.astro',
  'components/layout/AlternativeFooter.astro'
];

// Actualizar props de componentes
function updateComponentProps(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;
  
  // Si el componente recibe translations pero no lang
  if (content.includes('interface Props') && content.includes('translations') && !content.includes('lang')) {
    // Agregar lang a la interfaz Props
    content = content.replace(
      /interface Props {([^}]+)}/,
      (match, props) => {
        if (!props.includes('lang')) {
          return `interface Props {${props}\n\tlang?: string;\n}`;
        }
        return match;
      }
    );
    updated = true;
  }
  
  // Si usa Astro.props pero no extrae lang
  if (content.includes('Astro.props') && !content.includes('const { lang }')) {
    // Buscar la línea donde se extraen las props
    const propsMatch = content.match(/const\s*{\s*([^}]+)\s*}\s*=\s*Astro\.props/);
    if (propsMatch) {
      const currentProps = propsMatch[1];
      if (!currentProps.includes('lang')) {
        content = content.replace(
          propsMatch[0],
          `const { ${currentProps}, lang } = Astro.props`
        );
        updated = true;
      }
    }
  }
  
  // Pasar lang a subcomponentes
  const componentRegex = /<(\w+)\s+([^>]*?)\/>/g;
  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    const [fullMatch, componentName, props] = match;
    if (props.includes('translations=') && !props.includes('lang=')) {
      const newProps = props + ' lang={lang}';
      content = content.replace(fullMatch, `<${componentName} ${newProps}/>`);
      updated = true;
    }
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

// Actualizar enlaces en componentes
function updateLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;
  
  // Buscar enlaces hardcodeados
  const linkPatterns = [
    { pattern: /href="\/([^"]+)"/g, replacement: 'href={lang === "es" ? "/$1" : `/${lang}/$1`}' },
    { pattern: /href='\/([^']+)'/g, replacement: 'href={lang === "es" ? "/$1" : `/${lang}/$1`}' },
    { pattern: /<a\s+href="\/"/g, replacement: '<a href={lang === "es" ? "/" : `/${lang}/`}' },
    { pattern: /<a\s+href='\/'/g, replacement: '<a href={lang === "es" ? "/" : `/${lang}/`}' }
  ];
  
  linkPatterns.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      updated = true;
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

console.log('Actualizando componentes con soporte completo de idiomas...\n');

let updatedCount = 0;

// Actualizar componentes que necesitan lang
componentsNeedingLang.forEach(comp => {
  const fullPath = path.join(srcPath, comp);
  if (fs.existsSync(fullPath)) {
    if (updateComponentProps(fullPath)) {
      console.log(`✅ Actualizado: ${comp}`);
      updatedCount++;
    } else {
      console.log(`✓ Ya correcto: ${comp}`);
    }
  } else {
    console.log(`❌ No encontrado: ${comp}`);
  }
});

// Actualizar enlaces en todos los componentes
console.log('\nActualizando enlaces para soporte multiidioma...\n');

function findAndUpdateLinks(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
      findAndUpdateLinks(filePath);
    } else if (file.endsWith('.astro')) {
      const relativePath = path.relative(srcPath, filePath);
      if (updateLinks(filePath)) {
        console.log(`✅ Enlaces actualizados: ${relativePath}`);
        updatedCount++;
      }
    }
  });
}

findAndUpdateLinks(path.join(srcPath, 'components'));
findAndUpdateLinks(path.join(srcPath, 'layouts'));

console.log(`\n✅ Total de archivos actualizados: ${updatedCount}`);
console.log('\nTodos los componentes ahora tienen soporte completo para múltiples idiomas!');
