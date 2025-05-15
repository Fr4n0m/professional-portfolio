# Guía de Implementación: GSAP y Motion

Esta guía explica cómo implementar y combinar GSAP y Motion en el proyecto Professional-PF.

## Índice

1. [Resumen de Implementación](#resumen-de-implementación)
2. [Cuándo usar GSAP](#cuándo-usar-gsap)
3. [Cuándo usar Motion](#cuándo-usar-motion)
4. [Integración en Componentes Astro](#integración-en-componentes-astro)
5. [Ejemplos de Implementación](#ejemplos-de-implementación)
6. [Consideraciones de Accesibilidad](#consideraciones-de-accesibilidad)
7. [Rendimiento](#rendimiento)

## Resumen de Implementación

La estrategia recomendada es utilizar ambas bibliotecas según sus fortalezas:

- **GSAP**: Para animaciones complejas a nivel de página, efectos especiales, timelines y scroll-driven animations.
- **Motion**: Para componentes React, animaciones vinculadas al estado de la UI y donde la accesibilidad es crucial.

Esta implementación aprovecha lo mejor de ambas bibliotecas, asegurando un equilibrio entre rendimiento, flexibilidad y accesibilidad.

## Cuándo usar GSAP

GSAP es ideal para:

1. **Animaciones complejas de página**: Cuando necesites secuencias elaboradas con múltiples elementos.
2. **Efectos de scroll**: ScrollTrigger ofrece control preciso para animaciones basadas en scroll.
3. **Animaciones de texto**: Para efectos de escritura, partición de caracteres, etc.
4. **Animaciones no vinculadas a componentes React**: Para elementos del DOM general.
5. **Animaciones de alto rendimiento**: Para secuencias que requieren el máximo rendimiento.

## Cuándo usar Motion

Motion es ideal para:

1. **Componentes React**: Para animaciones declarativas dentro de componentes React.
2. **Animaciones vinculadas al estado**: Cuando las animaciones dependen del estado del componente.
3. **Interacciones de usuario**: Para hover, tap, focus y otras interacciones.
4. **Accesibilidad prioritaria**: Motion respeta automáticamente `prefers-reduced-motion`.
5. **Animaciones declarativas**: Cuando prefieres un enfoque declarativo sobre el imperativo.

## Integración en Componentes Astro

### Componentes GSAP en Astro

Para componentes que usan GSAP en Astro:

```astro
---
// Mi-Componente.astro
---

<div class="mi-elemento gsap-fade-in">
  Contenido animado con GSAP
</div>

<script>
  import { gsap } from 'gsap';
  import { initGlobalAnimations } from '../utils/gsapConfig';
  
  document.addEventListener('DOMContentLoaded', () => {
    // Inicializa animaciones globales o específicas
    initGlobalAnimations();
    
    // O animaciones específicas para este componente
    gsap.from('.mi-elemento-específico', {
      opacity: 0,
      y: 30,
      duration: 0.8
    });
  });
</script>
```

### Componentes Motion en Astro

Para componentes React con Motion, crea:

1. Un componente React con Motion:

```tsx
// MiComponenteAnimado.tsx
import { motion } from 'motion';

export default function MiComponenteAnimado() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Contenido animado con Motion
    </motion.div>
  );
}
```

2. Un wrapper Astro:

```astro
---
// MiComponenteAnimadoWrapper.astro
import MiComponenteAnimado from './MiComponenteAnimado';
---

<MiComponenteAnimado client:visible />
```

### Componentes que combinan ambos

Cuando necesites combinar ambos:

1. Usa GSAP para animaciones complejas
2. Usa Motion para elementos interactivos dentro del componente
3. Coordina ambas animaciones con temporizaciones apropiadas

Ejemplo: Ver `HeroAnimation.tsx` y `HeroAnimationWrapper.astro`.

## Ejemplos de Implementación

### Ejemplo 1: Página 404

La página 404 es un ejemplo de combinación efectiva:

- **GSAP**: Anima el texto "404" con SplitText y las partículas de fondo.
- **Motion**: Anima el robot y las partículas alrededor del robot.

### Ejemplo 2: HeroAnimation

El componente `HeroAnimation` combina:

- **GSAP**: Anima el efecto de escritura del título.
- **Motion**: Anima los botones y elementos decorativos con motion variants.

### Ejemplo 3: AnimatedButton

El componente `AnimatedButton` usa Motion para crear un botón interactivo con:

- Animaciones de hover y tap
- Efectos de onda al hacer hover
- Animación del icono

## Consideraciones de Accesibilidad

### Configuración en GSAP

Para respetar `prefers-reduced-motion` en GSAP:

```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Prácticamente deshabilita o simplifica las animaciones
  gsap.globalTimeline.timeScale(0.0001);
  // O reduce la intensidad de las animaciones
  gsap.defaults({ duration: 0.1, ease: "none" });
}
```

### Con Motion

Motion respeta automáticamente esta preferencia. Para casos especiales:

```javascript
import { motion, useReducedMotion } from 'motion';

function MiComponente() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div 
      animate={{ 
        x: shouldReduceMotion ? 0 : 100,
        opacity: 1 // Las transiciones de opacity se mantienen para accesibilidad
      }} 
    />
  );
}
```

## Rendimiento

Consideraciones para mantener el rendimiento:

1. **Usa selectores de clase específicos** en vez de querySelectorAll genéricos.
2. **Anima propiedades transform y opacity** en lugar de propiedades que causan reflow.
3. **Usa `will-change` con moderación** solo para elementos con animaciones intensivas.
4. **Desactiva animaciones complejas en dispositivos móviles** o de bajo rendimiento.
5. **Implementa lazy-loading** para componentes con animaciones pesadas.

---

Documetación actualizada: Mayo 2025
