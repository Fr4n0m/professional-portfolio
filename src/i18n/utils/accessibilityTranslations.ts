/**
 * Traducciones para el panel de accesibilidad
 * Estas traducciones se utilizan en el componente AccessibilityPanel
 */

export const accessibilityTranslations = {
  es: {
    profile: {
      role: 'Frontend Developer'
    },
    theme: 'Tema',
    language: 'Idioma',
    accessibility: 'Accesibilidad',
    fontSize: 'Tamaño de texto',
    contrast: 'Contraste',
    animations: 'Animaciones',
    advancedSettings: 'Configuración avanzada',
    selectLanguage: 'Seleccionar idioma'
  },
  en: {
    profile: {
      role: 'Frontend Developer'
    },
    theme: 'Theme',
    language: 'Language',
    accessibility: 'Accessibility',
    fontSize: 'Font size',
    contrast: 'Contrast',
    animations: 'Animations',
    advancedSettings: 'Advanced settings',
    selectLanguage: 'Select language'
  },
  fr: {
    profile: {
      role: 'Développeur Frontend'
    },
    theme: 'Thème',
    language: 'Langue',
    accessibility: 'Accessibilité',
    fontSize: 'Taille de police',
    contrast: 'Contraste',
    animations: 'Animations',
    advancedSettings: 'Paramètres avancés',
    selectLanguage: 'Sélectionner la langue'
  },
  de: {
    profile: {
      role: 'Frontend-Entwickler'
    },
    theme: 'Thema',
    language: 'Sprache',
    accessibility: 'Barrierefreiheit',
    fontSize: 'Schriftgröße',
    contrast: 'Kontrast',
    animations: 'Animationen',
    advancedSettings: 'Erweiterte Einstellungen',
    selectLanguage: 'Sprache auswählen'
  },
  pt: {
    profile: {
      role: 'Desenvolvedor Frontend'
    },
    theme: 'Tema',
    language: 'Idioma',
    accessibility: 'Acessibilidade',
    fontSize: 'Tamanho da fonte',
    contrast: 'Contraste',
    animations: 'Animações',
    advancedSettings: 'Configurações avançadas',
    selectLanguage: 'Selecionar idioma'
  },
  it: {
    profile: {
      role: 'Sviluppatore Frontend'
    },
    theme: 'Tema',
    language: 'Lingua',
    accessibility: 'Accessibilità',
    fontSize: 'Dimensione del testo',
    contrast: 'Contrasto',
    animations: 'Animazioni',
    advancedSettings: 'Impostazioni avanzate',
    selectLanguage: 'Seleziona lingua'
  },
  zh: {
    profile: {
      role: '前端开发者'
    },
    theme: '主题',
    language: '语言',
    accessibility: '无障碍',
    fontSize: '字体大小',
    contrast: '对比度',
    animations: '动画',
    advancedSettings: '高级设置',
    selectLanguage: '选择语言'
  },
  ja: {
    profile: {
      role: 'フロントエンド開発者'
    },
    theme: 'テーマ',
    language: '言語',
    accessibility: 'アクセシビリティ',
    fontSize: 'フォントサイズ',
    contrast: 'コントラスト',
    animations: 'アニメーション',
    advancedSettings: '詳細設定',
    selectLanguage: '言語を選択'
  },
  ko: {
    profile: {
      role: '프론트엔드 개발자'
    },
    theme: '테마',
    language: '언어',
    accessibility: '접근성',
    fontSize: '글꼴 크기',
    contrast: '대비',
    animations: '애니메이션',
    advancedSettings: '고급 설정',
    selectLanguage: '언어 선택'
  },
  ru: {
    profile: {
      role: 'Фронтенд-разработчик'
    },
    theme: 'Тема',
    language: 'Язык',
    accessibility: 'Доступность',
    fontSize: 'Размер шрифта',
    contrast: 'Контраст',
    animations: 'Анимации',
    advancedSettings: 'Расширенные настройки',
    selectLanguage: 'Выбрать язык'
  },
  'es-mx': {
    profile: {
      role: 'Desarrollador Frontend'
    },
    theme: 'Tema',
    language: 'Idioma',
    accessibility: 'Accesibilidad',
    fontSize: 'Tamaño de texto',
    contrast: 'Contraste',
    animations: 'Animaciones',
    advancedSettings: 'Configuración avanzada',
    selectLanguage: 'Seleccionar idioma'
  },
  'en-us': {
    profile: {
      role: 'Frontend Developer'
    },
    theme: 'Theme',
    language: 'Language',
    accessibility: 'Accessibility',
    fontSize: 'Font size',
    contrast: 'Contrast',
    animations: 'Animations',
    advancedSettings: 'Advanced settings',
    selectLanguage: 'Select language'
  }
};

/**
 * Obtiene las traducciones del panel de accesibilidad para un idioma específico
 * @param lang Código de idioma
 * @returns Objeto con las traducciones para el idioma especificado
 */
export function getAccessibilityTranslations(lang: string) {
  return accessibilityTranslations[lang] || accessibilityTranslations.es;
}
