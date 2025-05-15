import type { Language } from '@i18n/config';
import type { Translations } from '../types/translations';

// Importar traducciones mínimas como fallback
import minimalTranslations from '../translations/minimal/index';

// Intentar importar todas las traducciones
let importedTranslations: Partial<Record<Language, Translations>> = {};

// Imports seguros con try-catch
try {
  importedTranslations.es = (await import('../translations/es/index')).default;
} catch (e) {
  console.warn('Failed to import es translations');
  importedTranslations.es = minimalTranslations;
}

try {
  importedTranslations.en = (await import('../translations/en/index')).default;
} catch (e) {
  importedTranslations.en = minimalTranslations;
}

try {
  importedTranslations['en-us'] = (await import('../translations/en-us/index')).default;
} catch (e) {
  importedTranslations['en-us'] = minimalTranslations;
}

try {
  importedTranslations['es-mx'] = (await import('../translations/es-mx/index')).default;
} catch (e) {
  importedTranslations['es-mx'] = minimalTranslations;
}

try {
  importedTranslations.zh = (await import('../translations/zh/index')).default;
} catch (e) {
  importedTranslations.zh = minimalTranslations;
}

try {
  importedTranslations.pt = (await import('../translations/pt/index')).default;
} catch (e) {
  importedTranslations.pt = minimalTranslations;
}

try {
  importedTranslations.fr = (await import('../translations/fr/index')).default;
} catch (e) {
  importedTranslations.fr = minimalTranslations;
}

try {
  importedTranslations.de = (await import('../translations/de/index')).default;
} catch (e) {
  importedTranslations.de = minimalTranslations;
}

try {
  importedTranslations.ja = (await import('../translations/ja/index')).default;
} catch (e) {
  importedTranslations.ja = minimalTranslations;
}

try {
  importedTranslations.ru = (await import('../translations/ru/index')).default;
} catch (e) {
  importedTranslations.ru = minimalTranslations;
}

try {
  importedTranslations.ar = (await import('../translations/ar/index')).default;
} catch (e) {
  importedTranslations.ar = minimalTranslations;
}

try {
  importedTranslations.hi = (await import('../translations/hi/index')).default;
} catch (e) {
  importedTranslations.hi = minimalTranslations;
}

try {
  importedTranslations.it = (await import('../translations/it/index')).default;
} catch (e) {
  importedTranslations.it = minimalTranslations;
}

try {
  importedTranslations.ko = (await import('../translations/ko/index')).default;
} catch (e) {
  importedTranslations.ko = minimalTranslations;
}

try {
  importedTranslations.nl = (await import('../translations/nl/index')).default;
} catch (e) {
  importedTranslations.nl = minimalTranslations;
}

try {
  importedTranslations.pl = (await import('../translations/pl/index')).default;
} catch (e) {
  importedTranslations.pl = minimalTranslations;
}

try {
  importedTranslations.tr = (await import('../translations/tr/index')).default;
} catch (e) {
  importedTranslations.tr = minimalTranslations;
}

try {
  importedTranslations.hv = (await import('../translations/hv/index')).default;
} catch (e) {
  importedTranslations.hv = minimalTranslations;
}

// Objeto con todas las traducciones (con fallback garantizado)
export const textsJson: Record<Language, Translations> = {
  es: importedTranslations.es || minimalTranslations,
  en: importedTranslations.en || minimalTranslations,
  'en-us': importedTranslations['en-us'] || minimalTranslations,
  'es-mx': importedTranslations['es-mx'] || minimalTranslations,
  zh: importedTranslations.zh || minimalTranslations,
  pt: importedTranslations.pt || minimalTranslations,
  fr: importedTranslations.fr || minimalTranslations,
  de: importedTranslations.de || minimalTranslations,
  ja: importedTranslations.ja || minimalTranslations,
  ru: importedTranslations.ru || minimalTranslations,
  ar: importedTranslations.ar || minimalTranslations,
  hi: importedTranslations.hi || minimalTranslations,
  it: importedTranslations.it || minimalTranslations,
  ko: importedTranslations.ko || minimalTranslations,
  nl: importedTranslations.nl || minimalTranslations,
  pl: importedTranslations.pl || minimalTranslations,
  tr: importedTranslations.tr || minimalTranslations,
  hv: importedTranslations.hv || minimalTranslations,
};
