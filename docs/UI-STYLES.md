# Guía de Diseño y Estilo UI

## Estilo Apple/macOS

Este proyecto utiliza una interfaz de usuario inspirada en el estilo visual de Apple/macOS. Esta decisión de diseño es deliberada y debe mantenerse en todas las actualizaciones futuras. No se deben cambiar los estilos de los componentes principales sin aprobación explícita.

## Componentes con Estilo Apple

### ThemeToggle

El selector de tema (`ThemeToggle.astro`) implementa un diseño similar al de macOS con:

- **Iconos SF Symbols**: Utiliza iconos inspirados en el sistema SF Symbols de Apple
- **Menú Desplegable**: Presenta un menú redondeado con efecto de escala y transición suave
- **Opciones de Tema**: Claro, Oscuro y Sistema, con indicador de selección
- **Comportamiento Interactivo**: Efectos hover y active consistentes con el estilo Apple

Este componente está completamente internacionalizado y no debe modificarse su estilo visual.

### Control Center / Panel de Accesibilidad

El panel de accesibilidad (`AccessibilityPanel.astro`) emula el Centro de Control de macOS:

- **Iconos de Interruptores**: Diseño específico para controles de interruptor estilo Apple
- **Efectos de Transición**: Animaciones suaves en apertura/cierre
- **Switches Toggle**: Interruptores con animación similar a iOS/macOS
- **Agrupamiento de Funciones**: Disposición de controles en grupos lógicos

### Iconos

Todos los iconos utilizados siguen el estilo de SF Symbols de Apple:

- **Trazo**: 2-2.5px para mantener coherencia visual
- **Esquinas Redondeadas**: Bordes con radio consistente
- **Simplicidad**: Diseños minimalistas y claros
- **Proporción**: Dimensiones equilibradas

## Directrices para Futuros Desarrollos

1. **Mantener Consistencia**: Cualquier nuevo componente debe seguir las directrices de estilo Apple
2. **No Cambiar Iconos**: Los iconos existentes no deben modificarse sin aprobación
3. **Respetar Transiciones**: Mantener las animaciones y efectos de transición consistentes
4. **Preservar Interactividad**: Los patrones de interacción (hover, focus, active) deben seguir el patrón establecido

## Ejemplos de Estilos a Preservar

### Menús Desplegables
```css
/* Estilo Apple para menús */
border-radius: 12px;
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(12px);
```

### Iconos
```css
/* Estilo Apple para iconos */
stroke-width: 2.2;
stroke-linecap: round;
stroke-linejoin: round;
```

### Efectos Hover
```css
/* Efecto hover estilo Apple */
transform: scale(1.05);
transition: transform 0.2s ease;
```

## Notas adicionales

- El cambio de estos estilos podría afectar negativamente la experiencia del usuario y la coherencia visual del proyecto
- Para cualquier modificación necesaria, consultar primero las directrices de Diseño de Interfaz Humana de Apple como referencia
- Cualquier cambio sustancial debe documentarse en este archivo
