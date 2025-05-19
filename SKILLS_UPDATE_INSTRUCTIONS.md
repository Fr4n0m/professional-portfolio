# Instrucciones para Actualizar Tecnologías (Skills)

Este documento explica cómo actualizar y mantener la información de las tecnologías (skills) en el portafolio.

## Estructura del sistema

La información de las tecnologías se almacena en archivos JSON individuales en la carpeta `src/config/skills/`. Cada tecnología tiene su propio archivo con sus traducciones e información asociada.

## Cómo agregar una nueva tecnología

1. Crea un nuevo archivo JSON en la carpeta `src/config/skills/` con el nombre de la tecnología en minúsculas (por ejemplo, `python.json`).

2. Usa la siguiente estructura para el archivo:

```json
{
  "name": "Python",
  "category": "language",
  "experience": 3,
  "link": "https://www.python.org/",
  "translations": {
    "es": "Lenguaje de programación interpretado de alto nivel conocido por su sintaxis legible y versatilidad.",
    "en": "High-level interpreted programming language known for its readable syntax and versatility.",
    "en-us": "High-level interpreted programming language known for its readable syntax and versatility.",
    "es-mx": "Lenguaje de programación interpretado de alto nivel conocido por su sintaxis legible y versatilidad.",
    "pt": "Linguagem de programação interpretada de alto nível conhecida por sua sintaxe legível e versatilidade.",
    "fr": "Langage de programmation interprété de haut niveau connu pour sa syntaxe lisible et sa polyvalence.",
    "de": "Interpretierte Hochsprache, bekannt für ihre lesbare Syntax und Vielseitigkeit.",
    "it": "Linguaggio di programmazione interpretato di alto livello noto per la sua sintassi leggibile e versatilità.",
    "zh": "以可读语法和多功能性而闻名的高级解释型编程语言。",
    "ja": "読みやすい構文と汎用性で知られる高レベルのインタプリタ型プログラミング言語。",
    "ru": "Высокоуровневый интерпретируемый язык программирования, известный своим читаемым синтаксисом и универсальностью.",
    "ar": "لغة برمجة عالية المستوى مفسرة معروفة بقواعدها المقروءة وتعدد استخداماتها.",
    "hi": "उच्च स्तरीय व्याख्या योग्य प्रोग्रामिंग भाषा जो अपने पढ़ने योग्य सिंटैक्स और बहुमुखी प्रतिभा के लिए जानी जाती है।",
    "ko": "읽기 쉬운 구문과 다재다능함으로 알려진 고수준 인터프리티드 프로그래밍 언어.",
    "nl": "Hoogwaardige geïnterpreteerde programmeertaal bekend om zijn leesbare syntaxis en veelzijdigheid.",
    "pl": "Wysokopoziomowy interpretowany język programowania znany z czytelnej składni i wszechstronności.",
    "tr": "Okunabilir sözdizimi ve çok yönlülüğü ile bilinen yüksek seviyeli yorumlanmış programlama dili.",
    "hv": "Rhaenyō kostōbi kodātyr drējī sȳndor se valyrīha."
  }
}
```

3. Personaliza la información:
   - `name`: Nombre exacto de la tecnología
   - `category`: Categoría a la que pertenece (`frontend`, `backend`, `database`, `tools`, `os`, `language`, `framework`, `library`)
   - `experience`: Nivel de experiencia del 1 al 5
   - `link`: Enlace a la documentación oficial
   - `translations`: Traducciones de la descripción para cada idioma soportado

4. Agrega el nombre de la tecnología a la lista en `src/config/skills/index.ts`:

```typescript
export const SKILLS_LIST = [
  // ... otros skills
  'Python',
  // ... otros skills
];
```

5. Si la tecnología requiere un ícono nuevo:
   - Crea el ícono en la carpeta `src/icons/`
   - Actualiza el mapa de íconos en `src/utils/tags.ts`
   - Actualiza el mapa de colores CSS para la tecnología en el mismo archivo

## Valores de categorías disponibles

- `frontend`: Tecnologías de fronted
- `backend`: Tecnologías de backend
- `database`: Bases de datos y almacenamiento
- `tools`: Herramientas y utilidades
- `os`: Sistemas operativos
- `language`: Lenguajes de programación
- `framework`: Frameworks
- `library`: Bibliotecas

## Niveles de experiencia

Todas las tecnologías están configuradas con el nivel máximo de experiencia (5). Esto refleja un dominio profesional avanzado de todas las herramientas y tecnologías listadas.

- 5: Nivel experto (valor actual para todas las tecnologías)

## Traducción

Para mantener la consistencia, asegúrate de traducir la descripción a todos los idiomas soportados. Cada descripción no debe exceder los 150 caracteres para garantizar que se muestre correctamente en el tooltip.
