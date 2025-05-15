# Sistema de Internacionalización Multilingüe

## 🌍 Configuración Actual

El proyecto ahora soporta 15 idiomas principales:

| Idioma | Código | Bandera | Dirección |
|--------|--------|---------|-----------|
| Inglés | en | 🇬🇧 | LTR |
| Español | es | 🇪🇸 | LTR |
| Chino | zh | 🇨🇳 | LTR |
| Hindi | hi | 🇮🇳 | LTR |
| Árabe | ar | 🇸🇦 | RTL |
| Portugués | pt | 🇧🇷 | LTR |
| Francés | fr | 🇫🇷 | LTR |
| Alemán | de | 🇩🇪 | LTR |
| Japonés | ja | 🇯🇵 | LTR |
| Ruso | ru | 🇷🇺 | LTR |
| Italiano | it | 🇮🇹 | LTR |
| Coreano | ko | 🇰🇷 | LTR |
| Holandés | nl | 🇳🇱 | LTR |
| Polaco | pl | 🇵🇱 | LTR |
| Turco | tr | 🇹🇷 | LTR |

## 📁 Estructura

```
src/
├── i18n/
│   ├── config.ts        # Configuración de idiomas
│   └── translations.ts  # Sistema de carga de traducciones
├── translations/
│   ├── en.json         # Inglés (base)
│   ├── es.json         # Español
│   └── ...             # Otros idiomas
```

## 🚀 Uso

### En componentes Astro

```astro
---
import { getCurrentLanguage } from '@i18n/config';
import { loadTranslations } from '@i18n/translations';

const currentLang = getCurrentLanguage(Astro.url);
const translations = await loadTranslations(currentLang);
---

<h1>{translations.mainPage.hero.heroTitle}</h1>
```

### URLs por idioma

- `/` - Inglés (por defecto)
- `/es/` - Español
- `/zh/` - Chino
- `/fr/` - Francés
- etc.

## 🔧 Añadir nuevos idiomas

### 1. Actualizar configuración

Edita `src/i18n/config.ts`:

```typescript
export const languages = {
  // ... idiomas existentes
  sv: {
    name: 'Swedish',
    nativeName: 'Svenska',
    flag: '🇸🇪',
    direction: 'ltr',
  },
};
```

### 2. Actualizar astro.config.mjs

```javascript
i18n: {
  locales: [
    // ... idiomas existentes
    'sv',  // Nuevo idioma
  ],
}
```

### 3. Generar archivo de traducción

```bash
bun run i18n:generate
```

Esto creará `src/translations/sv.json` con la estructura vacía.

### 4. Traducir contenido

Edita el archivo JSON con las traducciones:

```json
{
  "personalInfo": {
    "name": "Francisco José Rodríguez Martínez",
    "role": "Programutvecklare och Full Stack"
  }
  // ... más traducciones
}
```

## 🔄 Cambio de idioma

El componente `LanguageSelector` muestra un menú desplegable con todos los idiomas disponibles, mostrando:
- Bandera del país
- Nombre nativo del idioma
- Indicador del idioma actual

## 📊 Gestión de traducciones

### Progreso de traducción

Cada archivo de traducción incluye metadata:

```json
{
  "_metadata": {
    "language": "sv",
    "translationProgress": 75,
    "lastUpdated": "2024-02-15T10:00:00Z"
  }
}
```

### Fallback automático

Si falta una traducción, el sistema:
1. Intenta cargar el idioma solicitado
2. Si falla, usa inglés como fallback
3. Si el inglés falla, devuelve objeto vacío

## 🎨 Consideraciones de diseño

### Idiomas RTL (Right-to-Left)

Para árabe y otros idiomas RTL:

```css
html[dir="rtl"] {
  text-align: right;
}

html[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}
```

### Fuentes específicas por idioma

Considera cargar fuentes específicas para idiomas como:
- Árabe: Noto Sans Arabic
- Chino: Noto Sans SC
- Japonés: Noto Sans JP

## 📈 Performance

### Lazy Loading

Las traducciones se cargan bajo demanda:

```typescript
const translations = await loadTranslations(lang);
```

### Cache

Las traducciones se cachean en memoria después de la primera carga.

## 🛠️ Herramientas útiles

### Script de validación

Crea un script para validar traducciones:

```javascript
// scripts/validate-translations.js
// Verifica que todas las claves existan en todos los idiomas
```

### Servicios de traducción

Para traducciones profesionales, considera:
- DeepL API
- Google Translate API
- Crowdin para gestión colaborativa

## 📝 Mejores prácticas

1. **Mantén las claves consistentes** en todos los idiomas
2. **Usa claves descriptivas**: `hero.title` mejor que `h1`
3. **Agrupa por contexto**: `mainPage.hero.title`
4. **Considera el contexto cultural** al traducir
5. **Prueba con idiomas RTL** para verificar el diseño

## 🚨 Troubleshooting

### Traducción no aparece

1. Verifica que el archivo existe: `src/translations/[lang].json`
2. Comprueba la estructura JSON
3. Revisa la consola para errores de carga
4. Asegúrate de usar `await` al cargar traducciones

### Cambio de idioma no funciona

1. Verifica las rutas en `astro.config.mjs`
2. Comprueba que el idioma está en `languages` config
3. Revisa el componente LanguageSelector

## 🔜 Próximos pasos

1. Implementar detección automática del navegador
2. Añadir persistencia de preferencia de idioma
3. Crear sistema de traducción colaborativa
4. Añadir más idiomas según demanda
