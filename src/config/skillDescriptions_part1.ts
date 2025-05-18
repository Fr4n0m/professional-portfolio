// Archivo de configuración central para las descripciones de las skills - Parte 1
// Múltiples idiomas soportados

type SkillDescription = {
  [lang: string]: string;
};

type SkillDescriptions = {
  [skill: string]: SkillDescription;
};

export const skillDescriptions: SkillDescriptions = {
  // Frontend
  'HTML': {
    es: 'Lenguaje de marcado estándar para la creación de páginas web. Fundamental para definir la estructura del contenido.',
    en: 'Standard markup language for creating web pages. Essential for defining content structure.',
    'en-us': 'Standard markup language for creating web pages. Essential for defining content structure.',
    'es-mx': 'Lenguaje de marcado estándar para la creación de páginas web. Fundamental para definir la estructura del contenido.',
    pt: 'Linguagem de marcação padrão para a criação de páginas web. Fundamental para definir a estrutura do conteúdo.',
    fr: 'Langage de balisage standard pour la création de pages web. Fondamental pour définir la structure du contenu.',
    de: 'Standardauszeichnungssprache für die Erstellung von Webseiten. Grundlegend für die Definition der Inhaltsstruktur.',
    it: 'Linguaggio di markup standard per la creazione di pagine web. Fondamentale per definire la struttura del contenuto.',
    zh: '用于创建网页的标准标记语言。对定义内容结构至关重要。',
    ja: 'ウェブページ作成のための標準マークアップ言語。コンテンツ構造の定義に不可欠。',
    ru: 'Стандартный язык разметки для создания веб-страниц. Основа для определения структуры контента.',
    ar: 'لغة الترميز القياسية لإنشاء صفحات الويب. أساسية لتحديد هيكل المحتوى.',
    hi: 'वेब पेज बनाने के लिए मानक मार्कअप भाषा। सामग्री संरचना को परिभाषित करने के लिए आवश्यक।',
    ko: '웹 페이지 제작을 위한 표준 마크업 언어. 콘텐츠 구조를 정의하는 데 필수적입니다.',
    nl: 'Standaard opmaaktaal voor het maken van webpagina\'s. Essentieel voor het definiëren van contentstructuur.',
    pl: 'Standardowy język znaczników do tworzenia stron internetowych. Kluczowy dla definiowania struktury treści.',
    tr: 'Web sayfaları oluşturmak için standart işaretleme dili. İçerik yapısını tanımlamak için temel öneme sahiptir.',
    hv: 'Rhaenyō kostōbi gaomilaksir sikudeptātie. Valariponi gaomilaksior sȳngonomy.'
  },
  'CSS': {
    es: 'Lenguaje de hojas de estilo para diseñar y dar formato visual a páginas web. Permite controlar la apariencia y el diseño.',
    en: 'Style sheet language for designing and visually formatting web pages. Allows control over appearance and layout.',
    'en-us': 'Style sheet language for designing and visually formatting web pages. Allows control over appearance and layout.',
    'es-mx': 'Lenguaje de hojas de estilo para diseñar y dar formato visual a páginas web. Permite controlar la apariencia y el diseño.',
    pt: 'Linguagem de folhas de estilo para projetar e formatar visualmente páginas web. Permite controlar a aparência e o layout.',
    fr: 'Langage de feuilles de style pour concevoir et formater visuellement des pages web. Permet de contrôler l\'apparence et la mise en page.',
    de: 'Stylesheet-Sprache zum Gestalten und visuellen Formatieren von Webseiten. Ermöglicht die Kontrolle über Aussehen und Layout.',
    it: 'Linguaggio di fogli di stile per progettare e formattare visivamente le pagine web. Consente il controllo dell\'aspetto e del layout.',
    zh: '用于设计和视觉格式化网页的样式表语言。允许控制外观和布局。',
    ja: 'ウェブページをデザインし視覚的に整形するためのスタイルシート言語。外観とレイアウトを制御可能。',
    ru: 'Язык таблиц стилей для дизайна и визуального форматирования веб-страниц. Позволяет контролировать внешний вид и макет.',
    ar: 'لغة أوراق الأنماط لتصميم صفحات الويب وتنسيقها بصرياً. تتيح التحكم في المظهر والتخطيط.',
    hi: 'वेब पेज को डिजाइन करने और विज़ुअल फॉर्मेटिंग के लिए स्टाइल शीट भाषा। उपस्थिति और लेआउट पर नियंत्रण की अनुमति देता है।',
    ko: '웹 페이지를 디자인하고 시각적으로 포맷팅하기 위한 스타일시트 언어. 외관 및 레이아웃 제어를 가능하게 합니다.',
    nl: 'Stijlbladtaal voor het ontwerpen en visueel formatteren van webpagina\'s. Maakt controle over uiterlijk en layout mogelijk.',
    pl: 'Język arkuszy stylów do projektowania i formatowania wizualnego stron internetowych. Umożliwia kontrolę nad wyglądem i układem.',
    tr: 'Web sayfalarını tasarlamak ve görsel olarak biçimlendirmek için stil sayfası dili. Görünüm ve düzen üzerinde kontrol sağlar.',
    hv: 'Rhaenyō pāsȳghomy gaomilaksir sikudeptilaksir. Uhtyghir rhaenyrȳbroz mazvrȳpti.'
  },
  'Tailwind CSS': {
    es: 'Framework CSS utilitario que permite crear diseños personalizados rápidamente usando clases predefinidas. Optimizado para desarrollo ágil.',
    en: 'Utility-first CSS framework for rapidly building custom designs using predefined classes. Optimized for agile development.',
    'en-us': 'Utility-first CSS framework for rapidly building custom designs using predefined classes. Optimized for agile development.',
    'es-mx': 'Framework CSS utilitario que permite crear diseños personalizados rápidamente usando clases predefinidas. Optimizado para desarrollo ágil.',
    pt: 'Framework CSS utilitário que permite criar designs personalizados rapidamente usando classes predefinidas. Otimizado para desenvolvimento ágil.',
    fr: 'Framework CSS utilitaire permettant de créer rapidement des designs personnalisés à l\'aide de classes prédéfinies. Optimisé pour le développement agile.',
    de: 'Utility-First-CSS-Framework zum schnellen Erstellen benutzerdefinierter Designs mit vordefinierten Klassen. Optimiert für agile Entwicklung.',
    it: 'Framework CSS utility-first per creare rapidamente design personalizzati utilizzando classi predefinite. Ottimizzato per lo sviluppo agile.',
    zh: '实用程序优先的CSS框架，使用预定义的类快速构建自定义设计。针对敏捷开发进行了优化。',
    ja: '事前定義されたクラスを使用して、カスタムデザインを迅速に構築するためのユーティリティファーストCSSフレームワーク。アジャイル開発に最適化。',
    ru: 'Utility-first CSS-фреймворк для быстрого создания пользовательских дизайнов с использованием предопределенных классов. Оптимизирован для гибкой разработки.',
    ar: 'إطار عمل CSS يعطي الأولوية للوظائف لبناء تصميمات مخصصة بسرعة باستخدام فئات محددة مسبقًا. محسن للتطوير المرن.',
    hi: 'पूर्व-परिभाषित क्लासों का उपयोग करके तेजी से कस्टम डिजाइन बनाने के लिए यूटिलिटी-फर्स्ट सीएसएस फ्रेमवर्क। एजाइल डेवलपमेंट के लिए अनुकूलित।',
    ko: '사전 정의된 클래스를 사용하여 맞춤형 디자인을 빠르게 구축하기 위한 유틸리티 우선 CSS 프레임워크. 애자일 개발에 최적화되었습니다.',
    nl: 'Utility-first CSS-framework voor het snel bouwen van aangepaste ontwerpen met voorgedefinieerde klassen. Geoptimaliseerd voor agile ontwikkeling.',
    pl: 'Framework CSS typu utility-first do szybkiego tworzenia niestandardowych projektów przy użyciu predefiniowanych klas. Zoptymalizowany dla zwinnego rozwoju.',
    tr: 'Önceden tanımlanmış sınıfları kullanarak özel tasarımları hızla oluşturmak için utility-first CSS framework\'ü. Çevik geliştirme için optimize edilmiştir.',
    hv: 'Rhaenyō pāsȳghomy vestragon gaomilaksir sikudeptilaksir tembyr. Mazōrety sytilīby ropagon.'
  },
