// seoTester.js - Herramienta para probar la implementación de SEO y fallbacks

/**
 * Verifica la implementación SEO en una página
 * @param {string} url - URL de la página a probar (puede ser relativa)
 * @returns {Object} - Resultado del test con información y problemas encontrados
 */
export async function testSEO(url = window.location.href) {
  console.group(`🔍 Realizando test de SEO para: ${url}`);
  
  const results = {
    url,
    timestamp: new Date().toISOString(),
    pass: true,
    score: 100,
    issues: [],
    checks: {
      metaTagsBasic: false,
      openGraph: false,
      twitterCards: false,
      structuredData: false,
      hreflang: false,
      canonicalUrl: false,
      manifest: false,
      imageOptimization: false
    }
  };
  
  // 1. Verificar meta tags básicos
  console.log("📋 Verificando meta tags básicos...");
  const title = document.title;
  const description = document.querySelector('meta[name="description"]');
  const viewport = document.querySelector('meta[name="viewport"]');
  
  if (!title || title.length < 5) {
    results.issues.push("⚠️ Título ausente o demasiado corto");
    results.score -= 15;
  }
  
  if (!description || !description.content || description.content.length < 10) {
    results.issues.push("⚠️ Meta descripción ausente o demasiado corta");
    results.score -= 15;
  } else {
    results.checks.metaTagsBasic = true;
  }
  
  if (!viewport) {
    results.issues.push("⚠️ Meta viewport ausente");
    results.score -= 5;
  }
  
  // 2. Verificar Open Graph
  console.log("📋 Verificando meta tags Open Graph...");
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (!ogTitle || !ogDescription || !ogImage) {
    results.issues.push("⚠️ Meta tags Open Graph incompletos");
    results.score -= 10;
  } else {
    results.checks.openGraph = true;
  }
  
  // 3. Verificar Twitter Cards
  console.log("📋 Verificando Twitter Cards...");
  const twitterCard = document.querySelector('meta[property="twitter:card"]');
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  
  if (!twitterCard || !twitterTitle || !twitterDescription) {
    results.issues.push("⚠️ Twitter Cards incompletos");
    results.score -= 5;
  } else {
    results.checks.twitterCards = true;
  }
  
  // 4. Verificar Structured Data
  console.log("📋 Verificando Structured Data...");
  const structuredData = document.querySelector('script[type="application/ld+json"]');
  
  if (!structuredData) {
    results.issues.push("⚠️ Datos estructurados (Schema.org) ausentes");
    results.score -= 15;
  } else {
    try {
      const jsonData = JSON.parse(structuredData.innerHTML);
      if (!jsonData["@context"] || !jsonData["@type"]) {
        results.issues.push("⚠️ Datos estructurados mal formados");
        results.score -= 10;
      } else {
        results.checks.structuredData = true;
      }
    } catch (e) {
      results.issues.push("⚠️ Error al parsear datos estructurados");
      results.score -= 15;
    }
  }
  
  // 5. Verificar hreflang para idiomas alternativos
  console.log("📋 Verificando soporte de idiomas (hreflang)...");
  const hreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
  
  if (hreflangTags.length === 0) {
    results.issues.push("⚠️ Enlaces hreflang ausentes");
    results.score -= 15;
  } else {
    const hasDefaultHreflang = Array.from(hreflangTags).some(tag => tag.getAttribute('hreflang') === 'x-default');
    
    if (!hasDefaultHreflang) {
      results.issues.push("⚠️ Falta el enlace hreflang x-default");
      results.score -= 5;
    } else {
      results.checks.hreflang = true;
    }
  }
  
  // 6. Verificar URL canónica
  console.log("📋 Verificando URL canónica...");
  const canonicalUrl = document.querySelector('link[rel="canonical"]');
  
  if (!canonicalUrl) {
    results.issues.push("⚠️ URL canónica ausente");
    results.score -= 10;
  } else {
    results.checks.canonicalUrl = true;
  }
  
  // 7. Verificar manifest.json
  console.log("📋 Verificando manifest.json...");
  const manifest = document.querySelector('link[rel="manifest"]');
  
  if (!manifest) {
    results.issues.push("⚠️ Manifest.json ausente");
    results.score -= 5;
  } else {
    results.checks.manifest = true;
  }
  
  // 8. Verificar optimización de imágenes
  console.log("📋 Verificando imágenes...");
  const images = document.querySelectorAll('img');
  let unoptimizedImages = 0;
  
  images.forEach(img => {
    if (!img.getAttribute('loading')) {
      unoptimizedImages++;
    }
    
    if (!img.getAttribute('alt')) {
      unoptimizedImages++;
    }
    
    if (!img.width || !img.height) {
      unoptimizedImages++;
    }
  });
  
  if (unoptimizedImages > 0) {
    results.issues.push(`⚠️ ${unoptimizedImages} problemas de optimización de imágenes detectados`);
    results.score -= Math.min(15, unoptimizedImages * 3);
  } else if (images.length > 0) {
    results.checks.imageOptimization = true;
  }
  
  // Determinar resultado
  results.pass = results.score >= 70;
  
  console.log(`✅ Test completado con puntuación: ${results.score}/100`);
  if (results.issues.length > 0) {
    console.log("❌ Problemas encontrados:", results.issues);
  } else {
    console.log("✅ No se encontraron problemas!");
  }
  
  console.groupEnd();
  return results;
}

/**
 * Verifica la implementación de fallbacks en la página
 * @param {string} url - URL de la página a probar (puede ser relativa)
 * @returns {Object} - Resultado del test con información y problemas encontrados
 */
export async function testFallbacks() {
  console.group("🔍 Realizando test de fallbacks");
  
  const results = {
    timestamp: new Date().toISOString(),
    pass: true,
    implemented: false,
    score: 100,
    issues: [],
    checks: {
      fallbackComponents: false,
      imageWithFallback: false,
      loadingFallbacks: false,
      accessibilitySupport: false
    }
  };
  
  // 1. Verificar componentes de fallback
  console.log("📋 Verificando componentes de fallback...");
  const fallbackWrappers = document.querySelectorAll('[data-fallback]');
  
  if (fallbackWrappers.length === 0) {
    results.issues.push("⚠️ No se encontraron componentes de fallback");
    results.score -= 10;
  } else {
    results.checks.fallbackComponents = true;
    results.implemented = true;
  }
  
  // 2. Verificar imágenes con fallback
  console.log("📋 Verificando imágenes con fallback...");
  const imageContainers = document.querySelectorAll('.image-fallback-container');
  
  if (imageContainers.length === 0) {
    results.issues.push("⚠️ No se encontraron imágenes con fallback");
    results.score -= 10;
  } else {
    results.checks.imageWithFallback = true;
    results.implemented = true;
  }
  
  // 3. Verificar scripts de carga de fallbacks
  console.log("📋 Verificando scripts de fallbacks...");
  const scriptsContent = Array.from(document.scripts)
    .map(script => script.textContent || '')
    .join(' ');
  
  if (!scriptsContent.includes('loadingFallbacks') && 
      !scriptsContent.includes('createSkeletonLoader') && 
      !scriptsContent.includes('createShimmerEffect')) {
    results.issues.push("⚠️ No se encontraron scripts de fallbacks");
    results.score -= 20;
  } else {
    results.checks.loadingFallbacks = true;
    results.implemented = true;
  }
  
  // 4. Verificar soporte de accesibilidad
  console.log("📋 Verificando soporte de accesibilidad...");
  if (!scriptsContent.includes('prefers-reduced-motion') && 
      !scriptsContent.includes('shouldReduceMotion')) {
    results.issues.push("⚠️ No se encontró soporte para prefers-reduced-motion");
    results.score -= 10;
  } else {
    results.checks.accessibilitySupport = true;
  }
  
  // Determinar resultado
  results.pass = results.implemented && results.score >= 70;
  
  console.log(`✅ Test completado con puntuación: ${results.score}/100`);
  if (results.issues.length > 0) {
    console.log("❌ Problemas encontrados:", results.issues);
  } else if (results.implemented) {
    console.log("✅ Sistema de fallbacks correctamente implementado!");
  } else {
    console.log("⚠️ Sistema de fallbacks no implementado");
  }
  
  console.groupEnd();
  return results;
}

// Función para ejecutar todos los tests
export async function runAllTests() {
  const seoResults = await testSEO();
  const fallbackResults = await testFallbacks();
  
  console.group("📊 Resumen de tests");
  console.log("SEO:", seoResults.pass ? "✅ APROBADO" : "❌ REPROBADO", `(${seoResults.score}/100)`);
  console.log("Fallbacks:", fallbackResults.pass ? "✅ APROBADO" : "❌ REPROBADO", `(${fallbackResults.score}/100)`);
  
  const overallScore = (seoResults.score + fallbackResults.score) / 2;
  const overallPass = overallScore >= 80;
  
  console.log("📝 Puntuación global:", overallScore.toFixed(1) + "/100");
  console.log(overallPass ? "✅ IMPLEMENTACIÓN EXITOSA" : "⚠️ SE REQUIEREN MEJORAS");
  
  if (seoResults.issues.length > 0 || fallbackResults.issues.length > 0) {
    console.log("📋 Problemas prioritarios a resolver:");
    [...seoResults.issues, ...fallbackResults.issues].forEach((issue, index) => {
      console.log(`${index + 1}. ${issue}`);
    });
  }
  
  console.groupEnd();
  
  return {
    timestamp: new Date().toISOString(),
    seo: seoResults,
    fallbacks: fallbackResults,
    overallScore,
    overallPass
  };
}

export default {
  testSEO,
  testFallbacks,
  runAllTests
};
