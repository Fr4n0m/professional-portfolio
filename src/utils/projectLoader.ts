/**
 * Utilidad para cargar proyectos de manera optimizada
 * Este enfoque reduce el tamaño inicial de carga y permite cargar detalles bajo demanda
 */

import type { ProjectSummary, ProjectDetail } from '../types/projects';

/**
 * Carga el listado principal de proyectos (versión ligera)
 * @param lang Código de idioma
 * @returns Array de resúmenes de proyectos
 */
export async function loadProjectsSummary(lang: string): Promise<ProjectSummary[]> {
  try {
    // Intentar cargar el archivo para el idioma especificado
    const projects = await import(`../translations/${lang}/projects-main.json`);
    return projects.default;
  } catch (error) {
    console.error(`Error loading projects for ${lang}:`, error);
    
    // Fallback al inglés si no se encuentra el archivo
    try {
      const fallbackProjects = await import('../translations/en/projects-main.json');
      return fallbackProjects.default;
    } catch (fallbackError) {
      console.error('Error loading fallback projects:', fallbackError);
      return [];
    }
  }
}

/**
 * Carga los detalles de un proyecto específico
 * @param lang Código de idioma
 * @param projectId ID del proyecto
 * @returns Detalles del proyecto o null si no se encuentra
 */
export async function loadProjectDetail(lang: string, projectId: string): Promise<ProjectDetail | null> {
  try {
    // Intentar cargar el archivo de detalles para el idioma especificado
    const projectDetail = await import(`../translations/${lang}/projects-details/${projectId}.json`);
    return projectDetail.default;
  } catch (error) {
    console.error(`Error loading project detail for ${lang}/${projectId}:`, error);
    
    // Fallback al inglés si no se encuentra el archivo
    try {
      const fallbackDetail = await import(`../translations/en/projects-details/${projectId}.json`);
      return fallbackDetail.default;
    } catch (fallbackError) {
      console.error(`Error loading fallback project detail for ${projectId}:`, fallbackError);
      return null;
    }
  }
}

/**
 * Carga todos los detalles de proyectos (usar solo cuando sea necesario)
 * @param lang Código de idioma
 * @returns Array de detalles de proyectos
 */
export async function loadAllProjectDetails(lang: string): Promise<ProjectDetail[]> {
  // Primero cargamos los resúmenes para obtener los IDs
  const summaries = await loadProjectsSummary(lang);
  
  // Cargamos los detalles de cada proyecto
  const detailPromises = summaries.map(summary => loadProjectDetail(lang, summary.id));
  const details = await Promise.all(detailPromises);
  
  // Filtramos los nulos (por si algún proyecto no se pudo cargar)
  return details.filter(detail => detail !== null) as ProjectDetail[];
}
