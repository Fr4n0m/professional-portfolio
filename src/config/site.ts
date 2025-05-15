export const siteConfig = {
	personalInfo: {
		email: 'fran11799@outlook.com',
		linkedin: 'https://www.linkedin.com/in/francisco-jos%C3%A9-r-5b2181bb/',
		github: 'https://github.com/Fr4n0m',
	},
	defaultTheme: 'system',
	supportedLanguages: ['es', 'en'] as const,
	defaultLanguage: 'es',
	animation: {
		typingDuration: '3.5s',
		navShadowRange: '0 1000px',
	},
} as const;

export type SupportedLanguage = (typeof siteConfig.supportedLanguages)[number];
