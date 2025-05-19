/**
 * Script para actualizar los iconos de las skills en el proyecto
 * 
 * Este script garantiza que todas las referencias a iconos de skills
 * sean consistentes en todos los idiomas y componentes.
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

console.log('Lista de skills encontradas:', skillsList);

// Leer el archivo SkillTooltip.astro
let skillTooltipContent = fs.readFileSync(skillTooltipPath, 'utf8');

// Extraer el bloque de mapa de iconos
const iconsBlockMatch = skillTooltipContent.match(/const technologyIcons = \{([\s\S]*?)\};/);
if (!iconsBlockMatch) {
  console.error('No se encontró el bloque technologyIcons en SkillTooltip.astro');
  process.exit(1);
}

// Construir mapa de iconos basado en el bloque existente
const iconLines = iconsBlockMatch[1].split('\n');
const iconMap = {};

iconLines.forEach(line => {
  const match = line.match(/'([^']+)':\s*([^,]+),?/);
  if (match) {
    const skill = match[1];
    const icon = match[2].trim();
    iconMap[skill] = icon;
  }
});

// Construir un nuevo mapa de iconos
let newIconsBlock = `const technologyIcons = {\n`;

// Añadir cada skill con su icono correspondiente
skillsList.forEach(skill => {
  // Encontrar el icono adecuado para esta skill
  let icon = null;
  
  // Primero buscar coincidencias exactas
  if (iconMap[skill]) {
    icon = iconMap[skill];
  } 
  // Manejar variaciones de mayúsculas/minúsculas
  else if (iconMap[skill.toUpperCase()]) {
    icon = iconMap[skill.toUpperCase()];
  } 
  else if (iconMap[skill.toLowerCase()]) {
    icon = iconMap[skill.toLowerCase()];
  }
  // Caso especial para NPM y PNPM
  else if (skill === 'NPM' && iconMap['Npm']) {
    icon = iconMap['Npm'];
  }
  else if (skill === 'PNPM' && iconMap['Pnpm']) {
    icon = iconMap['Pnpm'];
  }
  // Caso especial para GraphQL
  else if (skill === 'GraphQL' && iconMap['Graphql']) {
    icon = iconMap['Graphql'];
  }
  
  // Si se encontró un icono, agregarlo al nuevo bloque
  if (icon) {
    newIconsBlock += `  '${skill}': ${icon},\n`;
  } else {
    console.warn(`⚠️ No se encontró icono para la skill: ${skill}`);
  }
});

// Cerrar el objeto
newIconsBlock += `};`;

// Reemplazar el bloque antiguo con el nuevo
skillTooltipContent = skillTooltipContent.replace(
  /const technologyIcons = \{[\s\S]*?\};/,
  newIconsBlock
);

// Escribir el contenido actualizado
fs.writeFileSync(skillTooltipPath, skillTooltipContent, 'utf8');

console.log('✅ Actualización de iconos de skills completada correctamente');
