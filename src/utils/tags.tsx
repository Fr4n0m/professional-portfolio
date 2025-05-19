// Icons
import PhaserIcon from '@icons/Phaser';
import HTMLIcon from '@icons/HTML.astro';
import CSSIcon from '@icons/CSS.astro';
import SupabaseIcon from '@icons/SupabaseIcon.astro';
import NextJSIcon from '@icons/NextJS.astro';
import TailwindIcon from '@icons/Tailwind.astro';
import AstroIcon from '@icons/AstroIcon.astro';
import JSIcon from '@icons/JavaScript.astro';
import ReactIcon from '@icons/React.astro';
import MongoIcon from '@icons/Mongo.astro';
import NodeIcon from '@icons/NodeJS.astro';
import ViteIcon from '@icons/Vite';
import ExpressIcon from '@icons/Express.astro';
import DenoIcon from '@icons/Deno.astro';
import DockerIcon from '@icons/Docker.astro';
import GitIcon from '@icons/Git.astro';
import GitHubIcon from '@icons/GitHub.astro';
import GraphqlIcon from '@icons/Graphql.astro';
import MySQLIcon from '@icons/MySQL.astro';
import StripeIcon from '@icons/Stripe.astro';
import TypeScriptIcon from '@icons/TypeScript.astro';
import CppIcon from '@icons/Cpp.astro';
import NpmIcon from '@icons/Npm.astro';
import PnpmIcon from '@icons/Pnpm.astro';
import BunIcon from '@icons/Bun.astro';
import VercelIcon from '@icons/Vercel.astro';
import DebianIcon from '@icons/Debian.astro';
import KaliIcon from '@icons/Kali.astro';
import MacOSIcon from '@icons/MacOS.astro';
import WindowsIcon from '@icons/Windows.astro';
import StrapiIcon from '@icons/Strapi.astro';
import MotionIcon from '@icons/FramerMotion.astro';
import GSAPIcon from '@icons/GSAP.astro';

// Define la interfaz TagInfo aquí para que no dependa de archivos externos
interface TagInfo {
  name: string;
  class: string;
  link: string;
  icon: (_props: Record<string, any>) => any;
}

// Importar la lista de skills
import { SKILLS_LIST } from '@config/skills';

// Mapa de íconos
const ICONS_MAP: Record<string, any> = {
  'HTML': HTMLIcon,
  'CSS': CSSIcon,
  'Tailwind CSS': TailwindIcon,
  'JavaScript': JSIcon,
  'TypeScript': TypeScriptIcon,
  'React': ReactIcon,
  'NextJS': NextJSIcon,
  'Astro': AstroIcon,
  'Vite': ViteIcon,
  'ExpressJS': ExpressIcon,
  'Deno': DenoIcon,
  'MongoDB': MongoIcon,
  'Supabase': SupabaseIcon,
  'MySQL': MySQLIcon,
  'Stripe': StripeIcon,
  'GraphQL': GraphqlIcon,
  'Bun': BunIcon,
  'NPM': NpmIcon,
  'PNPM': PnpmIcon,
  'Vercel': VercelIcon,
  'C++': CppIcon,
  'Phaser': PhaserIcon,
  'Strapi': StrapiIcon,
  'NodeJS': NodeIcon,
  'Docker': DockerIcon,
  'Git': GitIcon,
  'GitHub': GitHubIcon,
  'Debian': DebianIcon,
  'Kali': KaliIcon,
  'Windows': WindowsIcon,
  'MacOS': MacOSIcon,
  'Motion': MotionIcon,
  'GSAP': GSAPIcon
};

// Mapa de clases CSS para las etiquetas
const CLASS_MAP: Record<string, string> = {
  'HTML': 'bg-[#E34F27]/20 border-[#E34F27] text-[#E34F27] dark:bg-[#e34f26]/20 dark:border-[#e34f26] dark:text-[#e34f26]',
  'CSS': 'bg-[#1573B8]/20 border-[#1573B8] text-[#1573B8] dark:bg-[#0099f8]/20 dark:border-[#0099f8] dark:text-[#0099f8]',
  'Tailwind CSS': 'bg-[#2BA5BB]/20 border-[#2BA5BB] text-[#2BA5BB] dark:bg-[#26c7df]/20 dark:border-[#26c7df] dark:text-[#26c7df]',
  'JavaScript': 'bg-[#D3C045]/20 border-[#D3C045] text-[#D3C045] dark:bg-[#f0db4f]/20 dark:border-[#f0db4f] dark:text-[#f0db4f]',
  'TypeScript': 'bg-[#3178C6]/20 border-[#3178C6] text-[#3178C6] dark:bg-[#3178C6]/20 dark:border-[#3178C6] dark:text-[#3178C6]',
  'React': 'bg-[#00C0E2]/20 border-[#00C0E2] text-[#00C0E2] dark:bg-[#00D8FF]/20 dark:border-[#00D8FF] dark:text-[#00D8FF]',
  'NextJS': 'bg-[#000000]/20 border-[#000000] text-[#000000] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
  'Astro': 'bg-[#FF5D01]/20 border-[#FF5D01] text-[#FF5D01] dark:bg-[#FF5D01]/20 dark:border-[#FF5D01] dark:text-[#FF5D01]',
  'Vite': 'bg-[#BD34FE]/20 border-[#c436ff] text-[#c436ff]',
  'ExpressJS': 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#dbdbdb]/20 dark:border-[#dbdbdb] dark:text-[#dbdbdb]',
  'Deno': 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
  'MongoDB': 'bg-[#00D057]/20 border-[#00D057] text-[#00D057] dark:bg-[#01EC64]/20 dark:border-[#01EC64] dark:text-[#01EC64]',
  'Supabase': 'bg-[#3ECF8E]/20 border-[#3ECF8E] text-[#3ECF8E] dark:bg-[#3ECF8E]/20 dark:border-[#3ECF8E] dark:text-[#3ECF8E]',
  'MySQL': 'bg-[#008fb6]/20 border-[#008fb6] text-[#008fb6]',
  'Stripe': 'bg-[#635BFF]/20 border-[#635BFF] text-[#635BFF]',
  'GraphQL': 'bg-[#e10098]/20 border-[#e10098] text-[#e10098]',
  'Bun': 'bg-[#9E8F85]/20 border-[#9E8F85] text-[#9E8F85] dark:bg-[#f6dece]/20 dark:border-[#f6dece] dark:text-[#f6dece]',
  'NPM': 'bg-[#cb3837]/20 border-[#cb3837] text-[#cb3837]',
  'PNPM': 'bg-[#f9ad00]/20 border-[#f9ad00] text-[#f9ad00]',
  'Vercel': 'bg-[#000000]/20 border-[#000000] text-[#000000] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
  'C++': 'bg-[#0075d2]/20 border-[#0075d2] text-[#0075d2] dark:bg-[#0075d2]/20 dark:border-[#0075d2] dark:text-[#0075d2]',
  'Phaser': 'bg-[#f71ec2]/20 border-[#f71ec2] text-[#f71ec2]',
  'Strapi': 'bg-[#6968ff]/20 border-[#6968ff] text-[#6968ff]',
  'NodeJS': 'bg-[#3FAE2A]/20 border-[#3FAE2A] text-[#3FAE2A] dark:bg-[#3FAE2A]/20 dark:border-[#3FAE2A] dark:text-[#3FAE2A]',
  'Docker': 'bg-[#008fe2]/20 border-[#008fe2] text-[#008fe2]',
  'Git': 'bg-[#DE4C36]/20 border-[#DE4C36] text-[#DE4C36]',
  'GitHub': 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#fafbfc]/20 dark:border-[#fafbfc] dark:text-[#fafbfc]',
  'Debian': 'bg-[#d70751]/20 border-[#d70751] text-[#d70751]',
  'Kali': 'bg-[#565656]/20 border-[#565656] text-[#565656] dark:bg-[#ffffff]/20 dark:border-[#ffffff] dark:text-[#ffffff]',
  'Windows': 'bg-[#00adef]/20 border-[#00adef] text-[#00adef]',
  'MacOS': 'bg-[#898989]/20 border-[#898989] text-[#898989] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
  'Motion': 'bg-[#ff4d4d]/20 border-[#ff4d4d] text-[#ff4d4d] dark:bg-[#ff4d4d]/20 dark:border-[#ff4d4d] dark:text-[#ff4d4d]',
  'GSAP': 'bg-[#88CE02]/20 border-[#88CE02] text-[#88CE02] dark:bg-[#88CE02]/20 dark:border-[#88CE02] dark:text-[#88CE02]'
};

// Enlaces a la documentación
const LINKS_MAP: Record<string, string> = {
  'HTML': 'https://www.w3.org/html/',
  'CSS': 'https://www.w3.org/Style/CSS/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'JavaScript': 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org/',
  'React': 'https://es.react.dev/',
  'NextJS': 'https://nextjs.org/',
  'Astro': 'https://astro.build/',
  'Vite': 'https://vitejs.dev/',
  'ExpressJS': 'https://expressjs.com/',
  'Deno': 'https://deno.com/',
  'MongoDB': 'https://www.mongodb.com/',
  'Supabase': 'https://supabase.com/',
  'MySQL': 'https://www.mysql.com/',
  'Stripe': 'https://stripe.com/',
  'GraphQL': 'https://graphql.org/',
  'Bun': 'https://bun.sh/',
  'NPM': 'https://www.npmjs.com/',
  'PNPM': 'https://pnpm.io/',
  'Vercel': 'https://vercel.com/',
  'C++': 'https://isocpp.org/',
  'Phaser': 'https://phaser.io/',
  'Strapi': 'https://strapi.io/',
  'NodeJS': 'https://nodejs.org/',
  'Docker': 'https://www.docker.com/',
  'Git': 'https://git-scm.com/',
  'GitHub': 'https://github.com/',
  'Debian': 'https://www.debian.org/index.es.html',
  'Kali': 'https://www.kali.org/',
  'Windows': 'https://www.microsoft.com/es-es/windows?r=1',
  'MacOS': 'https://www.apple.com/es/macos/macos-sequoia/',
  'Motion': 'https://www.framer.com/motion/',
  'GSAP': 'https://greensock.com/gsap/'
};

// Construir el objeto TAGS dinámicamente
export const TAGS: Record<string, TagInfo> = {};

// Poblar el objeto TAGS con todas las habilidades
SKILLS_LIST.forEach(skill => {
  TAGS[skill] = {
    name: skill,
    class: CLASS_MAP[skill] || 'bg-gray-200/20 border-gray-400 text-gray-600 dark:bg-gray-700/20 dark:border-gray-500 dark:text-gray-400',
    link: LINKS_MAP[skill] || '#',
    icon: ICONS_MAP[skill] || (() => (
      <span className="text-xs font-bold">{skill.charAt(0)}</span>
    ))
  };
});
