#!/bin/bash
# Instalación de GSAP con Bun
echo "Instalando GSAP..."
bun add gsap

# Validación de la instalación
if [ $? -eq 0 ]; then
  echo "✅ GSAP instalado correctamente."
  echo "Puedes comenzar a usarlo importándolo en tus archivos:"
  echo "import { gsap } from 'gsap';"
else
  echo "❌ Error al instalar GSAP. Por favor, intenta manualmente con 'bun add gsap'."
fi
