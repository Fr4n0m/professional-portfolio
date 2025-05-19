import React, { useState, useEffect } from 'react';
import type { Project } from '../../types/projects';
import { TAGS } from '../../utils/tags';

interface ModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  buttons: {
    textCodeButton: string;
    textDemoButton: string;
    textDemo2Button: string;
  };
}

const ProjectModal: React.FC<ModalProps> = ({ project, isOpen, onClose, buttons }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Manejar cierre con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Evitar scroll en background
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restaurar scroll en background
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  // Navegación del carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Overlay para cerrar al hacer clic fuera del modal */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      {/* Contenido del modal */}
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()} // Evitar que clics en el modal lo cierren
      >
        {/* Botón de cierre */}
        <button 
          className="absolute right-4 top-4 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors"
          onClick={onClose}
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        {/* Carrusel de imágenes */}
        <div className="relative h-[40vh] md:h-[50vh] bg-gray-100 dark:bg-gray-900">
          {project.images.length > 0 && (
            <>
              <img 
                src={project.images[currentImageIndex]} 
                alt={project.title}
                className="w-full h-full object-contain"
              />
              
              {/* Controles del carrusel */}
              {project.images.length > 1 && (
                <>
                  <button 
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    onClick={prevImage}
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  
                  <button 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    onClick={nextImage}
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  
                  {/* Indicadores */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex 
                            ? 'bg-blue-600 dark:bg-blue-400' 
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        
        {/* Detalles del proyecto */}
        <div className="p-6 overflow-y-auto flex-grow">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h2>
          
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-3">
            {project.tags.map((tag, index) => {
              return TAGS[tag] ? (
                <div key={index} className="skill-tooltip-container relative inline-block">
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={TAGS[tag].link}
                    className={`skill-pill flex gap-x-2 rounded-full text-xs font-semibold items-center ${TAGS[tag].class} px-3 py-1 border mb-2`}
                  >
                    {/* Nombre de la tecnología */}
                    {TAGS[tag].name}
                  </a>
                </div>
              ) : (
                <span 
                  key={index}
                  className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          
          {/* Descripción */}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          
          {/* Enlaces */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {buttons.textCodeButton}
              </a>
            )}
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                {buttons.textDemoButton}
              </a>
            )}
            
            {project.secondaryLink && (
              <a 
                href={project.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                {buttons.textDemo2Button}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

/* Estilo para las pills */
import "./project-card-styles.css"