# Estructura de Traducciones

Este directorio contiene todas las traducciones del proyecto organizadas por idioma.

## Estructura Modular

Para mejorar la organización y mantenibilidad, las traducciones están divididas en módulos más pequeños:

### Para cada idioma (ejemplo: `/es/`):

- `personal-info.json` - Información personal
- `header-items.json` - Elementos del menú principal
- `layout.json` - Metadatos del layout
- `main-page.json` - Textos de la página principal
- `projects-page.json` - Textos de la página de proyectos
- `projects.json` - Lista de proyectos
- `certifications-page.json` - Textos de la página de certificaciones
- `certifications.json` - Lista de certificaciones
- `social-media.json` - Textos de redes sociales
- `experience.json` - Información de experiencia laboral
- `footer-items.json` - Elementos del footer
- `keyboard-manager.json` - Configuración del gestor de teclado
- `language-names.json` - Nombres de idiomas
- `index.ts` - Archivo que combina todos los módulos

## Agregar un nuevo idioma

1. Crea una nueva carpeta con el código del idioma (ej: `/fr/`)
2. Copia todos los archivos JSON de otro idioma
3. Traduce el contenido manteniendo la estructura
4. Crea un `index.ts` que importe todos los módulos
5. Actualiza `/src/utils/const.js` para importar el nuevo idioma

## Ventajas de esta estructura

- ✅ Archivos más pequeños y manejables
- ✅ Fácil de mantener y actualizar
- ✅ Menor probabilidad de conflictos en git
- ✅ Más fácil encontrar traducciones específicas
- ✅ Mejor organización del código
