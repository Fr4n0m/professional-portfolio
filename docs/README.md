# Portfolio Profesional - Francisco José Rodríguez Martínez

## Descripción General

Portfolio profesional desarrollado con Astro, React y Tailwind CSS. El proyecto incluye completo soporte de internacionalización para 19 idiomas (incluyendo RTL como árabe), modo oscuro/claro, ajustes de accesibilidad y está optimizado para rendimiento con Server-Side Rendering mediante Vercel.

## Tecnologías Principales

- **Astro**: Framework principal para el desarrollo
- **React**: Componentes interactivos
- **Tailwind CSS**: Sistema de estilos
- **TypeScript**: Tipado estático
- **Vercel**: Deployment y SSR
- **Bun**: Gestor de paquetes y runtime (más rápido que npm)
- **Google Fonts (Noto Sans)**: Para soporte de idiomas internacionales
- **GSAP**: Para animaciones avanzadas

## Características Destacadas

- **Internacionalización completa**: 19 idiomas con soporte para escrituras complejas
- **Panel de Accesibilidad**: Control de tamaño de fuente, contraste, reducción de movimiento
- **Navegación por teclado**: Atajos de teclado y accesibilidad completa
- **Optimización para SEO**: Metadatos, Open Graph, Twitter Cards
- **Sistema modular de componentes**: Arquitectura escalable y mantenible
- **Gestor de cookies GDPR/CCPA**: Sistema completo de consentimiento

## Enlaces

- [Demo en vivo](https://professional-portfolio-nine.vercel.app/)
- [GitHub](https://github.com/Fr4n0m/professional-pf)

## Scripts disponibles

```bash
bun run dev      # Inicia servidor de desarrollo
bun run build    # Construye el proyecto
bun run preview  # Vista previa de la build
bun run format   # Formatea el código con Prettier
bun run lint     # Lintea el código con ESLint
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Fr4n0m/professional-pf

# Instalar dependencias con Bun
bun install

# Iniciar servidor de desarrollo
bun run dev
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

## Nota sobre el gestor de paquetes

Este proyecto usa **Bun** como gestor de paquetes por su velocidad superior. Si ves archivos de npm (`package-lock.json`), puedes eliminarlos de forma segura.

## Documentación adicional

Consulta estos recursos para más información:

- `docs/COOKIE-COMPLIANCE.md`: Detalles sobre el sistema de gestión de cookies
- `src/translations/README.md`: Documentación del sistema de internacionalización
- `src/components/ui/README.md`: Guía de componentes UI reutilizables
