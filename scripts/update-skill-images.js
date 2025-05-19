/**
 * Script para actualizar las imágenes de las skills en el proyecto
 * 
 * Este script garantiza que todas las skills usen las mismas imágenes 
 * en todos los idiomas.
 */

const fs = require('fs');
const path = require('path');

// Ruta al componente SkillTooltip
const skillTooltipPath = path.join(__dirname, '../src/components/ui/tooltips/SkillTooltip.astro');

// Obtener la lista de skills del proyecto
const skillsListPath = path.join(__dirname, '../src/config/skills/index.ts');
const skillsListContent = fs.readFileSync(skillsListPath, 'utf8');

// Extraer la lista de skills
const skillsListMatch = skillsListContent.match(/export const SKILLS_LIST = \[([\s\S]*?)\];/);
const skillsList = skillsListMatch[1]
  .split(',')
  .map(skill => skill.trim().replace(/['"]/g, ''))
  .filter(skill => skill);

console.log(`Lista de ${skillsList.length} skills encontradas.`);

// Leer el archivo SkillTooltip.astro
let skillTooltipContent = fs.readFileSync(skillTooltipPath, 'utf8');

// Mapa para rastrear las imágenes asignadas a cada categoría
const categoryImageMap = {
  'frontend': '/assets/screenshots/frontend-screenshot.svg',
  'backend': '/assets/screenshots/backend-screenshot.svg',
  'database': '/assets/screenshots/database-screenshot.svg',
  'tools': '/assets/screenshots/tools-screenshot.svg',
  'os': '/assets/screenshots/os-screenshot.svg',
  'language': '/assets/screenshots/frontend-screenshot.svg', // Usamos frontend como fallback
  'framework': '/assets/screenshots/frontend-screenshot.svg',
  'library': '/assets/screenshots/frontend-screenshot.svg'
};

// Casos especiales para algunas skills
const specialCaseMap = {
  'HTML': '/assets/screenshots/html-screenshot.svg',
  'CSS': '/assets/screenshots/css-screenshot.svg',
  'JavaScript': '/assets/screenshots/js-screenshot.svg',
  'Docker': '/assets/screenshots/docker-screenshot.svg',
  'Phaser': '/assets/screenshots/phaser-screenshot.svg'
};

// Extraer el bloque de technologyScreenshots
const screenshotsBlockMatch = skillTooltipContent.match(/const technologyScreenshots = \{([\s\S]*?)\};/);
if (!screenshotsBlockMatch) {
  console.error('No se encontró el bloque technologyScreenshots en SkillTooltip.astro');
  process.exit(1);
}

// Construir un nuevo mapa de screenshots uniforme
let newScreenshotsBlock = `const technologyScreenshots = {\n`;

// Obtener la categoría de cada skill del archivo index.ts
function getCategoryByName(name) {
  const frontendSkills = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Astro', 'Vite', 'Motion', 'GSAP'];
  const backendSkills = ['NodeJS', 'Deno', 'ExpressJS', 'Bun'];
  const databaseSkills = ['MongoDB', 'Supabase', 'MySQL', 'Stripe', 'GraphQL', 'Strapi'];
  const toolsSkills = ['Docker', 'Git', 'GitHub', 'NPM', 'PNPM', 'Vercel', 'C++', 'Phaser'];
  const osSkills = ['Windows', 'MacOS', 'Debian', 'Kali'];

  if (frontendSkills.includes(name)) return 'frontend';
  if (backendSkills.includes(name)) return 'backend';
  if (databaseSkills.includes(name)) return 'database';
  if (osSkills.includes(name)) return 'os';
  if (toolsSkills.includes(name)) return 'tools';
  return 'framework';
};

// Agregar categoría de comentarios organizados
newScreenshotsBlock += `  // Frontend\n`;
skillsList.filter(skill => getCategoryByName(skill) === 'frontend').forEach(skill => {
  const imagePath = specialCaseMap[skill] || categoryImageMap['frontend'];
  newScreenshotsBlock += `  '${skill}': '${imagePath}',\n`;
});

newScreenshotsBlock += `  // Backend\n`;
skillsList.filter(skill => getCategoryByName(skill) === 'backend').forEach(skill => {
  const imagePath = specialCaseMap[skill] || categoryImageMap['backend'];
  newScreenshotsBlock += `  '${skill}': '${imagePath}',\n`;
});

newScreenshotsBlock += `  // Database\n`;
skillsList.filter(skill => getCategoryByName(skill) === 'database').forEach(skill => {
  const imagePath = specialCaseMap[skill] || categoryImageMap['database'];
  newScreenshotsBlock += `  '${skill}': '${imagePath}',\n`;
});

newScreenshotsBlock += `  // Tools\n`;
skillsList.filter(skill => getCategoryByName(skill) === 'tools').forEach(skill => {
  const imagePath = specialCaseMap[skill] || categoryImageMap['tools'];
  newScreenshotsBlock += `  '${skill}': '${imagePath}',\n`;
});

newScreenshotsBlock += `  // OS\n`;
skillsList.filter(skill => getCategoryByName(skill) === 'os').forEach(skill => {
  const imagePath = specialCaseMap[skill] || categoryImageMap['os'];
  newScreenshotsBlock += `  '${skill}': '${imagePath}',\n`;
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

console.log('✅ Actualización de imágenes de skills completada correctamente');
console.log(`Se han configurado imágenes para ${skillsList.length} skills`);
