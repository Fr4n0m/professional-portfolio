// Utilities for working with projects data
import { projectsData } from '../data/project-data';

/**
 * Gets all projects, sorted with featured projects first
 * @returns Array of sorted projects
 */
export function getAllProjects() {
  return [
    ...projectsData.filter(p => p.featured).sort((a, b) => a.order - b.order),
    ...projectsData.filter(p => !p.featured).sort((a, b) => (a.order || 999) - (b.order || 999))
  ];
}

/**
 * Gets only featured projects
 * @returns Array of sorted featured projects
 */
export function getFeaturedProjects() {
  return projectsData
    .filter(project => project.featured)
    .sort((a, b) => a.order - b.order);
}

/**
 * Combines project data with translations
 * @param {Array} projects - Array of project objects
 * @param {Object} translations - Translations object containing project content
 * @returns Array of projects with translated content
 */
export function getTranslatedProjects(projects, translations) {
  if (!translations || !translations.projectsContent) {
    console.warn('Missing translations for projects!');
    return projects;
  }

  return projects.map(project => {
    const translation = translations.projectsContent[project.id] || { 
      title: project.id, 
      description: "Translation missing" 
    };
    
    return {
      ...project,
      title: translation.title,
      description: translation.description,
    };
  });
}
