// experienceUtils.ts - Utilidades para manejar la experiencia profesional
import textsJsonES from '../translations/es/experience.json';
import textsJsonEN from '../translations/en/experience.json';

/**
 * Obtiene la información de la empresa activa (marcada con isActive: true)
 * Prioriza el idioma español pero puede funcionar con cualquier idioma
 * @returns Objeto con la información de la empresa activa
 */
export function getActiveSiteData() {
  // Primero intentamos encontrar la experiencia activa en los datos en español
  const activeExperience = textsJsonES.experience.find(exp => exp.isActive === true);
  
  // Si no encontramos ninguna experiencia activa, usamos la primera de la lista
  if (!activeExperience) {
    return {
      companyName: textsJsonES.experience[0].companyName || 'Company',
      companyLogo: textsJsonES.experience[0].companyLogo || '',
      companyUrl: textsJsonES.experience[0].companyUrl || '#',
      location: textsJsonES.experience[0].location || ''
    };
  }
  
  // Devolvemos los datos de la experiencia activa
  return {
    companyName: activeExperience.companyName || 'Company',
    companyLogo: activeExperience.companyLogo || '',
    companyUrl: activeExperience.companyUrl || '#',
    location: activeExperience.location || ''
  };
}

/**
 * Obtiene la información de la empresa activa en el idioma especificado
 * @param lang - Idioma ('es', 'en')
 * @returns Objeto con la información de la empresa activa
 */
export function getActiveCompanyByLang(lang = 'es') {
  const textsJson = lang === 'en' ? textsJsonEN : textsJsonES;
  
  // Buscamos la experiencia activa
  const activeExperience = textsJson.experience.find(exp => exp.isActive === true);
  
  // Si no encontramos ninguna experiencia activa, usamos la primera de la lista
  if (!activeExperience) {
    return {
      companyName: textsJson.experience[0].companyName || 'Company',
      companyLogo: textsJson.experience[0].companyLogo || '',
      companyUrl: textsJson.experience[0].companyUrl || '#',
      location: textsJson.experience[0].location || ''
    };
  }
  
  // Devolvemos los datos de la experiencia activa
  return {
    companyName: activeExperience.companyName || 'Company',
    companyLogo: activeExperience.companyLogo || '',
    companyUrl: activeExperience.companyUrl || '#',
    location: activeExperience.location || ''
  };
}
