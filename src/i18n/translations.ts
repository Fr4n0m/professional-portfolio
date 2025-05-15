import type { Language } from './config';
import { getCurrentLanguage } from './config';

// Cache para traducciones cargadas
const translationsCache: Partial<Record<Language, any>> = {};

// Función para cargar traducciones de forma asíncrona
export async function loadTranslations(lang: Language) {
  // Si ya está en cache, devolverlo
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }

  try {
    // Primero intentar cargar la estructura modular (carpeta con index.ts)
    const modularTranslations = await import(`../translations/${lang}/index.ts`);
    translationsCache[lang] = modularTranslations.default || modularTranslations;
    return translationsCache[lang];
  } catch (modularError) {
    try {
      // Si falla, intentar cargar el archivo JSON único
      const translations = await import(`../translations/${lang}.json`);
      translationsCache[lang] = translations.default || translations;
      return translationsCache[lang];
    } catch (jsonError) {
      console.warn(`Translations for ${lang} not found, falling back to English`);
      
      // Si no existe el archivo, usar inglés como fallback
      if (lang !== 'en') {
        return loadTranslations('en');
      }
      
      // Si incluso el inglés falla, devolver objeto vacío
      console.error('English translations not found!');
      return {};
    }
  }
}

// Función helper para uso en componentes Astro
export async function getTranslations(url: URL) {
  const lang = getCurrentLanguage(url);
  return loadTranslations(lang);
}
