import React, { useState } from 'react';
import { runAllTests, testSEO, testFallbacks } from '../../utils/tests/seoTester';

export default function SEOTestRunner() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');

  // Función para ejecutar los tests
  const runTests = () => {
    setLoading(true);
    // Pequeño retraso para asegurar que el DOM esté completamente cargado
    setTimeout(() => {
      const testResults = runAllTests();
      setResults(testResults);
      setLoading(false);
    }, 1000);
  };

  // Calcular la clase de color basada en la puntuación
  const getScoreColorClass = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Renderizar los resultados de los tests
  const renderTestResults = () => {
    if (!results) return null;

    switch (activeTab) {
      case 'summary':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Resumen de resultados</h3>
              <span className={`text-xl font-bold ${getScoreColorClass(results.overallScore)}`}>
                {results.overallScore.toFixed(1)}/100
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">SEO</h4>
                  <span className={`font-bold ${getScoreColorClass(results.seo.score)}`}>
                    {results.seo.score}/100
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Estado: {results.seo.pass ? (
                      <span className="text-green-500">✅ APROBADO</span>
                    ) : (
                      <span className="text-red-500">❌ REPROBADO</span>
                    )}
                  </p>
                  {results.seo.issues.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Problemas encontrados:</p>
                      <ul className="text-sm list-disc list-inside">
                        {results.seo.issues.map((issue, i) => (
                          <li key={i} className="text-red-500">{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Fallbacks</h4>
                  <span className={`font-bold ${getScoreColorClass(results.fallbacks.score)}`}>
                    {results.fallbacks.score}/100
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Estado: {results.fallbacks.pass ? (
                      <span className="text-green-500">✅ APROBADO</span>
                    ) : (
                      <span className="text-red-500">❌ REPROBADO</span>
                    )}
                  </p>
                  <p className="text-sm">
                    Implementado: {results.fallbacks.implemented ? (
                      <span className="text-green-500">Sí</span>
                    ) : (
                      <span className="text-red-500">No</span>
                    )}
                  </p>
                  {results.fallbacks.issues.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Problemas encontrados:</p>
                      <ul className="text-sm list-disc list-inside">
                        {results.fallbacks.issues.map((issue, i) => (
                          <li key={i} className="text-red-500">{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Conclusión</h3>
              <p className={`font-bold ${results.overallPass ? 'text-green-500' : 'text-yellow-500'}`}>
                {results.overallPass ? '✅ IMPLEMENTACIÓN EXITOSA' : '⚠️ SE REQUIEREN MEJORAS'}
              </p>
              <p className="mt-2 text-sm">
                {results.overallPass 
                  ? 'La implementación de SEO y fallbacks es correcta y cumple con los estándares requeridos.'
                  : 'La implementación necesita mejoras. Revisa los problemas encontrados y soluciónalos para mejorar la puntuación.'}
              </p>
            </div>
          </div>
        );
        
      case 'seo':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Detalles de SEO</h3>
              <span className={`text-xl font-bold ${getScoreColorClass(results.seo.score)}`}>
                {results.seo.score}/100
              </span>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium">Verificaciones</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {Object.entries(results.seo.checks).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    {value ? (
                      <span className="text-green-500">✅</span>
                    ) : (
                      <span className="text-red-500">❌</span>
                    )}
                    <span className="text-sm">{formatCheckName(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {results.seo.issues.length > 0 && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium">Problemas</h4>
                <ul className="mt-2 space-y-1">
                  {results.seo.issues.map((issue, i) => (
                    <li key={i} className="text-sm text-red-500">{issue}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium">Recomendaciones</h4>
              <ul className="mt-2 text-sm space-y-1">
                {!results.seo.checks.metaTagsBasic && (
                  <li>• Añade etiquetas meta básicas (título, descripción) a todas las páginas</li>
                )}
                {!results.seo.checks.openGraph && (
                  <li>• Implementa las etiquetas Open Graph para compartir en redes sociales</li>
                )}
                {!results.seo.checks.twitterCards && (
                  <li>• Configura Twitter Cards para mejorar la presentación en Twitter</li>
                )}
                {!results.seo.checks.structuredData && (
                  <li>• Añade datos estructurados (Schema.org) para mejorar la presentación en resultados de búsqueda</li>
                )}
                {!results.seo.checks.hreflang && (
                  <li>• Configura etiquetas hreflang para indicar las versiones en diferentes idiomas</li>
                )}
                {!results.seo.checks.canonicalUrl && (
                  <li>• Añade URL canónica para evitar problemas de contenido duplicado</li>
                )}
                {!results.seo.checks.manifest && (
                  <li>• Incluye manifest.json para soporte de PWA</li>
                )}
                {!results.seo.checks.imageOptimization && (
                  <li>• Optimiza las imágenes (lazy loading, alt text, dimensiones)</li>
                )}
                {results.seo.pass && results.seo.issues.length === 0 && (
                  <li className="text-green-500">• ¡Excelente! Tu implementación SEO cumple con todos los estándares</li>
                )}
              </ul>
            </div>
          </div>
        );
        
      case 'fallbacks':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Detalles de Fallbacks</h3>
              <span className={`text-xl font-bold ${getScoreColorClass(results.fallbacks.score)}`}>
                {results.fallbacks.score}/100
              </span>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium">Verificaciones</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {Object.entries(results.fallbacks.checks).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    {value ? (
                      <span className="text-green-500">✅</span>
                    ) : (
                      <span className="text-red-500">❌</span>
                    )}
                    <span className="text-sm">{formatCheckName(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {results.fallbacks.issues.length > 0 && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium">Problemas</h4>
                <ul className="mt-2 space-y-1">
                  {results.fallbacks.issues.map((issue, i) => (
                    <li key={i} className="text-sm text-red-500">{issue}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium">Recomendaciones</h4>
              <ul className="mt-2 text-sm space-y-1">
                {!results.fallbacks.implemented && (
                  <li>• Implementa el sistema de fallbacks en al menos algunas secciones de la página</li>
                )}
                {!results.fallbacks.checks.fallbackComponents && (
                  <li>• Utiliza el componente FallbackWrapper para envolver contenido que se carga lentamente</li>
                )}
                {!results.fallbacks.checks.imageWithFallback && (
                  <li>• Utiliza el componente ImageWithFallback para imágenes</li>
                )}
                {!results.fallbacks.checks.loadingFallbacks && (
                  <li>• Asegúrate de que los scripts de fallbacks estén correctamente implementados</li>
                )}
                {!results.fallbacks.checks.accessibilitySupport && (
                  <li>• Añade soporte para prefers-reduced-motion para mejorar la accesibilidad</li>
                )}
                {results.fallbacks.pass && results.fallbacks.issues.length === 0 && (
                  <li className="text-green-500">• ¡Excelente! Tu sistema de fallbacks está correctamente implementado</li>
                )}
              </ul>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  // Función auxiliar para formatear nombres de verificaciones
  const formatCheckName = (key) => {
    const formattedNames = {
      metaTagsBasic: 'Meta tags básicos',
      openGraph: 'Open Graph',
      twitterCards: 'Twitter Cards',
      structuredData: 'Datos estructurados',
      hreflang: 'Soporte de idiomas (hreflang)',
      canonicalUrl: 'URL canónica',
      manifest: 'Manifest.json',
      imageOptimization: 'Optimización de imágenes',
      fallbackComponents: 'Componentes de fallback',
      imageWithFallback: 'Imágenes con fallback',
      loadingFallbacks: 'Scripts de fallbacks',
      accessibilitySupport: 'Soporte de accesibilidad'
    };
    
    return formattedNames[key] || key;
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Test de SEO y Fallbacks</h2>
        <button 
          onClick={runTests}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Ejecutando...</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Ejecutar tests</span>
            </>
          )}
        </button>
      </div>
      
      {results && (
        <>
          <div className="flex space-x-2 mb-4 border-b dark:border-gray-700">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'summary' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('summary')}
            >
              Resumen
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'seo' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('seo')}
            >
              SEO
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'fallbacks' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('fallbacks')}
            >
              Fallbacks
            </button>
          </div>
          
          {renderTestResults()}
          
          <div className="mt-6 text-right text-xs text-gray-500">
            Tests ejecutados el {new Date(results.timestamp).toLocaleString()}
          </div>
        </>
      )}
      
      {!results && !loading && (
        <div className="text-center py-8 text-gray-500">
          <p>Haz clic en "Ejecutar tests" para verificar la implementación de SEO y fallbacks</p>
        </div>
      )}
      
      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Ejecutando tests...</p>
        </div>
      )}
    </div>
  );
}
