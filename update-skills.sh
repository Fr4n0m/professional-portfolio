#!/bin/bash

# Script para actualizar las imágenes e iconos de skills y corregir errores

echo "🔧 Corrigiendo error JSX en utils/tags.ts..."
# Ejecutar script para corregir error JSX
node scripts/fix-tags-jsx.js

echo "📦 Actualizando imágenes de skills..."
# Ejecutar script de actualización de imágenes
node scripts/update-skill-images.js

echo "✅ Proceso completado. Se han actualizado las imágenes para todas las skills y se ha intentado corregir el error JSX."
echo "📋 Si el error persiste, considera cambiar la extensión del archivo manualmente:"
echo "   mv src/utils/tags.ts src/utils/tags.tsx"
