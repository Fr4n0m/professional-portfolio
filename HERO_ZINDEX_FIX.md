# Solución del Problema de Z-Index de la Imagen del Hero

## Problema detectado
La imagen de perfil del Hero estaba mostrándose por encima de todos los elementos de la página, incluyendo el header de navegación, debido a un z-index excesivamente alto.

## Causa del problema
Se identificaron varios elementos con z-index inadecuados que causaban problemas de superposición:

1. El componente `.hero-profile-wrapper` tenía un z-index de 500.
2. El tooltip de perfil `.hero-tooltip-container` tenía un z-index extremadamente alto de 9999.
3. El header solo tenía un z-index de 10, que era insuficiente para mantenerse por encima de los elementos del hero.

## Solución implementada

### 1. Reducción del z-index del ProfileImage
En el archivo `/src/components/Hero/ProfileImage.astro`, se redujo el z-index del contenedor principal:
```diff
.hero-profile-wrapper {
  position: relative;
- z-index: 500;
+ z-index: 1;
  cursor: pointer;
}
```

### 2. Reducción del z-index del ProfileTooltip
En el archivo `/src/components/Hero/ProfileTooltip.astro`, se ajustó el z-index del tooltip para que no sobrepase al header:
```diff
.hero-tooltip-container {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
- z-index: 9999;
+ z-index: 40;
  pointer-events: none;
}
```

### 3. Aumento del z-index del Header
En el archivo `/src/components/layout/Header.astro`, se aumentó el z-index del header para asegurar que siempre esté por encima de cualquier otro elemento:
```diff
- <header class='fixed top-0 z-10 flex items-center justify-center w-full mx-auto'>
+ <header class='fixed top-0 z-50 flex items-center justify-center w-full mx-auto'>
```

## Resultado
Con estos cambios, se ha establecido una jerarquía clara de z-index:

1. Header: z-index 50 (el más alto)
2. Tooltip del perfil: z-index 40 (visible sobre otros elementos pero bajo el header)
3. Imagen del perfil: z-index 1 (bajo en la jerarquía)

Ahora, el header siempre se mostrará por encima de cualquier otro elemento, incluida la imagen de perfil y su tooltip, mientras que el tooltip del perfil seguirá apareciendo por encima de otros elementos cuando se active, pero siempre por debajo del header.

## Recomendación para futuros desarrollos
Establecer una escala clara de z-index para toda la aplicación para evitar conflictos:

- z-index 90-100: Elementos críticos a nivel global (modales de emergencia)
- z-index 50-89: Navegación principal y elementos de UI fijos
- z-index 20-49: Tooltips, menús desplegables y elementos temporales
- z-index 1-19: Elementos que necesitan superponer elementos cercanos
- z-index auto: Elementos normales que siguen el flujo de la página
