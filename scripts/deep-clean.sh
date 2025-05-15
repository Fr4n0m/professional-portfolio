#!/bin/bash

echo "🧹 Limpiando proyecto completo..."

# Detener cualquier proceso en ejecución
echo "Deteniendo procesos..."
pkill -f "bun run dev" || true
pkill -f "astro dev" || true

# Limpiar caché de Bun
echo "Limpiando caché de Bun..."
bun pm cache rm

# Eliminar directorios de caché y build
echo "Eliminando directorios de caché..."
rm -rf .astro
rm -rf dist
rm -rf node_modules
rm -rf .vite
rm -rf .cache

# Eliminar archivos de lock
echo "Eliminando archivos de lock..."
rm -f bun.lockb
rm -f package-lock.json
rm -f yarn.lock

# Limpiar caché del sistema si existe
echo "Limpiando caché del sistema..."
rm -rf ~/.bun/install/cache/*

# Reinstalar dependencias
echo "Reinstalando dependencias..."
bun install

# Verificar instalación
echo "Verificando instalación..."
bun pm ls

echo "✅ Limpieza completa!"
echo ""
echo "Ahora ejecuta:"
echo "  bun run dev"
