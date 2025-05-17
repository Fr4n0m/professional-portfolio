# Guía para implementar contenido que respeta la privacidad

Esta guía explica cómo implementar correctamente contenido que requiere consentimiento de cookies en tu aplicación.

## Clases CSS para elementos que requieren consentimiento

Para identificar elementos que deben mostrarse o cargarse solo cuando el usuario ha dado su consentimiento, usa las siguientes clases CSS:

1. **Contenido analítico**:
   - `.analytical-content` - Para elementos relacionados con analíticas
   - `.analytical-content.requires-consent` - Para bloquear por defecto hasta consentimiento

2. **Contenido funcional y widgets de redes sociales**:
   - `.functional-content` o `.social-widget` - Para elementos funcionales
   - `.functional-content.requires-consent` o `.social-widget.requires-consent` - Para bloquear por defecto 

3. **Contenido publicitario**:
   - `.advertising-content` - Para elementos relacionados con publicidad
   - `.advertising-content.requires-consent` - Para bloquear por defecto

## Implementación de iframes con carga diferida

Los iframes para servicios externos que requieren consentimiento deben implementarse de esta forma:

```html
<!-- Ejemplo de widget para redes sociales -->
<div class="social-widget requires-consent">
  <iframe 
    data-src="https://platform.twitter.com/widgets/tweet_button.html" 
    title="Twitter Share Button"
    height="28"
    width="73"
  ></iframe>
  <div class="consent-message">
    Se requiere su consentimiento para cargar este contenido
  </div>
</div>

<!-- Ejemplo de mapa que requiere consentimiento funcional -->
<div class="functional-content requires-consent">
  <iframe 
    data-src="https://www.google.com/maps/embed?pb=..." 
    title="Google Maps"
    height="450"
    width="600"
  ></iframe>
  <div class="consent-message">
    Se requiere su consentimiento para cargar este mapa
  </div>
</div>

<!-- Ejemplo de contenido analítico -->
<div class="analytical-content requires-consent">
  <div class="estadisticas-visitas">
    <!-- Contenido que solo se carga con consentimiento analítico -->
  </div>
  <div class="consent-message">
    Se requiere su consentimiento para cargar estas estadísticas
  </div>
</div>
```

## Puntos importantes:

1. **Usar `data-src` en lugar de `src`** para iframes: Esto evita que se carguen automáticamente antes del consentimiento.

2. **Incluir la clase `.requires-consent`**: Esto bloquea visualmente el contenido y muestra un mensaje informativo.

3. **Incluir un mensaje de consentimiento**: Para informar al usuario por qué se bloquea el contenido.

## Verificar consentimiento en JavaScript

Para verificar programáticamente si existe consentimiento para una categoría específica:

```javascript
import { hasConsent } from '@utils/cookieUtils';

// Verificar si hay consentimiento analítico
if (hasConsent('analytical')) {
  // Cargar contenido analítico
}

// Verificar si hay consentimiento funcional
if (hasConsent('functional')) {
  // Habilitar funcionalidades sociales
}

// Verificar si hay consentimiento publicitario
if (hasConsent('advertising')) {
  // Cargar scripts de publicidad
}
```

## Registrar eventos de consentimiento

Para registrar eventos de consentimiento (útil para auditorías legales):

```javascript
import { logConsentEvent } from '@utils/cookieUtils';

// Registrar un evento de consentimiento personalizado
logConsentEvent('user_updated_preferences');
```

## Estilos CSS

Los elementos bloqueados por falta de consentimiento tienen estilos predefinidos para mostrar un mensaje informativo. Estos estilos ya están incluidos en el componente `CookieBanner.astro`.

## Endpoints de API

El endpoint `/api/consent-log` está disponible para registrar eventos de consentimiento para fines de auditoría.
