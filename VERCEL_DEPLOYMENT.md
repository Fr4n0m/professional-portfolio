# Despliegue en Vercel

Este documento contiene instrucciones específicas para el despliegue de este proyecto en Vercel.

## Prerrequisitos

- Cuenta en [Vercel](https://vercel.com)
- [Git](https://git-scm.com/) instalado localmente
- [Node.js](https://nodejs.org/) (versión recomendada: >= 18.x)
- [Bun](https://bun.sh/) (opcional, para desarrollo más rápido)

## Instrucciones de Despliegue

### Opción 1: Despliegue Automático desde GitHub

1. Sube tu repositorio a GitHub
2. Inicia sesión en tu cuenta de Vercel
3. Haz clic en "Add New..." -> "Project"
4. Selecciona tu repositorio de GitHub
5. Configuración del proyecto:
   - Framework Preset: Astro
   - Build Command: `astro build` (esto ya está en package.json)
   - Output Directory: `dist` (predeterminado de Astro)
   - Install Command: `npm install` o `bun install`
6. Haz clic en "Deploy"

### Opción 2: Despliegue mediante CLI de Vercel

1. Instala la CLI de Vercel globalmente:
```bash
npm i -g vercel
```

2. Navega al directorio del proyecto y ejecuta:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

## Variables de Entorno

Si el proyecto requiere variables de entorno, configúralas en el panel de Vercel:
1. Ve a tu proyecto en Vercel
2. Navega a "Settings" -> "Environment Variables"
3. Añade las variables necesarias para los entornos de desarrollo y producción

## Dominios Personalizados

Para configurar un dominio personalizado:
1. Ve a tu proyecto en Vercel
2. Navega a "Domains"
3. Agrega tu dominio personalizado y sigue las instrucciones

## Optimizaciones Implementadas

Este proyecto incluye las siguientes optimizaciones para Vercel:

1. **Configuración de caché**:
   - Los activos estáticos tienen una caché de larga duración (1 año)
   - Las imágenes están configuradas para usar el CDN de Vercel

2. **Headers de Seguridad**:
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block

3. **Configuración de Imágenes**:
   - Optimización automática mediante Vercel Image Optimization
   - Formatos modernos (WebP, AVIF) con fallbacks

4. **Analytics y Monitoreo**:
   - Vercel Analytics habilitado
   - Speed Insights habilitado
   - Web Analytics habilitado

## Solución de Problemas

Si encuentras problemas durante el despliegue:

1. **Errores de construcción**: Revisa los logs en la consola de Vercel
2. **Problemas de rutas**: Asegúrate de que `cleanUrls` y `trailingSlash` en `vercel.json` estén configurados correctamente
3. **Problemas de SSR**: Verifica que la configuración del adaptador en `astro.config.mjs` sea correcta
4. **Problemas de i18n**: Asegúrate de que las redirecciones y locales estén correctamente configurados

## Recursos Adicionales

- [Documentación de Astro para Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Documentación de Vercel](https://vercel.com/docs)
- [Optimización de Imágenes de Vercel](https://vercel.com/docs/concepts/image-optimization)
- [Edge Functions de Vercel](https://vercel.com/docs/concepts/functions/edge-functions)
