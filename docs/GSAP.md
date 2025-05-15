# GSAP (GreenSock Animation Platform) en Professional-PF

Este documento explica cómo se ha implementado GSAP en nuestro portfolio profesional y cómo utilizarlo para futuras animaciones.

## Índice

1. [¿Qué es GSAP?](#qué-es-gsap)
2. [Instalación](#instalación)
3. [Estructura de archivos](#estructura-de-archivos)
4. [Uso básico](#uso-básico)
5. [Animaciones implementadas](#animaciones-implementadas)
6. [Plugins](#plugins)
7. [Mejores prácticas](#mejores-prácticas)
8. [Resolución de problemas](#resolución-de-problemas)
9. [Recursos adicionales](#recursos-adicionales)

## ¿Qué es GSAP?

GSAP (GreenSock Animation Platform) es una biblioteca de animación JavaScript de alto rendimiento que permite crear animaciones fluidas y profesionales para la web. Desde 2023, gracias al patrocinio de Webflow, GSAP es completamente gratuito para usar, incluyendo todos sus plugins.

Ventajas principales:
- **Rendimiento superior**: Mucho más eficiente que las alternativas basadas en CSS
- **Compatibilidad entre navegadores**: Funciona de manera consistente en todos los navegadores modernos
- **API robusta y flexible**: Amplia gama de opciones y métodos
- **Ecosistema de plugins**: ScrollTrigger, TextPlugin, SplitText, etc.

## Instalación

GSAP se ha instalado en el proyecto mediante Bun:

```bash
bun add gsap
```

Para verificar la instalación, puedes comprobar el archivo `package.json` donde debería aparecer como dependencia:

```json
"dependencies": {
  // otras dependencias...
  "gsap": "^3.12.5",
  // otras dependencias...
}
```

## Estructura de archivos

En nuestro proyecto, GSAP se estructura de la siguiente manera:

```
src/
├── utils/
│   └── gsapConfig.js       # Configuración central y utilidades de GSAP
├── components/
│   └── sections/
│       └── Hero.astro      # Ejemplo de implementación (efecto typewriter)
└── pages/
    └── 404.astro           # Ejemplo de página con animaciones complejas
```

### gsapConfig.js

El archivo `gsapConfig.js` centraliza toda la configuración y utilidades comunes de GSAP para el proyecto. Contiene:

- Importación y registro de plugins
- Configuraciones predefinidas para animaciones comunes
- Funciones de utilidad para inicializar animaciones

## Uso básico

### Importar GSAP

```javascript
import { gsap } from 'gsap';

// Si necesitas plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Animación simple

```javascript
// Animar un elemento
gsap.to(".mi-elemento", {
  opacity: 0,    // valor final
  y: 50,         // mover 50px en eje Y
  duration: 1,   // duración en segundos
  ease: "power2.out" // función de aceleración
});

// Animar desde un estado inicial
gsap.from(".mi-elemento", {
  opacity: 0,
  y: -50,
  duration: 1
});
```

### Timeline para secuenciar animaciones

```javascript
// Crear una timeline
const tl = gsap.timeline();

// Añadir animaciones secuenciales
tl.to(".elemento1", { opacity: 1, duration: 0.5 })
  .to(".elemento2", { x: 100, duration: 0.5 }, "+=0.2")  // con retraso
  .to(".elemento3", { scale: 1.5, duration: 0.5 }, "<");  // simultáneo con anterior
```

## Animaciones implementadas

### Efecto de escritura (typewriter)

Implementado en el componente Hero para animar el texto "Hey, soy Fran":

```javascript
// Desde Hero.astro
gsap.to(textElement, {
  duration: 2.5,
  text: textToType,  // Usando TextPlugin
  ease: "none",
  delay: 0.5
});
```

### Animaciones de la página 404

La página 404 incluye:

1. **Texto partido**: Animación de los caracteres "404" usando SplitText
2. **Partículas animadas**: Elementos flotantes en el fondo
3. **Robot animado**: Oscilación suave del robot
4. **Stagger elements**: Elementos que aparecen secuencialmente

## Plugins

El proyecto utiliza los siguientes plugins de GSAP:

### TextPlugin
Utilizado para animar texto carácter por carácter, como en efecto typewriter:

```javascript
gsap.registerPlugin(TextPlugin);
gsap.to(element, { text: "Texto final", duration: 2 });
```

### ScrollTrigger
Para animaciones basadas en scroll:

```javascript
gsap.registerPlugin(ScrollTrigger);
gsap.from(".elemento", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".elemento",
    start: "top bottom",
    end: "top center",
    scrub: true
  }
});
```

### SplitText
Para dividir texto en caracteres, palabras o líneas y animarlas individualmente:

```javascript
gsap.registerPlugin(SplitText);
const split = new SplitText(".texto", { type: "chars" });
gsap.from(split.chars, {
  opacity: 0,
  stagger: 0.05,
  duration: 0.5
});
```

## Mejores prácticas

1. **Rendimiento**:
   - Siempre anima `transform` y `opacity` en lugar de `top`, `left`, `margin` para mejor rendimiento
   - Evita animar demasiados elementos simultáneamente
   - Usa `will-change` CSS para elementos con animaciones complejas

2. **Organización**:
   - Centraliza configuraciones en `gsapConfig.js`
   - Usa selectores de clases específicas para animaciones (como `.gsap-fade-in`)
   - Utiliza timelines para secuencias complejas

3. **Responsive**:
   - Ajusta los valores de animación según el tamaño de pantalla
   - Considera desactivar algunas animaciones en móvil para mejorar rendimiento

4. **Limpieza**:
   - Elimina animaciones cuando los componentes se desmontan para evitar fugas de memoria:
   ```javascript
   return () => {
     gsap.killTweensOf(elemento);
   };
   ```

## Resolución de problemas

### Animaciones no funcionan

1. Verifica que GSAP esté correctamente importado
2. Comprueba que los selectores existan en el DOM
3. Los plugins deben registrarse antes de usarlos
4. Revisa la consola para errores

### Rendimiento lento

1. Reduce el número de elementos animados
2. Simplifica las propiedades animadas (usa transform/opacity)
3. Usa `gsap.set()` para estados iniciales en lugar de animaciones
4. Considera desactivar animaciones en dispositivos de bajo rendimiento

## Recursos adicionales

- [Documentación oficial de GSAP](https://gsap.com/docs/v3/)
- [Cheatsheet de GSAP](https://gsap.com/resources/getting-started/Cheatsheet)
- [Foro de GSAP](https://gsap.com/community/forums/)
- [Ejemplos interactivos](https://gsap.com/resources/demos-videos/)

---

Este documento fue creado para el proyecto Professional-PF. Última actualización: Mayo 2025.
