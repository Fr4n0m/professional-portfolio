/**
 * Traducciones para los temas y elementos relacionados con el tema
 * Estas traducciones se utilizan en los componentes de toggle de tema y panel de accesibilidad
 */

// Tipo para los temas disponibles
export interface Theme {
  id: string;
  name: string;
  icon: any; // Tipo para el componente de ícono Astro
}

// Tipos de texto del tema
export interface ThemeTexts {
  light: string;
  dark: string;
  system: string;
  ariaLabel: string;
  chooseTheme: string;
}

export const themeTranslations: Record<string, ThemeTexts> = {
  es: {
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
    ariaLabel: 'Cambiar tema',
    chooseTheme: 'Elige el tema'
  },
  en: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    ariaLabel: 'Change theme',
    chooseTheme: 'Choose theme'
  },
  fr: {
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
    ariaLabel: 'Changer de thème',
    chooseTheme: 'Choisir le thème'
  },
  de: {
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
    ariaLabel: 'Thema ändern',
    chooseTheme: 'Thema wählen'
  },
  it: {
    light: 'Chiaro',
    dark: 'Scuro',
    system: 'Sistema',
    ariaLabel: 'Cambia tema',
    chooseTheme: 'Scegli tema'
  },
  pt: {
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
    ariaLabel: 'Mudar tema',
    chooseTheme: 'Escolha o tema'
  },
  nl: {
    light: 'Licht',
    dark: 'Donker',
    system: 'Systeem',
    ariaLabel: 'Thema wijzigen',
    chooseTheme: 'Kies thema'
  },
  pl: {
    light: 'Jasny',
    dark: 'Ciemny',
    system: 'System',
    ariaLabel: 'Zmień motyw',
    chooseTheme: 'Wybierz motyw'
  },
  ru: {
    light: 'Светлая',
    dark: 'Темная',
    system: 'Система',
    ariaLabel: 'Изменить тему',
    chooseTheme: 'Выберите тему'
  },
  ja: {
    light: 'ライト',
    dark: 'ダーク',
    system: 'システム',
    ariaLabel: 'テーマを変更',
    chooseTheme: 'テーマを選択'
  },
  ko: {
    light: '밝게',
    dark: '어둡게',
    system: '시스템',
    ariaLabel: '테마 변경',
    chooseTheme: '테마 선택'
  },
  zh: {
    light: '浅色',
    dark: '深色',
    system: '系统',
    ariaLabel: '更改主题',
    chooseTheme: '选择主题'
  },
  ar: {
    light: 'فاتح',
    dark: 'داكن',
    system: 'النظام',
    ariaLabel: 'تغيير المظهر',
    chooseTheme: 'اختر المظهر'
  },
  hi: {
    light: 'हल्का',
    dark: 'गहरा',
    system: 'सिस्टम',
    ariaLabel: 'थीम बदलें',
    chooseTheme: 'थीम चुनें'
  },
  tr: {
    light: 'Açık',
    dark: 'Koyu',
    system: 'Sistem',
    ariaLabel: 'Temayı değiştir',
    chooseTheme: 'Tema seç'
  },
  hv: {
    light: 'Uh',
    dark: 'Hh',
    system: 'Huh',
    ariaLabel: 'Theme zālatta',
    chooseTheme: 'Theme sīmion'
  },
  'en-us': {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    ariaLabel: 'Change theme',
    chooseTheme: 'Choose theme'
  },
  'es-mx': {
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
    ariaLabel: 'Cambiar tema',
    chooseTheme: 'Elige el tema'
  }
};

/**
 * Obtiene las traducciones de temas para un idioma específico
 * @param lang Código de idioma
 * @returns Objeto con las traducciones para el idioma especificado
 */
export function getThemeTranslations(lang: string): ThemeTexts {
  return themeTranslations[lang] || themeTranslations.es;
}
