import type { Language } from '@i18n/config';
import type { Translations } from '../types/translations';

// Importar todas las traducciones de forma estática
import esTranslations from '../translations/es/index';
import enTranslations from '../translations/en/index';
import enUsTranslations from '../translations/en-us/index';
import esMxTranslations from '../translations/es-mx/index';
import zhTranslations from '../translations/zh/index';
import ptTranslations from '../translations/pt/index';
import frTranslations from '../translations/fr/index';
import deTranslations from '../translations/de/index';
import jaTranslations from '../translations/ja/index';
import ruTranslations from '../translations/ru/index';
import arTranslations from '../translations/ar/index';
import hiTranslations from '../translations/hi/index';
import itTranslations from '../translations/it/index';
import koTranslations from '../translations/ko/index';
import nlTranslations from '../translations/nl/index';
import plTranslations from '../translations/pl/index';
import trTranslations from '../translations/tr/index';
import hvTranslations from '../translations/hv/index';

// Objeto con todas las traducciones
export const textsJson: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
  'en-us': enUsTranslations,
  'es-mx': esMxTranslations,
  zh: zhTranslations,
  pt: ptTranslations,
  fr: frTranslations,
  de: deTranslations,
  ja: jaTranslations,
  ru: ruTranslations,
  ar: arTranslations,
  hi: hiTranslations,
  it: itTranslations,
  ko: koTranslations,
  nl: nlTranslations,
  pl: plTranslations,
  tr: trTranslations,
  hv: hvTranslations,
};
