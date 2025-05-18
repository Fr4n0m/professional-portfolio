// Este script se ejecuta cuando estamos en la página de certificaciones
document.addEventListener('DOMContentLoaded', () => {
  // Verificar si estamos en la página de certificaciones y no en la sección de certificaciones destacadas
  const isCertificationsPage = window.location.pathname.includes('/certifications');
  const isCertificationsSection = window.location.hash === '#certifications-preview';
  
  // Solo aplicar esta lógica si estamos en la página general de certificaciones
  if (isCertificationsPage && !isCertificationsSection) {
    console.log('Estamos en la página general de certificaciones');
    
    // 1. Activar el botón de certificaciones en el header
    const certificationsButton = document.querySelector('.dropdown-toggle[data-section="certifications-preview"]');
    if (certificationsButton) {
      certificationsButton.classList.add('active', 'font-semibold');
      if (document.documentElement.classList.contains('dark')) {
        certificationsButton.classList.add('text-yellow-300');
      } else {
        certificationsButton.classList.add('text-blue-800');
      }
    }
    
    // 2. Desactivar el enlace de certificaciones destacadas
    const highlightedCertificationsLink = document.querySelector('a[data-is-highlighted-certifications="true"]');
    if (highlightedCertificationsLink) {
      highlightedCertificationsLink.classList.remove('active-link', 'font-semibold');
      highlightedCertificationsLink.classList.remove('text-yellow-300', 'text-blue-800');
      highlightedCertificationsLink.classList.add('text-gray-700', 'dark:text-white');
    }
    
    // 3. Activar el enlace de todas las certificaciones
    const allCertificationsLink = document.querySelector('a[data-is-all-certifications="true"]');
    if (allCertificationsLink) {
      allCertificationsLink.classList.add('active-link', 'font-semibold');
      if (document.documentElement.classList.contains('dark')) {
        allCertificationsLink.classList.add('text-yellow-300');
        allCertificationsLink.classList.remove('text-gray-700', 'dark:text-white');
      } else {
        allCertificationsLink.classList.add('text-blue-800');
        allCertificationsLink.classList.remove('text-gray-700', 'dark:text-white');
      }
    }
    
    // Monitorear cambios en el tema
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Actualizar el botón de certificaciones
      if (certificationsButton) {
        if (isDark) {
          certificationsButton.classList.remove('text-blue-800');
          certificationsButton.classList.add('text-yellow-300');
        } else {
          certificationsButton.classList.remove('text-yellow-300');
          certificationsButton.classList.add('text-blue-800');
        }
      }
      
      // Actualizar el enlace de todas las certificaciones
      if (allCertificationsLink) {
        if (isDark) {
          allCertificationsLink.classList.remove('text-blue-800');
          allCertificationsLink.classList.add('text-yellow-300');
        } else {
          allCertificationsLink.classList.remove('text-yellow-300');
          allCertificationsLink.classList.add('text-blue-800');
        }
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
});
