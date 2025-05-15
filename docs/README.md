# Portfolio Profesional - Francisco José Rodríguez Martínez

## Descripción General

Portfolio profesional desarrollado con Astro, React y Tailwind CSS. El proyecto incluye internacionalización manual (ES/EN), modo oscuro/claro, y está optimizado para rendimiento con Server-Side Rendering mediante Vercel.

## Tecnologías Principales

- **Astro**: Framework principal para el desarrollo
- **React**: Componentes interactivos
- **Tailwind CSS**: Sistema de estilos
- **TypeScript**: Tipado estático
- **Vercel**: Deployment y SSR
- **Bun**: Gestor de paquetes y runtime (más rápido que npm)

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
├── components/     # Componentes reutilizables
├── layouts/        # Layouts de página
├── pages/          # Páginas de la aplicación
├── translations/   # Archivos de traducción
├── utils/          # Utilidades y constantes
└── styles/         # Estilos globales
```

## Nota sobre el gestor de paquetes

Este proyecto usa **Bun** como gestor de paquetes por su velocidad superior. Si ves archivos de npm (`package-lock.json`), puedes eliminarlos de forma segura.
