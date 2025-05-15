import { baseData } from './constants';

export function mergeTranslations(languageSpecific: any, lang: string) {
  // Combinar información personal
  const personalInfo = {
    ...baseData.personalInfo,
    ...languageSpecific.personalInfo,
    profiles: baseData.personalInfo.profiles.map((profile, index) => ({
      ...profile,
      ...(languageSpecific.personalInfo?.profiles?.[index] || {})
    }))
  };

  // Combinar proyectos con datos base
  const projects = languageSpecific.projects?.map((langProject: any) => {
    const baseProject = baseData.projectsData.projects.find(p => p.id === langProject.id);
    if (!baseProject) return langProject;
    
    return {
      ...baseProject,
      ...langProject,
      // Mantener datos base si no se sobrescriben
      images: baseProject.images,
      tags: baseProject.tags,
      link: baseProject.link,
      github: baseProject.github,
      secondaryLink: baseProject.secondaryLink
    };
  }) || [];

  // Combinar certificaciones
  const certificationsList = languageSpecific.certificationsList?.map((langCert: any) => {
    const baseCert = baseData.certificationsData.certifications.find(c => c.id === langCert.id);
    if (!baseCert) return langCert;
    
    return {
      ...baseCert,
      ...langCert,
      // Mantener datos base
      image: baseCert.image,
      url: baseCert.url,
      entity: baseCert.entity
    };
  }) || [];

  // Combinar comandos del keyboard manager
  const kmCommands = languageSpecific.keyboardManager?.kmCommands?.map((cmd: any) => ({
    ...cmd,
    icon: baseData.keyboardManagerIcons[cmd.id] || cmd.icon,
    handler: cmd.handler.includes('#') ? 
      `/${lang}${cmd.handler.slice(cmd.handler.indexOf('#'))}` : 
      cmd.handler.replace(/^\/[^\/]*/, `/${lang}`)
  })) || [];

  // Construir objeto final
  return {
    ...languageSpecific,
    personalInfo,
    projectsPage: languageSpecific.projectsPage ? {
      ...languageSpecific.projectsPage,
      projects
    } : undefined,
    certificationsPage: languageSpecific.certificationsPage ? {
      ...languageSpecific.certificationsPage,
      certificationsList
    } : undefined,
    keyboardManager: languageSpecific.keyboardManager ? {
      ...languageSpecific.keyboardManager,
      kmCommands
    } : undefined
  };
}
