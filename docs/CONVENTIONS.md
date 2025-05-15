# Convenciones de Código

## TypeScript

### Tipos e Interfaces

```typescript
// Usar interface para objetos
interface User {
  id: number;
  name: string;
  email?: string; // Opcional
}

// Usar type para unions
type Theme = 'light' | 'dark' | 'system';

// Exportar tipos reutilizables
export type { User, Theme };
```

### Componentes

```typescript
// Props con interface
interface Props {
  title: string;
  items: string[];
  onSelect?: (item: string) => void;
}

// Componente tipado
const Component: React.FC<Props> = ({ title, items, onSelect }) => {
  // ...
};
```

## Astro

### Estructura de componente

```astro
---
// 1. Imports
import Component from './Component.astro';
import { helper } from '@utils/helper';

// 2. Props interface
interface Props {
  title: string;
  showIcon?: boolean;
}

// 3. Props destructuring
const { title, showIcon = false } = Astro.props;

// 4. Lógica del componente
const processedTitle = helper(title);
---

<!-- 5. Template -->
<div class="component">
  <h2>{processedTitle}</h2>
  {showIcon && <Icon />}
</div>

<!-- 6. Estilos -->
<style>
  .component {
    @apply p-4 bg-white;
  }
</style>

<!-- 7. Scripts (si necesario) -->
<script>
  // Client-side logic
</script>
```

## Tailwind CSS

### Clases utility-first

```html
<!-- Preferir -->
<div class="flex items-center justify-between p-4 bg-gray-100">

<!-- Evitar -->
<div class="container">
```

### Clases personalizadas

```css
/* Solo cuando sea necesario */
.special-gradient {
  background: linear-gradient(45deg, #000, #fff);
}
```

### Responsive design

```html
<!-- Mobile-first -->
<div class="text-sm md:text-base lg:text-lg">
```

## Estructura de archivos

### Nombres de archivo

- Componentes: `PascalCase.astro`
- Utilidades: `camelCase.ts`
- Estilos: `kebab-case.css`
- Páginas: `kebab-case.astro`

### Imports

```typescript
// 1. Externos
import React from 'react';

// 2. Aliases
import Layout from '@layouts/Layout.astro';
import { helper } from '@utils/helper';

// 3. Relativos
import Component from './Component.astro';

// 4. Tipos
import type { User } from '@types/user';
```

## Git

### Commits

```bash
# Formato
tipo: descripción breve

# Ejemplos
feat: agregar selector de idioma
fix: corregir navegación mobile
docs: actualizar README
style: formatear código
refactor: extraer lógica de theme
```

### Branches

```bash
# Feature
feature/nombre-descriptivo

# Fix
fix/descripcion-del-bug

# Docs
docs/actualizar-arquitectura
```
