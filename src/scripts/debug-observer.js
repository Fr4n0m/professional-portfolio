// Archivo específico para depurar el funcionamiento del observer
// Implementa una simple verificación para ver qué secciones están siendo reconocidas

document.addEventListener('DOMContentLoaded', () => {
  console.log('Debug Observer: Script cargado');
  
  // Mostrar todas las secciones en la página con sus IDs y atributos data-section
  const sections = document.querySelectorAll('section[id]');
  console.log('Secciones encontradas:', sections.length);
  
  sections.forEach(section => {
    console.log('Sección:', {
      id: section.id,
      'data-section': section.getAttribute('data-section'),
      offsetTop: section.offsetTop,
      offsetHeight: section.offsetHeight
    });
  });
  
  // Mostrar todos los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('Enlaces de navegación encontrados:', navLinks.length);
  
  navLinks.forEach(link => {
    console.log('Enlace:', {
      href: link.getAttribute('href'),
      'data-section': link.getAttribute('data-section'),
      'aria-label': link.getAttribute('aria-label')
    });
  });
  
  // Verificar el observer en el header
  const header = document.querySelector('header');
  console.log('Header tiene observer:', header?.hasAttribute('data-has-observer'));
});
