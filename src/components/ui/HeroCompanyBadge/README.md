# HeroCompanyBadge Component

Este es un componente modular para mostrar el badge de la empresa en la sección Hero del portafolio.

## Estructura de Componentes

El badge se ha dividido en los siguientes subcomponentes:

1. **BaseBadge.astro**: Componente base que proporciona los estilos fundamentales y estructura del badge.
2. **LogoWrapper.astro**: Wrapper específico para el logo de la empresa con transiciones y efectos.
3. **BadgeDot.astro**: Punto animado que aparece en la esquina superior del badge al hacer hover.
4. **index.astro**: Componente principal que integra todos los subcomponentes y gestiona las interacciones.

## Uso

```astro
<HeroCompanyBadge class="p-1.5">
  <DimapLogo 
    darkMode={darkMode}
    width="80" 
    height="36" 
    class="w-16 h-6 transition-all duration-300"
  />
</HeroCompanyBadge>
```

## Props

El componente principal acepta las siguientes props:

- **class**: Clases CSS adicionales para el badge (ej: padding, márgenes)
- **animationEnabled**: Controla si el badge debe tener animación de pulso (por defecto: true)
- **logoWrapperClass**: Clases CSS específicas para el wrapper del logo
- **dotClass**: Clases CSS específicas para el punto animado

## Interactividad

El componente incluye:

- Transición de escala y color al hacer hover
- Un punto animado que aparece en la esquina superior
- Cambio automático de color del logo SVG en hover
- Adaptación a temas claro/oscuro

## Mantenimiento

Para modificar los componentes:

- **Colores**: Editar los gradientes y sombras en BaseBadge.astro
- **Animaciones**: Ajustar las transformaciones en los estilos globales de index.astro
- **Comportamiento del punto**: Modificar tamaños y posición en BadgeDot.astro
