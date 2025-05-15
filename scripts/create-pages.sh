#!/bin/bash

# Script para crear todas las páginas de idiomas faltantes

echo "Creando páginas para todos los idiomas..."

# Lista de idiomas
languages=("zh" "hi" "ar" "pt" "fr" "de" "ja" "ru" "it" "ko" "nl" "pl" "tr")

# Directorio base
PAGES_DIR="src/pages"

# Función para crear las páginas de un idioma
create_language_pages() {
    local lang=$1
    echo "Procesando idioma: $lang"
    
    # Crear directorio principal
    mkdir -p "$PAGES_DIR/$lang"
    
    # Crear index.astro
    cat > "$PAGES_DIR/$lang/index.astro" << EOF
---
import Layout from '@layouts/Layout.astro';
import HomePage from '@components/pages/HomePage.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../types/translations';

const langJson = textsJson.$lang;
const translations: Translations = langJson;

const layout = translations.layout;
---

<Layout
	title={layout.title}
	description={layout.titleDescription}
	json={langJson}
>
	<HomePage translations={translations} />
</Layout>
EOF
    
    # Crear certifications
    mkdir -p "$PAGES_DIR/$lang/certifications"
    cat > "$PAGES_DIR/$lang/certifications/index.astro" << EOF
---
import Layout from '@layouts/Layout.astro';
import Certifications from '@components/Certifications.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../../types/translations';

const langJson = textsJson.$lang;
const translations: Translations = langJson;

const { certifications, certificationsTitle, certificationsDescription } = translations.certificationsPage;
---

<Layout
	title={certificationsTitle}
	description={certificationsDescription}
	json={langJson}
>
	<section class='px-8'>
		<Certifications certifications={certifications} />
	</section>
</Layout>
EOF
    
    # Crear projects
    mkdir -p "$PAGES_DIR/$lang/projects"
    cat > "$PAGES_DIR/$lang/projects/index.astro" << EOF
---
import Layout from '@layouts/Layout.astro';
import AllProjects from '@components/Projects/AllProjects.astro';

import { textsJson } from '@utils/const';
import type { Translations } from '../../../types/translations';

const langJson = textsJson.$lang;
const translations: Translations = langJson;

const { allProjectsTitle, allProjectsDescription } = translations.projectsPage;
---

<Layout
	title={allProjectsTitle}
	description={allProjectsDescription}
	json={langJson}
>
	<section class='px-8'>
		<AllProjects translations={translations} />
	</section>
</Layout>
EOF
    
    echo "Completado: $lang"
}

# Crear páginas para cada idioma
for lang in "${languages[@]}"; do
    create_language_pages "$lang"
done

echo "¡Todas las páginas han sido creadas!"
echo "IMPORTANTE: Reinicia el servidor de desarrollo de Astro para ver los cambios."
