export interface ProjectSummary {
  id: string;
  title: string;
  summary: string;
  mainImage: string;
  tags: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link?: string;
  github?: string;
  secondaryLink?: string;
}

export interface Project extends ProjectDetail {
  // Esta interfaz mantiene compatibilidad con el código existente
  // mientras se hace la transición al nuevo sistema
}
