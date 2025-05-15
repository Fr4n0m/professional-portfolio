# Corrección del problema de navegación Home en el Header

## Problema identificado
La opción "Home" o "Inicio" del header no funcionaba correctamente en ningún idioma porque había una discrepancia entre los IDs de las secciones y los labels en los archivos de traducción.

### Detalles técnicos:
- En `HomePage.astro`, la primera sección tiene el ID `main`
- En los archivos de traducción, se estaba usando `#inicio` o `#home` como URL
- Los scripts de navegación intentaban buscar secciones que no existían

## Solución implementada

### 1. Script de corrección automatizada
He creado un script en `/scripts/fix-home-section-ids.js` que:
- Actualiza automáticamente todos los archivos de traducción en todos los idiomas
- Cambia el label de `inicio`/`home` a `main`
- Corrige las URLs para usar `#main` en lugar de `#inicio` o `#home`

### 2. Actualización de componentes de navegación
He actualizado los componentes `DesktopNav.astro` y `MobileNav.astro`:
- Eliminado el código específico que manejaba 'main' como caso especial
- Simplificado la lógica de navegación para que funcione consistentemente con todos los IDs de sección

## Pasos para aplicar la corrección

1. Ejecuta el script de corrección desde la raíz del proyecto:
   ```bash
   cd /Users/fran11799/Documents/professional-pf
   node scripts/fix-home-section-ids.js
   ```

2. Verifica que todos los archivos de traducción han sido actualizados correctamente

3. Reinicia el servidor de desarrollo para que los cambios surtan efecto

## Archivos modificados
- `/src/components/header/DesktopNav.astro`
- `/src/components/header/MobileNav.astro`
- Todos los archivos `/src/translations/*/header-items.json` (mediante el script)

## Resultado esperado
Después de aplicar estos cambios, la opción "Home" en el header debería funcionar correctamente en todos los idiomas, llevando los usuarios a la sección principal de la página con scroll suave.
