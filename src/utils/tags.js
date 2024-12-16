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

export const TAGS = {
	HTML: {
		name: 'HTML',
		class: 'bg-[#e34f26]/20 border-[#e34f26] text-[#e34f26]',
		link: 'https://www.w3.org/html/',
		icon: HTMLIcon,
	},
	CSS: {
		name: 'CSS',
		class: 'bg-[#0099f8]/20 border-[#0099f8] text-[#0099f8]',
		link: 'https://www.w3.org/Style/CSS/',
		icon: CSSIcon,
	},
	TAILWIND: {
		name: 'Tailwind CSS',
		class: 'bg-[#26c7df]/20 border-[#26c7df] text-[#26c7df]',
		link: 'https://tailwindcss.com/',
		icon: TailwindIcon,
	},
	CPP: {
		name: 'C++',
		class: 'bg-[#0075d2]/20 border-[#0075d2] text-[#0075d2]',
		link: 'https://isocpp.org/',
		icon: CppIcon,
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		class: 'bg-[#f0db4f]/20 border-[#f0db4f] text-[#f0db4f]',
		link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
		icon: JSIcon,
	},
	TYPESCRIPT: {
		name: 'TypeScript',
		class: 'bg-[#3178C6]/20 border-[#3178C6] text-[#3178C6]',
		link: 'https://www.typescriptlang.org/',
		icon: TypeScriptIcon,
	},
	EXPRESS: {
		name: 'ExpressJS',
		class: 'bg-[#dbdbdb]/20 border-[#dbdbdb] text-[#dbdbdb]',
		link: 'https://expressjs.com/',
		icon: ExpressIcon,
	},
	NODEJS: {
		name: 'NodeJS',
		class: 'bg-[#3FAE2A]/20 border-[#3FAE2A] text-[#3FAE2A]',
		link: 'https://nodejs.org/',
		icon: NodeIcon,
	},
	DENO: {
		name: 'Deno',
		class: 'bg-[#fff]/20 border-[#fff] text-[#fff]',
		link: 'https://deno.com/',
		icon: DenoIcon,
	},
	MONGODB: {
		name: 'MongoDB',
		class: 'bg-[#01EC64]/20 border-[#01EC64] text-[#01EC64]',
		link: 'https://www.mongodb.com/',
		icon: MongoIcon,
	},
	SUPABASE: {
		name: 'Supabase',
		class: 'bg-[#249361]/20 border-[#3ECF8E] text-[#3ECF8E]',
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
		class: 'bg-[#00D8FF]/20 border-[#00D8FF] text-[#00D8FF]',
		link: 'https://es.react.dev/',
		icon: ReactIcon,
	},
	NEXTJS: {
		name: 'NextJS',
		class: 'bg-[#fff]/20 border-[#fff] text-[#fff]',
		link: 'https://nextjs.org/',
		icon: NextJSIcon,
	},
	ASTRO: {
		name: 'Astro',
		class: 'bg-[#FF5D01]/20 border-[#FF5D01] text-[#FF5D01]',
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
		class: 'bg-[#fff]/20 border-[#fff] text-[#fff]',
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
		class: 'bg-[#fafbfc]/20 border-[#fafbfc] text-[#fafbfc]',
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
		class: 'bg-[#f6dece]/20 border-[#f6dece] text-[#f6dece]',
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
		class: 'bg-[#fff]/20 border-[#fff] text-[#fff]',
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
		class: 'bg-[#fff]/20 border-[#fff] text-[#fff]',
		link: 'https://www.kali.org/',
		icon: KaliIcon,
	},
};
