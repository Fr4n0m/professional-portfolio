# Portfolio Profesional - Documentación

## Índice de Documentación

### 📚 General
- [README](./README.md) - Descripción general del proyecto

### 🏗️ Técnico
- [Arquitectura](./ARCHITECTURE.md) - Estructura y organización del proyecto
- [Componentes](./COMPONENTS.md) - Guía de componentes disponibles
- [Desarrollo](./DEVELOPMENT.md) - Guía para desarrolladores

### 🔧 Características
- [Internacionalización Manual](./I18N.md) - Sistema actual de 2 idiomas
- **[Internacionalización Multilingüe](./I18N-MULTILINGUAL.md)** - **NUEVO** Sistema para 15+ idiomas
- [Guía de Migración i18n](./MIGRATION-GUIDE.md) - Cómo migrar al nuevo sistema
- [Temas](./THEMES.md) - Sistema de temas claro/oscuro

## 🌍 Actualización Importante: Sistema Multilingüe

El proyecto ahora puede soportar **15+ idiomas** con:

- ✅ Configuración oficial de Astro i18n
- ✅ Lazy loading de traducciones
- ✅ Soporte para idiomas RTL (árabe)
- ✅ Selector de idioma mejorado con banderas
- ✅ Sistema de fallback automático

### Idiomas disponibles:
🇬🇧 🇪🇸 🇨🇳 🇮🇳 🇸🇦 🇧🇷 🇫🇷 🇩🇪 🇯🇵 🇷🇺 🇮🇹 🇰🇷 🇳🇱 🇵🇱 🇹🇷

## Resumen del Proyecto

**Portfolio Profesional** es una aplicación web moderna desarrollada con:

- **Astro** - Framework principal con i18n oficial
- **React** - Componentes interactivos
- **Tailwind CSS** - Sistema de estilos
- **TypeScript** - Tipado estático
- **Bun** - Gestor de paquetes ultrarrápido

### Enlaces útiles

- [Demo en vivo](https://professional-portfolio-nine.vercel.app/)
- [Repositorio](https://github.com/Fr4n0m/professional-pf)

## Migración al sistema multilingüe

Si quieres activar el soporte para múltiples idiomas:

1. Lee la [documentación multilingüe](./I18N-MULTILINGUAL.md)
2. Sigue la [guía de migración](./MIGRATION-GUIDE.md)
3. Genera archivos de traducción: `bun run i18n:generate`

## Scripts disponibles

```bash
bun run dev          # Desarrollo
bun run build        # Producción
bun run i18n:generate # Generar archivos de traducción
```

## Contribuir

Para contribuir al proyecto:

1. Lee la [guía de desarrollo](./DEVELOPMENT.md)
2. Comprende la [arquitectura](./ARCHITECTURE.md)
3. Sigue las convenciones de código
4. Crea un pull request
