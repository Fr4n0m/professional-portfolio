/**
 * Este es un archivo puente que simplemente re-exporta las funciones del módulo original
 * para evitar romper las importaciones existentes.
 */

// Importar todas las funciones del archivo original
export * from '../../components/fallbacks/loadingFallbacks.js';

// Re-exportar el default export
import defaultExport from '../../components/fallbacks/loadingFallbacks.js';
export default defaultExport;
