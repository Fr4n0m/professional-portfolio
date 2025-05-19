import { SKILLS_DESCRIPTIONS, getCategoryByName, getRecommendedExperience } from './skills';

// Función auxiliar para obtener la descripción en el idioma actual
export function getSkillDescription(name: string, lang: string = 'en'): string {
  const skill = SKILLS_DESCRIPTIONS[name];
  if (!skill || !skill.translations) {
    return `${name} - Modern web technology.`;
  }
  
  return skill.translations[lang] || skill.translations['en'] || `${name} - Modern web technology.`;
}

// Exportamos las funciones de búsqueda por categoría y experiencia
export { getCategoryByName, getRecommendedExperience };
