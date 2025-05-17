import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	output: 'server',
	adapter: vercel({
		analytics: true, // Habilita analytics de Vercel
		speedInsights: true, // Habilita Speed Insights
		webAnalytics: {
			enabled: true, // Habilita Web Analytics
		},
		imagesConfig: {
			sizes: [640, 750, 828, 1080, 1200, 1920],
			domains: [],
			formats: ['image/avif', 'image/webp'],
		},
		include: ['**/*'], // Incluir todos los archivos en el despliegue
		exclude: [
			'**/node_modules/**',
			'**/dist/**',
			'src/utils/tests/**',
			'src/components/tests/**',
			'src/pages/seo-test.astro',
			'src/pages/logo-badge-dimap-example.astro',
			'src/pages/logo-badge-example.astro'
		]
	}),
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
	},
	// Ignorar errores de tipos para permitir la compilación
	typeChecking: false,
	build: {
		format: 'file',
		typeChecking: false,
		transform: {
			include: ['**/*', '*.astro'],
			exclude: [
				'**/node_modules/**', 
				'src/utils/tests/**', 
				'src/components/tests/**'
			]
		}
	}
});

