# Sistema de Temas

## Implementación

El proyecto soporta temas claro y oscuro, con detección automática de preferencias del sistema.

### Componentes principales

#### ThemeToggle.astro
Toggle visual para cambiar entre temas.

```astro
<ThemeToggle />
```

#### Scripts de tema
El archivo `/src/scripts/theme.js` gestiona:
- Detección de preferencia del sistema
- Persistencia en localStorage
- Cambio dinámico de tema

### Funcionamiento

1. **Detección inicial**: Se detecta la preferencia del sistema o valor guardado
2. **Aplicación**: Se añade/quita la clase `dark` al `<html>`
3. **Persistencia**: Se guarda la elección en localStorage

### CSS con temas

Tailwind CSS gestiona los estilos temáticos:

```css
/* Modo claro por defecto */
.text-gray-700

/* Modo oscuro con prefijo dark: */
.dark:text-white
```

### Ejemplo de uso

```astro
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">
    Título adaptativo
  </h1>
</div>
```

### Estados del tema

- `light`: Tema claro
- `dark`: Tema oscuro  
- `system`: Seguir preferencia del sistema

### Personalización

Para personalizar los colores del tema:

1. Editar `tailwind.config.mjs`
2. Actualizar clases en `commonClasses.ts`
3. Aplicar nuevas clases en componentes
