# Documentación del Sistema de Proyectos

Este sistema centraliza la gestión de proyectos para garantizar consistencia entre idiomas y una mejor experiencia de usuario.

## Estructura de Archivos

- `/src/data/project-data.js` - Datos centralizados de todos los proyectos
- `/src/utils/project-utils.js` - Funciones para trabajar con proyectos
- `/src/translations/[lang]/projects-content.json` - Traducciones de título y descripción

## Cómo Funciona

1. Los proyectos se definen en `project-data.js` con un ID único, marcando cuáles son destacados
2. Las traducciones de título y descripción se guardan en archivos por idioma como `projects-content.json`
3. Al cargar una página, se obtienen los proyectos y se combinan con sus traducciones correspondientes

## Para Añadir un Nuevo Proyecto

1. Añade un nuevo objeto al array en `project-data.js` con:
   - `id`: identificador único
   - `featured`: true si debe aparecer en "Proyectos Destacados"
   - `order`: número para controlar el orden de aparición
   - Otros datos (imágenes, enlaces, etiquetas)

2. Añade las traducciones en cada archivo `projects-content.json`:
   ```json
   "mi-nuevo-proyecto": {
     "title": "Título en este idioma",
     "description": "Descripción en este idioma"
   }
   ```

## Ventajas

- Los mismos proyectos aparecerán destacados en todos los idiomas
- Mantenimiento centralizado de proyectos
- Todos los proyectos aparecen en la página de "Todos los Proyectos"
- Consistencia visual y de experiencia entre idiomas
