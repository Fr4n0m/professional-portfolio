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

import type { TagInfo } from '../types/projects';

export const TAGS: Record<string, TagInfo> = {
	HTML: {
		name: 'HTML',
		class: 'bg-[#E34F27]/20 border-[#E34F27] text-[#E34F27] dark:bg-[#e34f26]/20 dark:border-[#e34f26] dark:text-[#e34f26]',
		link: 'https://www.w3.org/html/',
		icon: HTMLIcon,
	},
	CSS: {
		name: 'CSS',
		class: 'bg-[#1573B8]/20 border-[#1573B8] text-[#1573B8] dark:bg-[#0099f8]/20 dark:border-[#0099f8] dark:text-[#0099f8]',
		link: 'https://www.w3.org/Style/CSS/',
		icon: CSSIcon,
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		class: 'bg-[#2BA5BB]/20 border-[#2BA5BB] text-[#2BA5BB] dark:bg-[#26c7df]/20 dark:border-[#26c7df] dark:text-[#26c7df]',
		link: 'https://tailwindcss.com/',
		icon: TailwindIcon,
	},
	CPP: {
		name: 'C++',
		class: 'bg-[#0075d2]/20 border-[#0075d2] text-[#0075d2] dark:bg-[#0075d2]/20 dark:border-[#0075d2] dark:text-[#0075d2]',
		link: 'https://isocpp.org/',
		icon: CppIcon,
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		class: 'bg-[#D3C045]/20 border-[#D3C045] text-[#D3C045] dark:bg-[#f0db4f]/20 dark:border-[#f0db4f] dark:text-[#f0db4f]',
		link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
		icon: JSIcon,
	},
	TYPESCRIPT: {
		name: 'TypeScript',
		class: 'bg-[#3178C6]/20 border-[#3178C6] text-[#3178C6] dark:bg-[#3178C6]/20 dark:border-[#3178C6] dark:text-[#3178C6]',
		link: 'https://www.typescriptlang.org/',
		icon: TypeScriptIcon,
	},
	EXPRESS: {
		name: 'ExpressJS',
		class: 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#dbdbdb]/20 dark:border-[#dbdbdb] dark:text-[#dbdbdb]',
		link: 'https://expressjs.com/',
		icon: ExpressIcon,
	},
	NODEJS: {
		name: 'NodeJS',
		class: 'bg-[#3FAE2A]/20 border-[#3FAE2A] text-[#3FAE2A] dark:bg-[#3FAE2A]/20 dark:border-[#3FAE2A] dark:text-[#3FAE2A]',
		link: 'https://nodejs.org/',
		icon: NodeIcon,
	},
	DENO: {
		name: 'Deno',
		class: 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
		link: 'https://deno.com/',
		icon: DenoIcon,
	},
	MONGODB: {
		name: 'MongoDB',
		class: 'bg-[#00D057]/20 border-[#00D057] text-[#00D057] dark:bg-[#01EC64]/20 dark:border-[#01EC64] dark:text-[#01EC64]',
		link: 'https://www.mongodb.com/',
		icon: MongoIcon,
	},
	SUPABASE: {
		name: 'Supabase',
		class: 'bg-[#3ECF8E]/20 border-[#3ECF8E] text-[#3ECF8E] dark:bg-[#3ECF8E]/20 dark:border-[#3ECF8E] dark:text-[#3ECF8E]',
		link: 'https://supabase.com/',
		icon: SupabaseIcon,
	},
	STRIPE: {
		name: 'Stripe',
		class: 'bg-[#635BFF]/20 border-[#635BFF] text-[#635BFF]',
		link: 'https://stripe.com/',
		icon: StripeIcon,
	},
	GRAPHQL: {
		name: 'Graphql',
		class: 'bg-[#e10098]/20 border-[#e10098] text-[#e10098]',
		link: 'https://graphql.org/',
		icon: GraphqlIcon,
	},
	MySQL: {
		name: 'MySQL',
		class: 'bg-[#008fb6]/20 border-[#008fb6] text-[#008fb6]',
		link: 'https://www.mysql.com/',
		icon: MySQLIcon,
	},
	STRAPI: {
		name: 'Strapi',
		class: 'bg-[#6968ff]/20 border-[#6968ff] text-[#6968ff]',
		link: 'https://strapi.io/',
		icon: StrapiIcon,
	},
	REACT: {
		name: 'React',
		class: 'bg-[#00C0E2]/20 border-[#00C0E2] text-[#00C0E2] dark:bg-[#00D8FF]/20 dark:border-[#00D8FF] dark:text-[#00D8FF]',
		link: 'https://es.react.dev/',
		icon: ReactIcon,
	},
	NEXTJS: {
		name: 'NextJS',
		class: 'bg-[#000000]/20 border-[#000000] text-[#000000] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
		link: 'https://nextjs.org/',
		icon: NextJSIcon,
	},
	ASTRO: {
		name: 'Astro',
		class: 'bg-[#FF5D01]/20 border-[#FF5D01] text-[#FF5D01] dark:bg-[#FF5D01]/20 dark:border-[#FF5D01] dark:text-[#FF5D01]',
		link: 'https://astro.build/',
		icon: AstroIcon,
	},
	VITE: {
		name: 'Vite',
		class: 'bg-[#BD34FE]/20 border-[#c436ff] text-[#c436ff]',
		link: 'https://vitejs.dev/',
		icon: ViteIcon,
	},
	PHASER: {
		name: 'Phaser',
		class: 'bg-[#f71ec2]/20 border-[#f71ec2] text-[#f71ec2]',
		link: 'https://phaser.io/',
		icon: PhaserIcon,
	},
	DOCKER: {
		name: 'Docker',
		class: 'bg-[#008fe2]/20 border-[#008fe2] text-[#008fe2]',
		link: 'https://www.docker.com/',
		icon: DockerIcon,
	},
	VERCEL: {
		name: 'Vercel',
		class: 'bg-[#000000]/20 border-[#000000] text-[#000000] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
		link: 'https://vercel.com/',
		icon: VercelIcon,
	},
	GIT: {
		name: 'Git',
		class: 'bg-[#DE4C36]/20 border-[#DE4C36] text-[#DE4C36]',
		link: 'https://git-scm.com/',
		icon: GitIcon,
	},
	GITHUB: {
		name: 'GitHub',
		class: 'bg-[#6b6b6b]/20 border-[#6b6b6b] text-[#6b6b6b] dark:bg-[#fafbfc]/20 dark:border-[#fafbfc] dark:text-[#fafbfc]',
		link: 'https://github.com/',
		icon: GitHubIcon,
	},
	NPM: {
		name: 'Npm',
		class: 'bg-[#cb3837]/20 border-[#cb3837] text-[#cb3837]',
		link: 'https://www.npmjs.com/',
		icon: NpmIcon,
	},
	PNPM: {
		name: 'Pnpm',
		class: 'bg-[#f9ad00]/20 border-[#f9ad00] text-[#f9ad00]',
		link: 'https://pnpm.io/',
		icon: PnpmIcon,
	},
	BUN: {
		name: 'Bun',
		class: 'bg-[#9E8F85]/20 border-[#9E8F85] text-[#9E8F85] dark:bg-[#f6dece]/20 dark:border-[#f6dece] dark:text-[#f6dece]',
		link: 'https://bun.sh/',
		icon: BunIcon,
	},
	WINDOWS: {
		name: 'Windows',
		class: 'bg-[#00adef]/20 border-[#00adef] text-[#00adef]',
		link: 'https://www.microsoft.com/es-es/windows?r=1',
		icon: WindowsIcon,
	},
	MACOS: {
		name: 'MacOS',
		class: 'bg-[#898989]/20 border-[#898989] text-[#898989] dark:bg-[#fff]/20 dark:border-[#fff] dark:text-[#fff]',
		link: 'https://www.apple.com/es/macos/macos-sequoia/',
		icon: MacOSIcon,
	},
	DEBIAN: {
		name: 'Debian',
		class: 'bg-[#d70751]/20 border-[#d70751] text-[#d70751]',
		link: 'https://www.debian.org/index.es.html',
		icon: DebianIcon,
	},
	KALI: {
		name: 'Kali',
		class: 'bg-[#565656]/20 border-[#565656] text-[#565656] dark:bg-[#ffffff]/20 dark:border-[#ffffff] dark:text-[#ffffff]',
		link: 'https://www.kali.org/',
		icon: KaliIcon,
	},
};
