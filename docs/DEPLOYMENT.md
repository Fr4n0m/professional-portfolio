# Guía de Deployment

## Vercel

El proyecto está configurado para desplegarse en Vercel con SSR.

### Configuración actual

```javascript
// astro.config.mjs
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
```

### Variables de entorno

No se requieren variables de entorno para el deployment básico.

### Deploy automático

1. Conectar repositorio en Vercel
2. Configuración por defecto funciona
3. Builds automáticos en push a main

### Deploy manual

```bash
# Build local
npm run build

# Preview
npm run preview

# Deploy con Vercel CLI
vercel --prod
```

## Optimizaciones

### Imágenes

- Usar formato WebP
- Optimizar tamaños
- Lazy loading automático con Astro

### Performance

1. **Lighthouse scores objetivo:**
   - Performance: >95
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

2. **Métricas clave:**
   - FCP: <1.8s
   - LCP: <2.5s
   - CLS: <0.1
   - FID: <100ms

### Caché

Headers configurados automáticamente por Vercel:
- Static assets: 1 año
- HTML: No cache
- API routes: Custom

## Monitoreo

### Analytics

Considerar agregar:
- Vercel Analytics
- Google Analytics
- Plausible

### Error tracking

Opciones:
- Sentry
- LogRocket
- Bugsnag

## Checklist pre-deploy

- [ ] Build local exitoso
- [ ] Tests pasando (si aplica)
- [ ] Imágenes optimizadas
- [ ] SEO meta tags actualizados
- [ ] Sitemap generado
- [ ] robots.txt configurado
- [ ] Performance audit
- [ ] Accesibilidad verificada
