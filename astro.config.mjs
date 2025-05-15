import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	output: 'server',
	adapter: vercel(),
	i18n: {
		defaultLocale: 'es',
		locales: [
			'es',    // Español (default)
			'en',    // Inglés
			'zh',    // Chino Mandarín
			'hi',    // Hindi
			'ar',    // Árabe
			'pt',    // Portugués
			'fr',    // Francés
			'de',    // Alemán
			'ja',    // Japonés
			'ru',    // Ruso
			'it',    // Italiano
			'ko',    // Coreano
			'nl',    // Holandés
			'pl',    // Polaco
			'tr',    // Turco
			'hv',    // Alto Valyrio
		],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
		},
		fallback: {
			hi: 'en',
			ar: 'en',
			zh: 'en',
			ja: 'en',
			ko: 'en',
			hv: 'en',
			// Fallback para idiomas sin traducción completa
		}
	}
});
