# Professional portfolio

![196_1x_shots_so](https://github.com/user-attachments/assets/51c8f360-73e7-4057-8b2e-3142a15eb3a9)

![128_1x_shots_so](https://github.com/user-attachments/assets/727396d8-052a-4583-939a-1a5a78b87f7d)

_Enlace a la web -> https://professional-portfolio-nine.vercel.app/_

## IMPORTANTE

**NO MODIFICAR NINGÚN COMPONENTE O FUNCIONALIDAD** que no haya sido explícitamente solicitado. Ante cualquier duda sobre los cambios a realizar, consultar primero antes de proceder. Cualquier modificación no solicitada puede romper la funcionalidad existente.

## Guías de diseño y estilo

### Iconos y UI

Este proyecto utiliza un sistema de diseño inspirado en el estilo Apple/macOS. Los iconos, menús desplegables y paneles de control están diseñados para ofrecer una experiencia visual coherente y elegante siguiendo los estándares de Apple.

#### Elementos de estilo Apple

- **Iconos**: Los iconos utilizados son réplicas de SF Symbols de Apple. Estos no deben ser modificados o reemplazados sin aprobación explícita.
  
- **ThemeToggle**: El selector de tema sigue el diseño de macOS con un menú desplegable redondeado y efectos de transición suaves.
  
- **Control Center**: El panel de accesibilidad usa un diseño similar al Centro de Control de macOS con transiciones y elementos visuales consistentes.

- **Hover y Efectos**: Los elementos interactivos tienen efectos consistentes con las directrices de Apple, utilizando scale-up en hover y transiciones suaves.

> ⚠️ **IMPORTANTE**: No modificar estos elementos de diseño ni sus estilos sin autorización previa. El estilo visual es una parte esencial de la identidad del proyecto.

## Tecnologías Principales

- **Astro**: Framework principal para el desarrollo
- **React**: Componentes interactivos
- **Tailwind CSS**: Sistema de estilos
- **TypeScript**: Tipado estático
- **Vercel**: Deployment y SSR
- **Bun**: Gestor de paquetes y runtime (más rápido que npm)
- **Google Fonts (Noto Sans)**: Para soporte de idiomas internacionales

## Soporte Multilingüe

El proyecto tiene soporte completo para 19 idiomas, incluyendo idiomas con escrituras complejas:

- **Idiomas LTR**: Español, Inglés (UK/US), Chino, Hindi, Portugués, Francés, Alemán, Japonés, Ruso, Italiano, Coreano, Holandés, Polaco, Turco
- **Idiomas RTL**: Árabe
- **Idiomas de fantasía**: Alto Valyrio

### Características del soporte multilingüe:

- **Carga de fuentes optimizada**: Fuentes específicas para cada idioma (Noto Sans familia)
- **Selección inteligente de layout**: Soporte para RTL (derecha a izquierda) y LTR (izquierda a derecha)
- **Sistema de traducciones modular**: Archivos JSON separados por funcionalidad
- **Renderizado eficiente**: Solo carga las fuentes necesarias para el idioma seleccionado
- **Adaptación de estilos**: Ajustes automáticos para diferentes sistemas de escritura

## Componetización

El proyecto utiliza un enfoque modular para la creación de componentes, dividiendo componentes grandes en subcomponentes más pequeños y especializados. Esto mejora:

- **Mantenibilidad**: Componentes más pequeños son más fáciles de entender y modificar.
- **Reutilización**: Componentes específicos pueden reutilizarse en diferentes partes.
- **Separación de responsabilidades**: Cada componente tiene un propósito claro.
- **Testing más sencillo**: Componentes más pequeños son más fáciles de probar.

### Ejemplos de componetización:
- **Carousel**: Dividido en CarouselSlide, CarouselControls y CarouselIndicators.
- **Hero**: Dividido en ProfileImage, HeroTitle, HeroDescription y SocialLinks.
- **HeroAnimation**: Dividido en TitleAnimation, ButtonsAnimation y DecorationElement.
- **Projects**: Dividido en ProjectHeader, ProjectTags y ProjectFooter.
- **LanguageSelector**: Dividido en LanguageToggleButton y LanguageMenu.

## Gestión de Cookies y Privacidad

Este proyecto incluye un sistema completo de gestión de cookies y consentimiento de usuario, cumpliendo con normativas como GDPR y CCPA. Características principales:

- **Banner de consentimiento de cookies** personalizable y multilingüe
- **Panel de preferencias** para que los usuarios seleccionen sus categorías de cookies
- **Carga diferida** de contenido que requiere consentimiento
- **Integración con servicios analíticos** (Google Analytics, Facebook Pixel)
- **Documentación detallada** sobre implementación en `/docs/COOKIE-COMPLIANCE.md`

Para más información, consulta la documentación específica en la carpeta `/docs`.

## Accesibilidad

El proyecto implementa características de accesibilidad avanzadas:

- **Tamaño de fuente ajustable**: 8 niveles de tamaño (85% - 120%)
- **Contraste configurable**: Modos alto contraste y estándar
- **Soporte para lectores de pantalla**: Etiquetas ARIA y texto alternativo
- **Navegación por teclado**: Atajos de teclado y navegación completa sin ratón
- **Prefers-reduced-motion**: Detección de preferencias de reducción de movimiento

## Scripts disponibles

```bash
bun run dev      # Inicia servidor de desarrollo
bun run build    # Construye el proyecto
bun run preview  # Vista previa de la build
bun run format   # Formatea el código con Prettier
bun run lint     # Lintea el código con ESLint
```

## Estructura principal

```
src/
├── components/          # Componentes reutilizables
│   ├── Carousel/        # Componentes del Carousel
│   ├── Hero/            # Componentes del Hero
│   ├── HeroAnimation/   # Componentes de animación del Hero
│   ├── Projects/        # Componentes de proyectos
│   │   └── ProjectComponents/ # Subcomponentes de proyectos
│   ├── header/          # Componentes de navegación
│   │   └── components/    # Subcomponentes del header (menús, idiomas)
├── layouts/             # Layouts de página
├── pages/               # Páginas de la aplicación
├── translations/        # Archivos de traducción por idioma
├── utils/               # Utilidades y constantes
├── i18n/                # Configuración de internacionalización
└── icons/               # Iconos SVG y componentes de iconos
```