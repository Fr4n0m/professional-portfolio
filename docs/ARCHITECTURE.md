# Arquitectura del Proyecto

## Estructura de Carpetas

### `/src`

La carpeta principal del código fuente está organizada de la siguiente manera:

#### `/components`
- `ui/`: Componentes de UI básicos (Badge, Card, Tag, etc.)
- `layout/`: Componentes de layout (Header, Footer)
- `pages/`: Componentes específicos de páginas (HomePage)
- `sections/`: Secciones reutilizables (Hero)
- `Projects/`: Componentes relacionados con proyectos

#### `/pages`
- `index.astro`: Página principal en español
- `en/`: Páginas en inglés
- `projects/`: Listado de proyectos
- `certifications/`: Página de certificaciones

#### `/translations`
- `es.json`: Traducciones en español
- `en.json`: Traducciones en inglés

#### `/utils`
- `const.js`: Constantes de la aplicación
- `cssClasses.ts`: Clases CSS reutilizables
- `tags.ts`: Definición de tags de tecnologías

#### `/styles`
- `reset.css`: Reset CSS
- `animations.css`: Animaciones globales

## Patrones de Diseño

### Internacionalización

El sistema de i18n está implementado mediante:
1. Archivos JSON con traducciones
2. Rutas separadas por idioma (`/` para ES, `/en` para EN)
3. Componente LanguageToggle para cambiar idioma

### Sistema de Temas

- Soporte para modo claro/oscuro
- Detección automática de preferencia del sistema
- Persistencia en localStorage

### Componentes

- **Componentes Astro**: Para contenido estático
- **Componentes React**: Para interactividad (Carousel, KeyboardManager)

## Routing

El enrutamiento sigue la estructura de carpetas:
- `/`: Página principal (español)
- `/en`: Página principal (inglés)
- `/projects`: Todos los proyectos
- `/certifications`: Certificaciones

## Deployment

El proyecto está configurado para desplegarse en Vercel con Server-Side Rendering activado.
