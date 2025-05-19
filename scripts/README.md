# Scripts de Mantenimiento del Portafolio

Este directorio contiene scripts para mantener y actualizar el portafolio correctamente.

## Corregir el error JSX en utils/tags.ts

El script `fix-tags-jsx.js` corrige el error "Expected '>' but found 'className'" en el archivo `utils/tags.ts`.

Para ejecutarlo:

```bash
node scripts/fix-tags-jsx.js
```

También puedes renombrar el archivo directamente:

```bash
mv src/utils/tags.ts src/utils/tags.tsx
```

## Actualizar imágenes de skills

Para asegurar que todas las skills usen las mismas imágenes en todos los idiomas, ejecuta:

```bash
# Da permisos de ejecución si es necesario
chmod +x update-skills.sh

# Ejecuta el script
./update-skills.sh
```

Esto actualizará las imágenes SVG que aparecen en los tooltips cuando pasas el ratón sobre cada skill.

## Imágenes disponibles

Se han creado las siguientes imágenes SVG para los tooltips:

- `/assets/screenshots/frontend-screenshot.svg` - Para skills de frontend
- `/assets/screenshots/backend-screenshot.svg` - Para skills de backend
- `/assets/screenshots/database-screenshot.svg` - Para skills de bases de datos
- `/assets/screenshots/tools-screenshot.svg` - Para herramientas de desarrollo
- `/assets/screenshots/os-screenshot.svg` - Para sistemas operativos
- `/assets/screenshots/html-screenshot.svg` - Específica para HTML
- `/assets/screenshots/css-screenshot.svg` - Específica para CSS
- `/assets/screenshots/js-screenshot.svg` - Específica para JavaScript
- `/assets/screenshots/docker-screenshot.svg` - Específica para Docker
- `/assets/screenshots/phaser-screenshot.svg` - Específica para Phaser
- `/assets/screenshots/default-tech.svg` - Imagen por defecto

## Agregar nuevas skills

Después de agregar nuevas skills según las instrucciones en `SKILLS_UPDATE_INSTRUCTIONS.md`, ejecuta el script `update-skills.sh` para asegurarte de que las imágenes se actualicen correctamente.
