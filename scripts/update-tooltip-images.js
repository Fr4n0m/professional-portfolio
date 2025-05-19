/**
 * Script para actualizar las imágenes de los tooltips de las skills
 * Este script utiliza las URLs definidas en technology-image-urls.js
 */

const fs = require('fs');
const path = require('path');
const { technologyImageUrls } = require('./technology-image-urls');

// Ruta al componente SkillTooltip
const skillTooltipPath = path.join(__dirname, '../src/components/ui/tooltips/SkillTooltip.astro');

// Leer el contenido del archivo
console.log(`🔍 Leyendo el archivo ${skillTooltipPath}...`);
let skillTooltipContent = fs.readFileSync(skillTooltipPath, 'utf8');

// Extraer el bloque de technologyScreenshots
const screenshotsBlockMatch = skillTooltipContent.match(/const technologyScreenshots = \{([\s\S]*?)\};/);
if (!screenshotsBlockMatch) {
  console.error('❌ No se encontró el bloque technologyScreenshots en SkillTooltip.astro');
  process.exit(1);
}

// Construir un nuevo mapa de screenshots
let newScreenshotsBlock = `const technologyScreenshots = {\n`;

// Categorías para organizar las tecnologías
const categories = {
  frontend: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Astro', 'Vite', 'Motion', 'GSAP'],
  backend: ['NodeJS', 'Deno', 'ExpressJS', 'Bun'],
  database: ['MongoDB', 'Supabase', 'MySQL', 'Stripe', 'GraphQL', 'Strapi'],
  tools: ['Docker', 'Git', 'GitHub', 'NPM', 'PNPM', 'Vercel', 'C++', 'Phaser'],
  os: ['Windows', 'MacOS', 'Debian', 'Kali']
};

// Agregar tecnologías por categoría
newScreenshotsBlock += `  // Frontend\n`;
categories.frontend.forEach(tech => {
  const imageUrl = technologyImageUrls[tech] || `/assets/screenshots/${tech.toLowerCase().replace(/\s+/g, '-')}-screenshot.svg`;
  newScreenshotsBlock += `  '${tech}': '${imageUrl}',\n`;
});

newScreenshotsBlock += `  // Backend\n`;
categories.backend.forEach(tech => {
  const imageUrl = technologyImageUrls[tech] || `/assets/screenshots/${tech.toLowerCase().replace(/\s+/g, '-')}-screenshot.svg`;
  newScreenshotsBlock += `  '${tech}': '${imageUrl}',\n`;
});

newScreenshotsBlock += `  // Database\n`;
categories.database.forEach(tech => {
  const imageUrl = technologyImageUrls[tech] || `/assets/screenshots/${tech.toLowerCase().replace(/\s+/g, '-')}-screenshot.svg`;
  newScreenshotsBlock += `  '${tech}': '${imageUrl}',\n`;
});

newScreenshotsBlock += `  // Tools\n`;
categories.tools.forEach(tech => {
  const imageUrl = technologyImageUrls[tech] || `/assets/screenshots/${tech.toLowerCase().replace(/\s+/g, '-')}-screenshot.svg`;
  newScreenshotsBlock += `  '${tech}': '${imageUrl}',\n`;
});

newScreenshotsBlock += `  // OS\n`;
categories.os.forEach(tech => {
  const imageUrl = technologyImageUrls[tech] || `/assets/screenshots/${tech.toLowerCase().replace(/\s+/g, '-')}-screenshot.svg`;
  newScreenshotsBlock += `  '${tech}': '${imageUrl}',\n`;
});

// Cerrar el objeto
newScreenshotsBlock += `};`;

// Reemplazar el bloque antiguo con el nuevo
skillTooltipContent = skillTooltipContent.replace(
  /const technologyScreenshots = \{[\s\S]*?\};/,
  newScreenshotsBlock
);

// Escribir el contenido actualizado
fs.writeFileSync(skillTooltipPath, skillTooltipContent, 'utf8');

console.log('✅ Actualización de URLs de imágenes reales completada correctamente');
console.log(`📷 Las imágenes de los tooltips han sido actualizadas con URLs reales de internet`);
