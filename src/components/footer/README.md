# Componentes de Footer y Navegación

Este directorio contiene los componentes para el footer y su navegación en diferentes versiones (Astro y React).

## Componentes disponibles

### 1. FooterNav.astro
Menú de navegación para el footer implementado en Astro.

### 2. FooterNavReact.tsx
Versión React del menú de navegación para el footer.

### 3. FooterReact.tsx
Implementación completa del footer en React.

### 4. FooterContainer.astro
Componente contenedor que permite elegir entre la versión Astro o React del footer.

## Uso

### Uso básico (Astro)

```astro
---
import Footer from '../layout/Footer.astro';
---

<Footer lang="es" translations={Astro.props.translations} />
```

### Uso con React

```astro
---
import FooterContainer from '../components/footer/FooterContainer.astro';
---

<FooterContainer 
  lang="es" 
  translations={Astro.props.translations}
  useReact={true} 
/>
```

## Estructura de Navegación

El menú de navegación incluye las siguientes opciones:

- Sobre mí (`/#about`)
- Proyectos (`/#projects`)
- Experiencia (`/#experience`)
- Contacto (`mailto:Fran11799@outlook.com`)
- CV (`https://cv-web-smoky.vercel.app/`)
- Subir (botón para volver al inicio de la página)

## Características

- Diseño responsive que se adapta a diferentes tamaños de pantalla
- Efecto "hover" para mejorar la experiencia de usuario
- Separadores visuales entre elementos de navegación
- Botón "Subir" con animación para volver al inicio de la página
- Compatibilidad con modo oscuro/claro
- Soporte para multilenguaje

## Personalización

Para personalizar las opciones del footer, modifica el archivo de traducciones en:
`/src/translations/[idioma]/footer-items.json`
