import { baseData } from './constants';

export function mergeTranslations(languageSpecific: any, lang: string) {
  // Combinar información personal
  const personalInfo = {
    ...baseData.personalInfo,
    ...languageSpecific.personalInfo,
    profiles: baseData.personalInfo.profiles.map((profile, index) => ({
      ...profile,
      ...(languageSpecific.personalInfo.profiles?.[index] || {})
    }))
  };

  // Combinar proyectos con datos base
  const projects = baseData.projectsData.projects.map(baseProject => {
    const langProject = languageSpecific.projects?.find((p: any) => 
      p.id === baseProject.id || 
      p.title === baseProject.id // fallback para proyectos sin ID
    ) || {};

    return {
      ...baseProject,
      ...langProject,
      images: baseProject.images,
      tags: baseProject.tags,
      link: baseProject.link || langProject.link || '',
      github: baseProject.github || langProject.github || '',
      secondaryLink: baseProject.secondaryLink || langProject.secondaryLink
    };
  });

  // Combinar certificaciones
  const certificationsList = baseData.certificationsData.certifications.map(baseCert => {
    const langCert = languageSpecific.certificationsList?.find((c: any) => 
      c.id === baseCert.id
    ) || {};

    return {
      ...baseCert,
      ...langCert,
      image: baseCert.image,
      url: baseCert.url,
      entity: baseCert.entity
    };
  });

  // Combinar comandos del keyboard manager
  const kmCommands = languageSpecific.keyboardManager?.kmCommands?.map((cmd: any) => ({
    ...cmd,
    icon: baseData.keyboardManagerIcons[cmd.id] || cmd.icon,
    handler: cmd.handler.replace('/LANG', `/${lang}`)
  })) || [];

  return {
    ...languageSpecific,
    personalInfo,
    projectsPage: {
      ...languageSpecific.projectsPage,
      projects
    },
    certificationsPage: {
      ...languageSpecific.certificationsPage,
      certificationsList
    },
    keyboardManager: {
      ...languageSpecific.keyboardManager,
      kmCommands
    }
  };
}
