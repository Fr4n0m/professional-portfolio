# Guía de Componentes

## Componentes Principales

### Layout.astro
Layout principal que envuelve todas las páginas. Incluye:
- Meta tags
- Header
- Footer
- Gestión de tema
- Inyección de traducciones

### HomePage.astro
Componente que renderiza la página principal con:
- Hero section
- Skills
- Experience
- Projects showcase

### Header.astro
Navegación principal con:
- Logo
- Links de navegación
- Theme toggle
- Language toggle

## Componentes UI

### Badge.astro
Badge animado con efecto pulsante. Usado para destacar información.

```astro
<Badge>Texto destacado</Badge>
```

### LogoBadge.astro
Badge animado con logo de empresa y colores corporativos. Totalmente personalizable.

```astro
<LogoBadge size="md" variant="primary" company="dimap">Texto destacado</LogoBadge>
```

Opciones disponibles:
- `size`: "sm" | "md" | "lg" (tamaño del badge, predeterminado: "md")
- `variant`: "primary" | "secondary" (variante de color, predeterminado: "primary")
- `company`: "dimap" | "other" (empresa, controla colores y logo, predeterminado: "dimap")

### Tag.astro
Etiqueta para mostrar tecnologías con iconos.

```astro
<Tag name="React" class="size-4" icon={ReactIcon} />
```

### LinkButton.astro
Botón estilizado para enlaces.

```astro
<LinkButton href="https://github.com">
  <GithubIcon />
  Ver código
</LinkButton>
```

### SectionContainer.astro
Contenedor para secciones con espaciado y ancho máximo consistente.

```astro
<SectionContainer id="skills" class="custom-class">
  <!-- Contenido -->
</SectionContainer>
```

## Componentes Interactivos (React)

### Carousel
Carrusel de imágenes con navegación.

```jsx
<Carousel client:load images={imageArray} />
```

### KeyboardManager
Gestor de atajos de teclado para navegación rápida.

### ProjectsDescription
Componente para descripciones expandibles de proyectos.

## Sistema de Estilos

### commonClasses.ts
Clases CSS reutilizables organizadas por categoría:

```typescript
commonClasses.heading.h1    // Títulos principales
commonClasses.button.primary // Botones primarios
commonClasses.iconSize.small // Tamaños de iconos
```

## Patrones de Uso

### Importaciones con alias
```astro
import Component from '@components/Component.astro';
import Icon from '@icons/Icon.astro';
import { util } from '@utils/util';
```

### Props typing
```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default" } = Astro.props;
---
```
