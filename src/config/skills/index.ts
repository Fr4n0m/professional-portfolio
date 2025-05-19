// Lista de todas las tecnologías disponibles
export const SKILLS_LIST = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'Astro',
  'Vite',
  'ExpressJS',
  'Deno',
  'MongoDB',
  'Supabase',
  'MySQL',
  'Stripe',
  'GraphQL',
  'Bun',
  'NPM',
  'PNPM',
  'Vercel',
  'C++',
  'Phaser',
  'Strapi',
  'NodeJS',
  'Docker',
  'Git',
  'GitHub',
  'Debian',
  'Kali',
  'Windows',
  'MacOS',
  'Motion',
  'GSAP'
];

// Importa cada archivo individual para fácil acceso
import html from './html.json';
import css from './css.json';
import tailwind from './tailwind.json';
import javascript from './javascript.json';
import typescript from './typescript.json';
import react from './react.json';
import nextjs from './nextjs.json';
import astro from './astro.json';
import vite from './vite.json';
import expressjs from './expressjs.json';
import deno from './deno.json';
import mongodb from './mongodb.json';
import supabase from './supabase.json';
import mysql from './mysql.json';
import stripe from './stripe.json';
import graphql from './graphql.json';
import bun from './bun.json';
import npm from './npm.json';
import pnpm from './pnpm.json';
import vercel from './vercel.json';
import cpp from './cpp.json';
import phaser from './phaser.json';
import strapi from './strapi.json';
import nodejs from './nodejs.json';
import docker from './docker.json';
import git from './git.json';
import github from './github.json';
import debian from './debian.json';
import kali from './kali.json';
import windows from './windows.json';
import macos from './macos.json';
import motion from './motion.json';
import gsap from './gsap.json';

// Objeto con todos los skills
export const SKILLS_DESCRIPTIONS = {
  'HTML': html,
  'CSS': css,
  'Tailwind CSS': tailwind,
  'JavaScript': javascript,
  'TypeScript': typescript,
  'React': react,
  'NextJS': nextjs,
  'Astro': astro,
  'Vite': vite,
  'ExpressJS': expressjs,
  'Deno': deno,
  'MongoDB': mongodb,
  'Supabase': supabase,
  'MySQL': mysql,
  'Stripe': stripe,
  'GraphQL': graphql,
  'Bun': bun,
  'NPM': npm,
  'PNPM': pnpm,
  'Vercel': vercel,
  'C++': cpp,
  'Phaser': phaser,
  'Strapi': strapi,
  'NodeJS': nodejs,
  'Docker': docker,
  'Git': git,
  'GitHub': github,
  'Debian': debian,
  'Kali': kali,
  'Windows': windows,
  'MacOS': macos,
  'Motion': motion,
  'GSAP': gsap
};

// Función para obtener la categoría según el nombre
export const getCategoryByName = (name: string): string => {
  const frontendSkills = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Astro', 'Vite'];
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

// Función para obtener la experiencia recomendada basada en la skill
export const getRecommendedExperience = (name: string): number => {
  // Todas las tecnologías tienen el nivel máximo de experiencia
  return 5; // Nivel máximo para todas las tecnologías
};
