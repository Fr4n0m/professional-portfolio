# Sistema de Traducciones

Este directorio contiene todas las traducciones del proyecto organizadas por idioma, con soporte completo para 19 idiomas.

## Idiomas Soportados

- **Español (ES)**: `es/` - Idioma predeterminado
- **Español (MX)**: `es-mx/`
- **Inglés (UK)**: `en/`
- **Inglés (US)**: `en-us/`
- **Chino**: `zh/`
- **Hindi**: `hi/` - Con soporte para caracteres Devanagari
- **Árabe**: `ar/` - Con soporte RTL (derecha a izquierda)
- **Portugués**: `pt/`
- **Francés**: `fr/`
- **Alemán**: `de/`
- **Japonés**: `ja/`
- **Ruso**: `ru/`
- **Italiano**: `it/`
- **Coreano**: `ko/`
- **Holandés**: `nl/`
- **Polaco**: `pl/`
- **Turco**: `tr/`
- **Alto Valyrio**: `hv/` - Idioma de fantasía (Game of Thrones)

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
- `control-center.json` - Textos del panel de control
- `cv-menu.json` - Textos del menú de CV
- `index.ts` - Archivo que combina todos los módulos

## Configuración y Carga de Fuentes

El sistema de traducciones está optimizado para cargar automáticamente las fuentes adecuadas para cada idioma:

- **Idiomas latinos**: Utilizan las fuentes del sistema y SF Pro
- **Árabe**: Carga Noto Sans Arabic para soporte RTL
- **Hindi**: Carga Noto Sans Devanagari para caracteres correctos
- **Japonés**: Carga Noto Sans JP para caracteres japoneses
- **Chino**: Optimizado para mostrar correctamente caracteres chinos
- **Coreano**: Soporte para Hangul mediante fuentes adecuadas

## Implementación RTL

Para idiomas de derecha a izquierda (como el árabe):

- Se aplica `dir="rtl"` al elemento HTML
- Los componentes flexbox invierten su dirección
- Los menús y elementos UI se ajustan automáticamente

## Agregar un nuevo idioma

1. Crea una nueva carpeta con el código del idioma (ej: `/ca/` para catalán)
2. Copia todos los archivos JSON de otro idioma similar
3. Traduce el contenido manteniendo la estructura JSON
4. Crea un `index.ts` que importe todos los módulos
5. Añade el idioma en `/src/i18n/config.ts`
6. Configura la bandera y otros metadatos del idioma
7. Si el idioma requiere fuentes especiales, añádelas en el Layout

## Ventajas de esta estructura

- ✅ Archivos más pequeños y manejables
- ✅ Fácil de mantener y actualizar
- ✅ Menor probabilidad de conflictos en git
- ✅ Mejor organización del código
- ✅ Soporte para escrituras complejas y RTL
- ✅ Optimización de rendimiento (carga selectiva de fuentes)

## Solución de Problemas

Si un idioma no se muestra correctamente:

1. Verifica que las fuentes adecuadas estén siendo cargadas
2. Comprueba la configuración en `i18n/config.ts`
3. Asegúrate de que los estilos CSS no estén interfiriendo con la visualización
4. Para idiomas complejos, añade reglas CSS específicas en el Layout.astro
