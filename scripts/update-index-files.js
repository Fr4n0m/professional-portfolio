import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const translationsPath = path.join(__dirname, '..', 'src', 'translations');

const languages = fs.readdirSync(translationsPath).filter(dir => 
  fs.statSync(path.join(translationsPath, dir)).isDirectory() && 
  dir !== 'minimal' && 
  dir !== 'base'
);

console.log('Actualizando archivos index.ts para cada idioma...\n');

languages.forEach(lang => {
  const langPath = path.join(translationsPath, lang);
  const indexPath = path.join(langPath, 'index.ts');
  
  // Leer archivos JSON existentes
  const jsonFiles = fs.readdirSync(langPath).filter(file => file.endsWith('.json'));
  
  // Crear contenido del index.ts basado en archivos existentes
  let imports = '';
  let exports = 'export default {\n';
  
  jsonFiles.forEach(file => {
    const varName = file.replace('.json', '').replace(/-/g, '_');
    imports += `import ${varName} from './${file}';\n`;
    
    if (file === 'certifications.json') {
      exports += `  certificationsList: ${varName},\n`;
    } else {
      exports += `  ${varName.replace(/_/g, '')}: ${varName},\n`;
    }
  });
  
  // Casos especiales
  if (jsonFiles.includes('projects-page.json') && jsonFiles.includes('projects.json')) {
    exports = exports.replace(
      'projectspage: projects_page,', 
      'projectsPage: {\n    ...projects_page,\n    projects\n  },'
    );
    exports = exports.replace('projects: projects,', '');
  }
  
  if (jsonFiles.includes('certifications-page.json') && jsonFiles.includes('certifications.json')) {
    exports = exports.replace(
      'certificationspage: certifications_page,',
      'certificationsPage: {\n    ...certifications_page,\n    certifications: certificationsList\n  },'
    );
    exports = exports.replace('certificationsList: certificationsList,', '');
  }
  
  exports += '};\n';
  
  const content = imports + '\n' + exports;
  
  fs.writeFileSync(indexPath, content);
  console.log(`✅ Actualizado: ${lang}/index.ts`);
});

console.log('\n✅ Todos los archivos index.ts actualizados!');
