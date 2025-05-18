// Archivo índice que reúne todas las descripciones de habilidades
// Se importan los fragmentos y se combinan en un solo objeto

import { skillDescriptions as existingSkillDescriptions } from '../skillDescriptions';
import { skillCategories, getCategoryByName, getRecommendedExperience } from '../skillDescriptions';
import backendDatabaseSkillDescriptions from './backend_database';
import frontendToolsSkillDescriptions from './frontend_tools';
import animationSkillDescriptions from './animation';

// Creamos un tipo para las descripciones de habilidades
type SkillDescription = {
  [lang: string]: string;
};

type SkillDescriptions = {
  [skill: string]: SkillDescription;
};

// Combinamos todas las descripciones en un solo objeto
const completeSkillDescriptions: SkillDescriptions = {
  ...existingSkillDescriptions,
  ...backendDatabaseSkillDescriptions,
  ...frontendToolsSkillDescriptions,
  ...animationSkillDescriptions
};

// Actualizamos las categorías de habilidades para incluir las nuevas
const updatedSkillCategories = {
  frontend: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Astro', 'Vite'],
  backend: ['NodeJS', 'Deno', 'ExpressJS', 'Bun'],
  database: ['MongoDB', 'Supabase', 'MySQL', 'GraphQL', 'Strapi'],
  tools: ['Docker', 'Git', 'GitHub', 'NPM', 'PNPM', 'Vercel', 'C++', 'Phaser'],
  animation: ['GSAP', 'Framer Motion', 'Motion Design', 'Animation', 'Web Animation'],
  os: ['Windows', 'MacOS', 'Debian', 'Kali']
};

// Función para obtener la categoría según el nombre actualizada
const getUpdatedCategoryByName = (name: string): string => {
  if (updatedSkillCategories.frontend.includes(name)) return 'frontend';
  if (updatedSkillCategories.backend.includes(name)) return 'backend';
  if (updatedSkillCategories.database.includes(name)) return 'database';
  if (updatedSkillCategories.os.includes(name)) return 'os';
  if (updatedSkillCategories.tools.includes(name)) return 'tools';
  if (updatedSkillCategories.animation.includes(name)) return 'animation';
  return 'framework';
};

// Función actualizada para obtener la experiencia recomendada basada en la skill
const getUpdatedRecommendedExperience = (name: string): number => {
  // Personaliza estos valores según tus niveles de experiencia reales
  const highExperience = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Tailwind CSS', 'Git', 'GitHub', 'Astro', 'NodeJS', 'GSAP'];
  const mediumHighExperience = ['Vite', 'MongoDB', 'Supabase', 'MacOS', 'Windows', 'Vercel', 'NPM', 'PNPM', 'Animation', 'Web Animation'];
  const mediumExperience = ['Docker', 'ExpressJS', 'MySQL', 'Debian', 'Bun', 'GraphQL', 'Framer Motion', 'Motion Design'];
  const lowMediumExperience = ['Phaser', 'Strapi', 'Kali'];
  const lowExperience = ['Deno', 'C++'];

  if (highExperience.includes(name)) return 5;
  if (mediumHighExperience.includes(name)) return 4;
  if (mediumExperience.includes(name)) return 3;
  if (lowMediumExperience.includes(name)) return 2;
  if (lowExperience.includes(name)) return 1;
  
  return 3; // Valor por defecto
};

export {
  completeSkillDescriptions,
  updatedSkillCategories,
  getUpdatedCategoryByName,
  getUpdatedRecommendedExperience
};