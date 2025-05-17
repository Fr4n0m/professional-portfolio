// i18n/utils.ts
import { languages, type Language } from './config';

// Get the language from the URL
export function getLangFromUrl(url: URL): Language {
  const pathSegments = url.pathname.split('/').filter(Boolean);
  if (pathSegments.length === 0) return 'es'; // Default to Spanish for root
  
  const possibleLang = pathSegments[0];
  return languages[possibleLang as Language] ? (possibleLang as Language) : 'es';
}

// Get the translation function for the current language
export function useTranslations(lang: Language) {
  return function translate(key: string, params?: Record<string, string>): string {
    // This is a simple implementation - you would typically load translations from a JSON file
    // For now, we'll return the key as a fallback
    return key;
  };
}

// Get a path for the current language
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string): string {
    return lang === 'es' ? path : `/${lang}${path}`;
  };
}
