# Animaciones con GSAP y Motion en Professional-PF

Este documento explica cómo se han implementado y cómo usar animaciones con GSAP y Motion en el proyecto Professional-PF.

## Índice

1. [Introducción a las bibliotecas](#introducción)
2. [GSAP](#gsap)
3. [Motion](#motion)
4. [Compatibilidad entre ambas](#compatibilidad)
5. [Componentes y ejemplos](#componentes-y-ejemplos)
6. [Mejores prácticas](#mejores-prácticas)
7. [Accesibilidad](#accesibilidad)

## Introducción

El proyecto utiliza dos bibliotecas principales para animaciones:

- **GSAP** (GreenSock Animation Platform): Biblioteca robusta y de alto rendimiento para animaciones complejas, secuencias y efectos especiales.
- **Motion** (nueva versión de Framer Motion): Biblioteca de animaciones declarativas para React con excelentes fallbacks de accesibilidad.

## GSAP

### Casos de uso recomendados

GSAP es ideal para:

- Animaciones complejas con secuencias (timelines)
- Efectos visuales elaborados
- Animaciones scroll-driven con ScrollTrigger
- Manipulación de SVG avanzada
- Rendimiento optimizado en animaciones intensivas

### Configuración

El archivo central de configuración es `src/utils/gsapConfig.js`, que contiene:

- Configuraciones predefinidas para animaciones comunes
- Funciones de utilidad para inicializar animaciones
- Registro de plugins

### Plugins utilizados

- **TextPlugin**: Para animar texto (efectos de escritura)
- **ScrollTrigger**: Para animar basado en posición de scroll
- **SplitText**: Para dividir texto y animar caracteres individualmente

### Ejemplo básico

```javascript
import { gsap } from 'gsap';

// Animación básica
gsap.to('.elemento', {
  opacity: 0, 
  y: 50, 
  duration: 1
});

// Timeline
const tl = gsap.timeline();
tl.from('.elemento1', { opacity: 0, duration: 0.5 })
  .from('.elemento2', { x: -50, duration: 0.5 }, "-=0.3");
```

## Motion

### Casos de uso recomendados

Motion es ideal para:

- Componentes React con animaciones declarativas
- Animaciones basadas en estado
- Efectos de entrada/salida
- Animaciones con viewport detection (inView)
- Casos donde la accesibilidad es prioritaria

### Compatibilidad con prefers-reduced-motion

Una ventaja clave de Motion es su excelente manejo de la accesibilidad. Automáticamente respeta `prefers-reduced-motion` sin configuración adicional.

### Ejemplo básico

```jsx
import { animate, motion } from 'motion';

// Componente declarativo
function AnimatedComponent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Contenido animado
    </motion.div>
  );
}

// API imperativa
animate('.elemento', 
  { opacity: [0, 1], y: [20, 0] }, 
  { duration: 0.5 }
);
```

## Compatibilidad

GSAP y Motion son completamente compatibles y pueden usarse juntos en el mismo proyecto. Cada uno tiene sus puntos fuertes:

| Característica | GSAP | Motion |
|----------------|------|--------|
| Rendimiento | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Facilidad de uso | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Secuencias complejas | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Accesibilidad | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Animaciones declarativas | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Animaciones basadas en scroll | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

### Cuándo usar cada una

- **GSAP**: Para animaciones complejas de página completa, secuencias, efectos especiales y scroll-driven animations.
- **Motion**: Para componentes React, animaciones basadas en estado y cuando la accesibilidad es crucial.

## Componentes y ejemplos

### TextPressure

El componente `TextPressure` es un ejemplo de componente React que crea un efecto interactivo de texto. Reemplaza la animación de escritura del texto "Hey, soy Fran" con un efecto que responde al movimiento del cursor.

```jsx
// Implementado en src/components/TextPressure.tsx
<TextPressureWrapper 
  text="Hey, soy Fran" 
  darkMode={isDarkMode} 
/>
```

### Página 404

La página 404 es un ejemplo de cómo usar ambas bibliotecas juntas:

- **GSAP** para la animación de los caracteres "404" y las partículas del fondo
- **Motion** para la animación del robot y las partículas alrededor del robot

## Mejores prácticas

1. **Separación de responsabilidades**:
   - Usa GSAP para animaciones de página, scroll y efectos complejos
   - Usa Motion para componentes React y animaciones relacionadas con la UI

2. **Rendimiento**:
   - Anima `transform` y `opacity` en lugar de propiedades que causan reflow
   - Usa `will-change` con moderación
   - Configura `force3D: true` en GSAP para animaciones 3D hardware-accelerated

3. **Secuencias complejas**: 
   - Usa GSAP Timelines para secuencias que requieren sincronización precisa
   - Para animaciones basadas en interacciones de usuario, considera Motion

4. **Modularidad**:
   - Crea configuraciones reutilizables de animaciones en `gsapConfig.js`
   - Desarrolla componentes Motion reutilizables

## Accesibilidad

Ambas bibliotecas deben respetar la preferencia de reducción de movimiento del usuario:

### Configuración en GSAP

```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(0.0001); // Prácticamente congelamos las animaciones
}
```

### Con Motion

Motion respeta automáticamente este ajuste. Para casos especiales:

```javascript
import { motion, useReducedMotion } from 'motion';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div animate={{ x: shouldReduceMotion ? 0 : 100 }} />
  );
}
```

## Conclusión

El uso combinado de GSAP y Motion proporciona flexibilidad para implementar prácticamente cualquier tipo de animación, manteniendo un buen rendimiento y accesibilidad. La elección de una biblioteca u otra dependerá del caso de uso específico.

---

Documentación actualizada: Mayo 2025
