# Guía de Migración a i18n Multilingüe

## 📋 Checklist de Migración

### 1. Preparación

- [ ] Hacer backup del proyecto actual
- [ ] Instalar dependencias si es necesario

### 2. Configuración base

- [ ] Actualizar `astro.config.mjs` con configuración i18n
- [ ] Crear carpeta `/src/i18n/`
- [ ] Añadir `config.ts` y `translations.ts`

### 3. Actualizar componentes

#### Layout.astro

```astro
// Antes
const lang = Astro.request.url.includes('/en') ? 'en' : 'es';
const translations = textsJson[lang];

// Después
import { getCurrentLanguage } from '@i18n/config';
import { loadTranslations } from '@i18n/translations';

const currentLang = getCurrentLanguage(Astro.url);
const translations = await loadTranslations(currentLang);
```

#### Páginas

Actualizar todas las páginas para usar el nuevo sistema:

```astro
---
// Antes
import { textsJson } from '@utils/const';
const langJson = textsJson.es;

// Después
import { loadTranslations } from '@i18n/translations';
const translations = await loadTranslations('es');
---
```

### 4. Migrar traducciones

1. Ejecutar script de generación:
   ```bash
   bun run i18n:generate
   ```

2. Copiar contenido de traducciones existentes a los nuevos archivos

3. Actualizar estructura si es necesario

### 5. Actualizar rutas

#### Estructura actual
```
pages/
├── index.astro      # Español
├── en/
│   └── index.astro  # Inglés
```

#### Nueva estructura (para todos los idiomas)
```
pages/
├── index.astro      # Inglés (por defecto)
├── es/
│   └── index.astro  # Español
├── fr/
│   └── index.astro  # Francés
├── de/
│   └── index.astro  # Alemán
// etc...
```

### 6. Actualizar navegación

Cambiar LanguageToggle por LanguageSelector:

```astro
// Antes
<LanguageToggle lang={lang} />

// Después
<LanguageSelector />
```

### 7. Testear

- [ ] Navegar por todas las páginas en diferentes idiomas
- [ ] Verificar cambio de idioma
- [ ] Comprobar que las traducciones se cargan
- [ ] Revisar idiomas RTL (árabe)

## 🔧 Cambios específicos por archivo

### astro.config.mjs

```diff
+ i18n: {
+   defaultLocale: 'en',
+   locales: ['en', 'es', 'fr', 'de', /* ... */],
+   routing: {
+     prefixDefaultLocale: false,
+   }
+ }
```

### Layout.astro

```diff
- const lang = Astro.request.url.includes('/en') ? 'en' : 'es';
- const translations = textsJson[lang];
+ const currentLang = getCurrentLanguage(Astro.url);
+ const translations = await loadTranslations(currentLang);
```

### Componentes

```diff
- import { textsJson } from '@utils/const';
+ import { loadTranslations } from '@i18n/translations';

- const translations = textsJson.es;
+ const translations = await loadTranslations('es');
```

## 🚨 Posibles problemas

### 1. Traducciones no cargan

**Síntoma**: Página en blanco o errores
**Solución**: Asegúrate de usar `await` con `loadTranslations()`

### 2. Rutas incorrectas

**Síntoma**: 404 al cambiar idioma
**Solución**: Verificar estructura de carpetas y configuración

### 3. Performance

**Síntoma**: Carga lenta inicial
**Solución**: Las traducciones se cachean después de la primera carga

## 📝 Scripts útiles

### Verificar traducciones faltantes

```javascript
// scripts/check-translations.js
import fs from 'fs';
import path from 'path';

const languages = ['es', 'en', 'fr', 'de'];
const baseKeys = Object.keys(
  JSON.parse(fs.readFileSync('src/translations/en.json'))
);

languages.forEach(lang => {
  const trans = JSON.parse(
    fs.readFileSync(`src/translations/${lang}.json`)
  );
  const missing = baseKeys.filter(key => !trans[key]);
  
  if (missing.length > 0) {
    console.log(`${lang}: Missing ${missing.length} keys`);
  }
});
```

## ✅ Validación final

1. Todas las páginas cargan correctamente
2. El cambio de idioma funciona
3. No hay errores en consola
4. El rendimiento es aceptable
5. Los idiomas RTL se ven correctamente

## 🎉 ¡Migración completa!

Tu portfolio ahora soporta múltiples idiomas. Próximos pasos:

1. Traducir contenido gradualmente
2. Añadir más idiomas según necesidad
3. Implementar detección automática del navegador
4. Considerar servicios de traducción profesional
