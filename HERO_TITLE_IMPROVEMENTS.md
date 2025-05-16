# Mejoras en el título "Hey, soy Fran" y su animación

## Cambios realizados

### 1. Aumento del tamaño del texto
Se ha aumentado el tamaño del título "Hey, soy Fran" para darle mayor protagonismo:

```diff
- fontSize: '2.5rem',
+ fontSize: '3.5rem', // Aumentado de 2.5rem a 3.5rem
```

### 2. Animación instantánea al pasar el ratón
Se ha optimizado la reactividad de la animación para que sea prácticamente instantánea:

```diff
// Transición al pasar el ratón por encima (reducida a 0.02s - prácticamente instantánea)
- char.style.transition = 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), font-weight 0.15s ease-out';
+ char.style.transition = 'transform 0.02s cubic-bezier(0, 0, 0.1, 1), font-weight 0.02s linear';

// Transición al alejar el ratón (extremadamente rápida)
- char.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), font-weight 0.2s ease-out';
+ char.style.transition = 'transform 0.03s cubic-bezier(0, 0, 0.1, 1), font-weight 0.03s linear';
```

### 3. Curva de aceleración ultra rápida
Se ha implementado una curva de aceleración lineal para garantizar la máxima velocidad:

```diff
- cubic-bezier(0.34, 1.56, 0.64, 1)
+ cubic-bezier(0, 0, 0.1, 1) y linear
```

### 4. Efecto visual más pronunciado para visibilidad instantánea
Se ha aumentado significativamente la intensidad del efecto para que sea más visible incluso con la velocidad extrema:

```diff
- char.style.transform = `scale(${1 + intensity * 0.25})`;
+ char.style.transform = `scale(${1 + intensity * 0.4})`;

// Mayor cambio en el peso de la fuente
- char.style.fontWeight = String(Math.min(800, 400 + intensity * 400));
+ char.style.fontWeight = String(Math.min(900, 400 + intensity * 500));

// Cálculo de intensidad extremadamente agresivo 
- const intensity = 1 - (distance / radius);
+ const intensity = Math.pow(1 - (distance / radius), 0.5);
```

### 5. Radio de influencia mínimo para reacción inmediata
Se ha reducido al mínimo el radio de influencia para una reacción ultralocal e inmediata:

```diff
- const radius = 120;
+ const radius = 60;
```

### 6. Ajuste de altura de contenedores
Se han ajustado las alturas mínimas de los contenedores para acomodar el texto más grande:

```diff
// En HeroTitle.astro
- className="md:min-h-[75px] lg:min-h-[90px]"
+ className="md:min-h-[100px] lg:min-h-[120px]"

// En TextPressureWrapper.astro
- min-height: 70px;
+ min-height: 90px;
```

## Resultado
El título "Hey, soy Fran" ahora es más grande y prominente, con una animación ultra rápida (prácticamente sin retardo perceptible) que responde de forma instantánea al movimiento del cursor. Esto transmite una sensación de velocidad y rendimiento excepcional en la web, manteniendo el efecto visual pero con una respuesta inmediata que mejora significativamente la experiencia de usuario.
