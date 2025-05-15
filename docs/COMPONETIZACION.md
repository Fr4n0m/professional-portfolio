# Guía de Componetización

## Introducción

Este documento describe el enfoque de componetización utilizado en el proyecto para mejorar la mantenibilidad, reutilización y separación de responsabilidades del código.

## Principios de Componetización

1. **Responsabilidad Única**: Cada componente debe tener una única responsabilidad.
2. **Composición**: Construir componentes complejos mediante la composición de componentes más simples.
3. **Prop API Clara**: Definir interfaces de props claras y descriptivas.
4. **Reutilización**: Diseñar componentes para ser reutilizados en diferentes contextos.
5. **Testabilidad**: Componentes pequeños son más fáciles de probar.

## Estructura de Componentes

### Componentes del Carousel

El componente `Carousel` se ha dividido en:

- **index.tsx**: Componente principal que coordina todo el carrusel.
- **CarouselSlide.tsx**: Componente para cada diapositiva individual.
- **CarouselControls.tsx**: Componente para los botones de navegación.
- **CarouselIndicators.tsx**: Componente para los indicadores de posición.

### Componentes del Hero

El componente `Hero` se ha dividido en:

- **index.astro**: Componente principal que coordina todo el hero.
- **ProfileImage.astro**: Componente para la imagen de perfil (móvil y desktop).
- **ProfileTooltip.astro**: Componente para el tooltip que aparece al hacer hover.
- **HeroTitle.astro**: Componente para el título y badge.
- **HeroDescription.astro**: Componente para la descripción del hero.
- **SocialLinks.astro**: Componente para los enlaces sociales.

### Componentes de Animación del Hero

El componente `HeroAnimation` se ha dividido en:

- **index.tsx**: Componente principal que coordina las animaciones.
- **TitleAnimation.tsx**: Componente para la animación del título con GSAP.
- **ButtonsAnimation.tsx**: Componente para la animación de los botones con Motion.
- **DecorationElement.tsx**: Componente para el elemento decorativo del fondo.

### Componentes de Proyectos

El componente `ProjectItem` se ha dividido en:

- **ProjectHeader.astro**: Componente para el título y descripción del proyecto.
- **ProjectTags.astro**: Componente para las etiquetas de tecnologías.
- **ProjectFooter.astro**: Componente para los enlaces y botones del proyecto.

## Ventajas del Enfoque

1. **Código más legible**: Archivos más pequeños con propósitos claros.
2. **Mejor mantenibilidad**: Cambios en un componente no afectan a otros.
3. **Reutilización**: Componentes como `ProfileImage` pueden reutilizarse en diferentes partes.
4. **Desarrollo paralelo**: Diferentes desarrolladores pueden trabajar en diferentes componentes.
5. **Testing más sencillo**: Es más fácil probar componentes con responsabilidades específicas.

## Ejemplo de Uso

### Antes:

```jsx
// Hero.astro - Un componente grande con múltiples responsabilidades
<div>
  <img src="/profile.webp" alt="Perfil" />
  <h1>Título del Hero</h1>
  <p>Descripción del hero</p>
  <div>
    <a href="/">Enlace 1</a>
    <a href="/">Enlace 2</a>
  </div>
</div>
```

### Después:

```jsx
// index.astro - Un componente que compone otros componentes
<ProfileImage 
  imageSrc="/profile.webp" 
  altText="Perfil"
/>
<HeroTitle 
  title="Título del Hero" 
  badgeText="Badge"
/>
<HeroDescription 
  description="Descripción del hero"
/>
<SocialLinks 
  links={links}
/>
```

## Próximos Pasos

1. **Componetizar la sección de experiencia**: Dividir `ExperienceItem` en subcomponentes.
2. **Componetizar la sección de habilidades**: Dividir `Skills` en subcomponentes.
3. **Revisar componentes UI**: Asegurar que los componentes UI básicos también siguen estos principios.
