// Este script se ejecuta cuando estamos en la página de proyectos
document.addEventListener('DOMContentLoaded', () => {
  // Verificar si estamos en la página de proyectos y no en la sección de proyectos destacados
  const isProjectsPage = window.location.pathname.includes('/projects');
  const isProjectsSection = window.location.hash === '#projects';
  
  // Solo aplicar esta lógica si estamos en la página general de proyectos
  if (isProjectsPage && !isProjectsSection) {
    console.log('Estamos en la página general de proyectos');
    
    // 1. Activar el botón de proyectos en el header
    const projectsButton = document.querySelector('.dropdown-toggle[data-section="projects"]');
    if (projectsButton) {
      projectsButton.classList.add('active', 'font-semibold');
      if (document.documentElement.classList.contains('dark')) {
        projectsButton.classList.add('text-yellow-300');
      } else {
        projectsButton.classList.add('text-blue-800');
      }
    }
    
    // 2. Desactivar el enlace de proyectos destacados
    const highlightedProjectsLink = document.querySelector('a[data-is-highlighted-projects="true"]');
    if (highlightedProjectsLink) {
      highlightedProjectsLink.classList.remove('active-link', 'font-semibold');
      highlightedProjectsLink.classList.remove('text-yellow-300', 'text-blue-800');
      highlightedProjectsLink.classList.add('text-gray-700', 'dark:text-white');
    }
    
    // 3. Activar el enlace de todos los proyectos
    const allProjectsLink = document.querySelector('a[data-is-all-projects="true"]');
    if (allProjectsLink) {
      allProjectsLink.classList.add('active-link', 'font-semibold');
      if (document.documentElement.classList.contains('dark')) {
        allProjectsLink.classList.add('text-yellow-300');
        allProjectsLink.classList.remove('text-gray-700', 'dark:text-white');
      } else {
        allProjectsLink.classList.add('text-blue-800');
        allProjectsLink.classList.remove('text-gray-700', 'dark:text-white');
      }
    }
    
    // Monitorear cambios en el tema
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Actualizar el botón de proyectos
      if (projectsButton) {
        if (isDark) {
          projectsButton.classList.remove('text-blue-800');
          projectsButton.classList.add('text-yellow-300');
        } else {
          projectsButton.classList.remove('text-yellow-300');
          projectsButton.classList.add('text-blue-800');
        }
      }
      
      // Actualizar el enlace de todos los proyectos
      if (allProjectsLink) {
        if (isDark) {
          allProjectsLink.classList.remove('text-blue-800');
          allProjectsLink.classList.add('text-yellow-300');
        } else {
          allProjectsLink.classList.remove('text-yellow-300');
          allProjectsLink.classList.add('text-blue-800');
        }
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
});
