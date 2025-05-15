#!/bin/bash

# Script para limpiar las páginas duplicadas de idiomas
# Ahora usamos rutas dinámicas en [lang]

echo "Limpiando páginas duplicadas de idiomas..."

# Mantener solo la estructura base y eliminar las carpetas de idiomas específicos
# (excepto las nuevas rutas dinámicas en [lang])

# Lista de carpetas de idiomas a eliminar
languages=("en" "zh" "hi" "ar" "pt" "fr" "de" "ja" "ru" "it" "ko" "nl" "pl" "tr" "hv")

# Directorio base
PAGES_DIR="src/pages"

# Eliminar las carpetas de idiomas antiguos
for lang in "${languages[@]}"; do
    if [ -d "$PAGES_DIR/$lang" ]; then
        rm -rf "$PAGES_DIR/$lang"
        echo "Eliminado: $PAGES_DIR/$lang"
    fi
done

echo "Limpieza completada. Ahora se usan rutas dinámicas en [lang]/"
