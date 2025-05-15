# Guía de Desarrollo

## Configuración inicial

### Prerrequisitos
- Node.js 18+ (para compatibilidad)
- Bun (gestor de paquetes recomendado)

### Instalación

```bash
# Instalar Bun si no lo tienes
curl -fsSL https://bun.sh/install | bash

# Clonar repositorio
git clone https://github.com/Fr4n0m/professional-pf

# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev
```

## Gestor de paquetes

Este proyecto usa **Bun** por su velocidad superior. Si encuentras archivos de npm:

```bash
# Eliminar archivos de npm (opcional)
rm package-lock.json

# Usar solo Bun
bun install
bun run dev
```

## Flujo de desarrollo

### Crear nuevos componentes

1. Crear archivo en la carpeta apropiada
2. Usar TypeScript para props cuando sea posible
3. Importar con alias (`@components`, `@utils`, etc.)

Ejemplo:

```astro
---
// src/components/ui/NewComponent.astro
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class={variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}>
  <h3>{title}</h3>
</div>
```

### Añadir nuevas páginas

Para mantener el sistema de internacionalización manual:

1. Crear página en `/src/pages` (versión española)
2. Crear misma página en `/src/pages/en` (versión inglesa)
3. Actualizar navegación en ambos idiomas si es necesario

### Traducciones

1. Añadir nuevas claves a `/src/translations/es.json`
2. Añadir mismas claves a `/src/translations/en.json`
3. Usar en componentes:

```astro
---
const lang = Astro.request.url.includes('/en') ? 'en' : 'es';
const translations = textsJson[lang];
---

<h1>{translations.tuNuevaClave}</h1>
```

## Convenciones de código

### Nombrado
- Componentes: PascalCase (`MyComponent.astro`)
- Archivos: camelCase o kebab-case
- Constantes: UPPER_SNAKE_CASE

### Importaciones
```astro
// 1. Imports de Astro
import Layout from '@layouts/Layout.astro';

// 2. Components
import Component from '@components/Component.astro';

// 3. Icons
import Icon from '@icons/Icon.astro';

// 4. Utilities
import { util } from '@utils/util';

// 5. Types
import type { Type } from '../types/type';
```

## Testing

Actualmente no hay tests configurados. Para añadir tests con Bun:

```bash
# Instalar Bun test
bun add -d @types/bun

# Crear archivo de test
touch src/components/__tests__/Component.test.ts

# Ejecutar tests
bun test
```

## Build y deployment

### Build local
```bash
bun run build
bun run preview
```

### Deployment en Vercel

El proyecto está configurado para Vercel:

1. Push a la rama main
2. Vercel detecta automáticamente Astro
3. Build y deploy automático

Configuración en `vercel.json` (si necesitas personalizar):

```json
{
  "buildCommand": "bun run build",
  "devCommand": "bun run dev",
  "installCommand": "bun install"
}
```

## Scripts disponibles

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "format": "prettier --write .",
    "lint": "eslint --fix . --ext .js,.jsx"
  }
}
```

Todos se ejecutan con `bun run [script]`.

## Optimización

### Imágenes
- Usar formato WebP
- Optimizar tamaño antes de subir
- Usar lazy loading cuando sea apropiado

### Performance con Bun
- Bun es ~3x más rápido que npm para instalar dependencias
- Hot reload más rápido en desarrollo
- Build times reducidos

## Troubleshooting

### Errores comunes

1. **Error de importación**: Verificar alias en `tsconfig.json`
2. **Estilos no aplicados**: Verificar clases de Tailwind estén incluidas
3. **Traducción faltante**: Revisar ambos archivos JSON
4. **Bun no funciona**: Asegúrate de tener la última versión

### Limpiar caché

```bash
# Limpiar caché de Bun
bun pm cache rm

# Reinstalar dependencias
rm -rf node_modules
bun install
```

### Debug
```astro
---
// Debug en desarrollo
console.log('Props:', Astro.props);
console.log('URL:', Astro.request.url);
---
```
