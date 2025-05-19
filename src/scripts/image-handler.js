// Asegura que las imágenes se cargan correctamente y maneja los errores
document.addEventListener('DOMContentLoaded', () => {
  // Manejar errores de carga de imágenes
  document.querySelectorAll('.skill-tooltip img').forEach(img => {
    img.addEventListener('error', function() {
      // Reemplazar la imagen fallida con la imagen predeterminada
      this.src = '/assets/screenshots/default-tech.svg';
      console.log(`Imagen no disponible para ${this.alt}, usando imagen predeterminada`);
    });
  });
  
  // Añadir lazy loading a todas las imágenes
  document.querySelectorAll('.skill-tooltip img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});
