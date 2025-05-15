#!/bin/bash

# Script para instalar y configurar optimización de imágenes en Astro

echo "Instalando integración de imágenes de Astro..."

# Instalar sharp para optimización de imágenes (más rápido que squoosh)
bun add sharp

echo "Sharp instalado. Ahora puedes usar import { Image } from 'astro:assets' en tus componentes."
echo ""
echo "Para usar la optimización de imágenes:"
echo "1. Importa tus imágenes: import myImage from './my-image.jpg'"
echo "2. Usa el componente Image: <Image src={myImage} alt='...' />"
echo ""
echo "Las imágenes se optimizarán automáticamente en el build."
