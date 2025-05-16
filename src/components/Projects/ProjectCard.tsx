import React, { useState } from 'react';
import type { Project } from '../../types/projects';
import ProjectModal from './ProjectModal';

interface Props {
  project: Project;
  buttons: {
    textCodeButton: string;
    textDemoButton: string;
    textDemo2Button: string;
  };
}

const ProjectCard: React.FC<Props> = ({ project, buttons }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Seleccionar la primera imagen para la tarjeta principal
  const thumbnailImage = project.images.length > 0 ? project.images[0] : '/assets/images/placeholder-project.webp';
  
  // Limitar la descripción a un extracto breve
  const shortDescription = project.description.length > 100 
    ? project.description.substring(0, 97) + '...' 
    : project.description;
  
  return (
    <>
      <article 
        className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={thumbnailImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center text-xs py-0.5 px-1.5 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="inline-flex items-center text-xs py-0.5 px-1.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md shadow-sm">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {project.github && (
                <div className="text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              )}
              {project.link && (
                <div className="text-blue-600 dark:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              )}
            </div>
            
            <span className="flex items-center gap-1 text-sm text-blue-800 dark:text-yellow-300 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
              Ver detalles
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </article>
      
      {/* Modal con todos los detalles */}
      {isModalOpen && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          buttons={buttons}
        />
      )}
    </>
  );
};

export default ProjectCard;