// Archivo de configuración central para las descripciones de las skills (continuación)
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
  'JavaScript': {
    es: 'Lenguaje de programación versátil para crear contenido dinámico e interactivo en sitios web. Compatible con todos los navegadores modernos.',
    en: 'Versatile programming language for creating dynamic and interactive content on websites. Compatible with all modern browsers.',
    'en-us': 'Versatile programming language for creating dynamic and interactive content on websites. Compatible with all modern browsers.',
    'es-mx': 'Lenguaje de programación versátil para crear contenido dinámico e interactivo en sitios web. Compatible con todos los navegadores modernos.',
    pt: 'Linguagem de programação versátil para criar conteúdo dinâmico e interativo em sites. Compatível com todos os navegadores modernos.',
    fr: 'Langage de programmation polyvalent pour créer du contenu dynamique et interactif sur les sites web. Compatible avec tous les navigateurs modernes.',
    de: 'Vielseitige Programmiersprache zum Erstellen dynamischer und interaktiver Inhalte auf Websites. Kompatibel mit allen modernen Browsern.',
    it: 'Linguaggio di programmazione versatile per creare contenuti dinamici e interattivi sui siti web. Compatibile con tutti i browser moderni.',
    zh: '用于在网站上创建动态和交互式内容的多功能编程语言。与所有现代浏览器兼容。',
    ja: 'ウェブサイト上で動的でインタラクティブなコンテンツを作成するための多目的プログラミング言語。全ての現代的なブラウザと互換性あり。',
    ru: 'Универсальный язык программирования для создания динамического и интерактивного контента на веб-сайтах. Совместим со всеми современными браузерами.',
    ar: 'لغة برمجة متعددة الاستخدامات لإنشاء محتوى ديناميكي وتفاعلي على المواقع. متوافقة مع جميع المتصفحات الحديثة.',
    hi: 'वेबसाइटों पर गतिशील और इंटरैक्टिव सामग्री बनाने के लिए बहुमुखी प्रोग्रामिंग भाषा। सभी आधुनिक ब्राउज़रों के साथ संगत।',
    ko: '웹사이트에서 동적이고 상호작용하는 콘텐츠를 만들기 위한 다재다능한 프로그래밍 언어. 모든 현대 브라우저와 호환됩니다.',
    nl: 'Veelzijdige programmeertaal voor het creëren van dynamische en interactieve inhoud op websites. Compatibel met alle moderne browsers.',
    pl: 'Wszechstronny język programowania do tworzenia dynamicznych i interaktywnych treści na stronach internetowych. Kompatybilny ze wszystkimi nowoczesnymi przeglądarkami.',
    tr: 'Web sitelerinde dinamik ve etkileşimli içerik oluşturmak için çok yönlü programlama dili. Tüm modern tarayıcılarla uyumludur.',
    hv: 'Rhaenyō kodātyr vestragon sikagion gaomaksir. Syndrōñe lanta mirehī.'
  },
  'TypeScript': {
    es: 'Superset tipado de JavaScript que añade tipos estáticos opcionales. Mejora la calidad del código y la experiencia de desarrollo.',
    en: 'Typed superset of JavaScript that adds optional static types. Improves code quality and development experience.',
    'en-us': 'Typed superset of JavaScript that adds optional static types. Improves code quality and development experience.',
    'es-mx': 'Superset tipado de JavaScript que añade tipos estáticos opcionales. Mejora la calidad del código y la experiencia de desarrollo.',
    pt: 'Superconjunto tipado de JavaScript que adiciona tipos estáticos opcionais. Melhora a qualidade do código e a experiência de desenvolvimento.',
    fr: 'Sur-ensemble typé de JavaScript qui ajoute des types statiques optionnels. Améliore la qualité du code et l\'expérience de développement.',
    de: 'Typisiertes Superset von JavaScript, das optionale statische Typen hinzufügt. Verbessert die Codequalität und die Entwicklungserfahrung.',
    it: 'Superset tipizzato di JavaScript che aggiunge tipi statici opzionali. Migliora la qualità del codice e l\'esperienza di sviluppo.',
    zh: 'JavaScript 的类型化超集，增加了可选的静态类型。提高代码质量和开发体验。',
    ja: 'オプションの静的型を追加するJavaScriptの型付きスーパーセット。コード品質と開発体験を向上。',
    ru: 'Типизированный суперсет JavaScript, добавляющий необязательные статические типы. Улучшает качество кода и опыт разработки.',
    ar: 'مجموعة فائقة من JavaScript تضيف أنواعًا ثابتة اختيارية. يحسن جودة الكود وتجربة التطوير.',
    hi: 'जावास्क्रिप्ट का टाइप्ड सुपरसेट जो वैकल्पिक स्टैटिक टाइप्स जोड़ता है। कोड की गुणवत्ता और विकास अनुभव को बेहतर बनाता है।',
    ko: '선택적 정적 타입을 추가하는 JavaScript의 타입 지정 상위 집합. 코드 품질과 개발 경험을 향상시킵니다.',
    nl: 'Getypeerde superset van JavaScript die optionele statische typen toevoegt. Verbetert codekwaliteit en ontwikkelingservaring.',
    pl: 'Typowany nadzbiór JavaScript, który dodaje opcjonalne typy statyczne. Poprawia jakość kodu i doświadczenie programistyczne.',
    tr: 'JavaScript\'in isteğe bağlı statik tipler ekleyen tipli bir üst kümesi. Kod kalitesini ve geliştirme deneyimini iyileştirir.',
    hv: 'Skorkydor JavaScript se tubis sikagon. Gūrogon kodāty pōntyr sytilībin.'
  },
  'React': {
    es: 'Biblioteca JavaScript para construir interfaces de usuario con componentes reutilizables. Desarrollada por Facebook, permite crear aplicaciones web de una sola página.',
    en: 'JavaScript library for building user interfaces with reusable components. Developed by Facebook, allows creating single-page applications.',
    'en-us': 'JavaScript library for building user interfaces with reusable components. Developed by Facebook, allows creating single-page applications.',
    'es-mx': 'Biblioteca JavaScript para construir interfaces de usuario con componentes reutilizables. Desarrollada por Facebook, permite crear aplicaciones web de una sola página.',
    pt: 'Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis. Desenvolvida pelo Facebook, permite criar aplicações de página única.',
    fr: 'Bibliothèque JavaScript pour construire des interfaces utilisateur avec des composants réutilisables. Développée par Facebook, permet de créer des applications à page unique.',
    de: 'JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen mit wiederverwendbaren Komponenten. Von Facebook entwickelt, ermöglicht die Erstellung von Single-Page-Anwendungen.',
    it: 'Libreria JavaScript per costruire interfacce utente con componenti riutilizzabili. Sviluppata da Facebook, consente di creare applicazioni a pagina singola.',
    zh: '用于构建具有可重用组件的用户界面的JavaScript库。由Facebook开发，允许创建单页应用程序。',
    ja: '再利用可能なコンポーネントでユーザーインターフェースを構築するためのJavaScriptライブラリ。Facebookによって開発され、シングルページアプリケーションの作成が可能。',
    ru: 'Библиотека JavaScript для создания пользовательских интерфейсов с многоразовыми компонентами. Разработана Facebook, позволяет создавать одностраничные приложения.',
    ar: 'مكتبة JavaScript لبناء واجهات المستخدم باستخدام مكونات قابلة لإعادة الاستخدام. طورتها Facebook، وتسمح بإنشاء تطبيقات الصفحة الواحدة.',
    hi: 'पुन: प्रयोज्य कम्पोनेन्ट्स के साथ उपयोगकर्ता इंटरफेस बनाने के लिए जावास्क्रिप्ट लाइब्रेरी। फेसबुक द्वारा विकसित, एकल-पृष्ठ एप्लिकेशन बनाने की अनुमति देता है।',
    ko: '재사용 가능한 컴포넌트로 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리. Facebook에서 개발했으며 단일 페이지 애플리케이션을 만들 수 있습니다.',
    nl: 'JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces met herbruikbare componenten. Ontwikkeld door Facebook, maakt het mogelijk om single-page applicaties te creëren.',
    pl: 'Biblioteka JavaScript do budowania interfejsów użytkownika z wykorzystaniem komponentów wielokrotnego użytku. Opracowana przez Facebook, umożliwia tworzenie aplikacji jednostronicowych.',
    tr: 'Yeniden kullanılabilir bileşenlerle kullanıcı arayüzleri oluşturmak için JavaScript kütüphanesi. Facebook tarafından geliştirilmiş olup, tek sayfalık uygulamalar oluşturmaya olanak tanır.',
    hv: 'Ubrardy JavaScript hen uhtyghir uēpa iderenigon. Facebook morghor, sikagon gaomagon sikagon.'
  },
  'NextJS': {
    es: 'Framework React para aplicaciones web renderizadas por servidor con generación estática y dinámica. Ofrece enrutamiento, optimización y más características.',
    en: 'React framework for server-rendered web applications with static and dynamic generation. Offers routing, optimization, and more features.',
    'en-us': 'React framework for server-rendered web applications with static and dynamic generation. Offers routing, optimization, and more features.',
    'es-mx': 'Framework React para aplicaciones web renderizadas por servidor con generación estática y dinámica. Ofrece enrutamiento, optimización y más características.',
    pt: 'Framework React para aplicações web renderizadas pelo servidor com geração estática e dinâmica. Oferece roteamento, otimização e mais recursos.',
    fr: 'Framework React pour applications web rendues côté serveur avec génération statique et dynamique. Offre le routage, l\'optimisation et d\'autres fonctionnalités.',
    de: 'React-Framework für serverseitig gerenderte Webanwendungen mit statischer und dynamischer Generierung. Bietet Routing, Optimierung und weitere Funktionen.',
    it: 'Framework React per applicazioni web renderizzate lato server con generazione statica e dinamica. Offre routing, ottimizzazione e altre funzionalità.',
    zh: '用于服务器端渲染的React框架，支持静态和动态生成。提供路由、优化等功能。',
    ja: '静的および動的生成を備えたサーバーレンダリングウェブアプリケーション向けのReactフレームワーク。ルーティング、最適化などの機能を提供。',
    ru: 'React-фреймворк для серверного рендеринга веб-приложений со статической и динамической генерацией. Предлагает маршрутизацию, оптимизацию и другие функции.',
    ar: 'إطار عمل React لتطبيقات الويب المقدمة من الخادم مع التوليد الثابت والديناميكي. يوفر التوجيه والتحسين والمزيد من الميزات.',
    hi: 'स्टैटिक और डायनामिक जेनरेशन के साथ सर्वर-रेंडर्ड वेब एप्लिकेशन के लिए रिएक्ट फ्रेमवर्क। राउटिंग, ऑप्टिमाइजेशन, और अधिक सुविधाएँ प्रदान करता है।',
    ko: '정적 및 동적 생성이 가능한 서버 렌더링 웹 애플리케이션을 위한 React 프레임워크. 라우팅, 최적화 등의 기능을 제공합니다.',
    nl: 'React-framework voor server-gerenderde webapplicaties met statische en dynamische generatie. Biedt routing, optimalisatie en meer functies.',
    pl: 'Framework React do aplikacji internetowych renderowanych po stronie serwera z generowaniem statycznym i dynamicznym. Oferuje routing, optymalizację i więcej funkcji.',
    tr: 'Statik ve dinamik oluşturma ile sunucu tarafında işlenen web uygulamaları için React framework\'ü. Yönlendirme, optimizasyon ve daha fazla özellik sunar.',
    hv: 'Zyhossyr React hen kostōbi gaomagon sikudeptor. Urnen daomior, ñuhomy se tolmiot.'
  },
  
  // Backend y herramientas
  'NodeJS': {
    es: 'Entorno de ejecución de JavaScript en el servidor basado en el motor V8 de Chrome. Permite construir aplicaciones de red escalables.',
    en: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side applications. Allows building scalable network applications.',
    'en-us': 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side applications. Allows building scalable network applications.',
    'es-mx': 'Entorno de ejecución de JavaScript en el servidor basado en el motor V8 de Chrome. Permite construir aplicaciones de red escalables.',
    pt: 'Ambiente de execução JavaScript construído no motor V8 do Chrome para aplicações do lado do servidor. Permite construir aplicações de rede escaláveis.',
    fr: 'Environnement d\'exécution JavaScript basé sur le moteur V8 de Chrome pour les applications côté serveur. Permet de construire des applications réseau évolutives.',
    de: 'JavaScript-Laufzeitumgebung auf Basis der Chrome V8 JavaScript-Engine für serverseitige Anwendungen. Ermöglicht den Aufbau skalierbarer Netzwerkanwendungen.',
    it: 'Runtime JavaScript costruito sul motore V8 di Chrome per applicazioni lato server. Consente di creare applicazioni di rete scalabili.',
    zh: '基于Chrome的V8 JavaScript引擎构建的JavaScript运行时，用于服务器端应用程序。允许构建可扩展的网络应用程序。',
    ja: 'Chrome V8 JavaScriptエンジンに基づいたサーバーサイドアプリケーション向けのJavaScriptランタイム。スケーラブルなネットワークアプリケーションの構築が可能。',
    ru: 'Среда выполнения JavaScript, построенная на движке V8 Chrome для серверных приложений. Позволяет создавать масштабируемые сетевые приложения.',
    ar: 'بيئة تشغيل JavaScript مبنية على محرك V8 JavaScript من Chrome للتطبيقات من جانب الخادم. يسمح ببناء تطبيقات شبكة قابلة للتوسع.',
    hi: 'सर्वर-साइड एप्लिकेशन के लिए Chrome के V8 JavaScript इंजन पर बना JavaScript रनटाइम। स्केलेबल नेटवर्क एप्लिकेशन बनाने की अनुमति देता है।',
    ko: '서버 측 애플리케이션을 위한 Chrome의 V8 JavaScript 엔진을 기반으로 구축된 JavaScript 런타임. 확장 가능한 네트워크 애플리케이션을 구축할 수 있습니다.',
    nl: 'JavaScript-runtime gebouwd op Chrome\'s V8 JavaScript-engine voor server-side applicaties. Maakt het mogelijk om schaalbare netwerkapplicaties te bouwen.',
    pl: 'Środowisko uruchomieniowe JavaScript zbudowane na silniku JavaScript V8 Chrome\'a dla aplikacji po stronie serwera. Umożliwia budowanie skalowalnych aplikacji sieciowych.',
    tr: 'Chrome\'un V8 JavaScript motoruyla oluşturulmuş, sunucu tarafı uygulamalar için JavaScript çalışma zamanı. Ölçeklenebilir ağ uygulamaları oluşturmaya olanak tanır.',
    hv: 'JavaScript tubir Chrome V8 ropagos hen hūchtys. Sikagon vestragon sīgrun.'
  },
  'Docker': {
    es: 'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Simplifica la configuración de entornos y el despliegue.',
    en: 'Platform for developing, shipping, and running applications in containers. Simplifies environment setup and deployment.',
    'en-us': 'Platform for developing, shipping, and running applications in containers. Simplifies environment setup and deployment.',
    'es-mx': 'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores. Simplifica la configuración de entornos y el despliegue.',
    pt: 'Plataforma para desenvolver, enviar e executar aplicações em contêineres. Simplifica a configuração de ambientes e a implantação.',
    fr: 'Plateforme pour développer, livrer et exécuter des applications dans des conteneurs. Simplifie la configuration de l\'environnement et le déploiement.',
    de: 'Plattform zum Entwickeln, Ausliefern und Ausführen von Anwendungen in Containern. Vereinfacht die Umgebungseinrichtung und -bereitstellung.',
    it: 'Piattaforma per sviluppare, distribuire ed eseguire applicazioni in container. Semplifica la configurazione dell\'ambiente e il deployment.',
    zh: '用于在容器中开发、交付和运行应用程序的平台。简化环境设置和部署。',
    ja: 'コンテナでアプリケーションを開発、配信、実行するためのプラットフォーム。環境設定とデプロイメントを簡素化。',
    ru: 'Платформа для разработки, доставки и запуска приложений в контейнерах. Упрощает настройку среды и развертывание.',
    ar: 'منصة لتطوير وشحن وتشغيل التطبيقات في حاويات. يبسط إعداد البيئة والنشر.',
    hi: 'कंटेनरों में एप्लिकेशन डेवलप, शिप और रन करने के लिए प्लेटफॉर्म। एनवायरनमेंट सेटअप और डिप्लॉयमेंट को सरल बनाता है।',
    ko: '컨테이너에서 애플리케이션을 개발, 배포 및 실행하기 위한 플랫폼. 환경 설정 및 배포를 단순화합니다.',
    nl: 'Platform voor het ontwikkelen, verzenden en uitvoeren van applicaties in containers. Vereenvoudigt omgevingsconfiguratie en implementatie.',
    pl: 'Platforma do tworzenia, dostarczania i uruchamiania aplikacji w kontenerach. Upraszcza konfigurację środowiska i wdrażanie.',
    tr: 'Konteynerlerde uygulama geliştirme, gönderme ve çalıştırma platformu. Ortam kurulumunu ve dağıtımını basitleştirir.',
    hv: 'Tubir gaomagon, urnen, se udra hen uēpa. Māzigonty urnen se udra.'
  },
  'Git': {
    es: 'Sistema de control de versiones distribuido diseñado para manejar proyectos pequeños y grandes con velocidad y eficiencia.',
    en: 'Distributed version control system designed to handle projects of all sizes with speed and efficiency.',
    'en-us': 'Distributed version control system designed to handle projects of all sizes with speed and efficiency.',
    'es-mx': 'Sistema de control de versiones distribuido diseñado para manejar proyectos pequeños y grandes con velocidad y eficiencia.',
    pt: 'Sistema de controle de versão distribuído projetado para lidar com projetos de todos os tamanhos com velocidade e eficiência.',
    fr: 'Système de contrôle de version distribué conçu pour gérer des projets de toutes tailles avec rapidité et efficacité.',
    de: 'Verteiltes Versionskontrollsystem, das für die schnelle und effiziente Handhabung von Projekten aller Größenordnungen konzipiert ist.',
    it: 'Sistema di controllo versione distribuito progettato per gestire progetti di tutte le dimensioni con velocità ed efficienza.',
    zh: '分布式版本控制系统，旨在以速度和效率处理各种规模的项目。',
    ja: 'あらゆる規模のプロジェクトを速度と効率性で扱うために設計された分散型バージョン管理システム。',
    ru: 'Распределенная система контроля версий, предназначенная для быстрой и эффективной обработки проектов любого размера.',
    ar: 'نظام تحكم بالإصدارات موزع مصمم للتعامل مع المشاريع بجميع أحجامها بسرعة وكفاءة.',
    hi: 'वितरित वर्शन कंट्रोल सिस्टम जो हर आकार के प्रोजेक्ट को स्पीड और कुशलता से संभालने के लिए डिज़ाइन किया गया है।',
    ko: '모든 크기의 프로젝트를 빠르고 효율적으로 처리하도록 설계된 분산 버전 제어 시스템.',
    nl: 'Gedistribueerd versiebeheersysteem ontworpen om projecten van alle groottes met snelheid en efficiëntie te verwerken.',
    pl: 'Rozproszony system kontroli wersji zaprojektowany do obsługi projektów każdej wielkości z szybkością i wydajnością.',
    tr: 'Her boyuttaki projeyi hız ve verimlilikle ele almak için tasarlanmış dağıtılmış sürüm kontrol sistemi.',
    hv: 'Vestragon grādāzma dubys udra gaomagon kehos māzigon se ubrar.'
  },
  'GitHub': {
    es: 'Plataforma de alojamiento de código para control de versiones y colaboración. Permite a los equipos trabajar juntos en proyectos desde cualquier lugar.',
    en: 'Code hosting platform for version control and collaboration. Allows teams to work together on projects from anywhere.',
    'en-us': 'Code hosting platform for version control and collaboration. Allows teams to work together on projects from anywhere.',
    'es-mx': 'Plataforma de alojamiento de código para control de versiones y colaboración. Permite a los equipos trabajar juntos en proyectos desde cualquier lugar.',
    pt: 'Plataforma de hospedagem de código para controle de versão e colaboração. Permite que equipes trabalhem juntas em projetos de qualquer lugar.',
    fr: 'Plateforme d\'hébergement de code pour le contrôle de version et la collaboration. Permet aux équipes de travailler ensemble sur des projets depuis n\'importe où.',
    de: 'Code-Hosting-Plattform für Versionskontrolle und Zusammenarbeit. Ermöglicht Teams, von überall an Projekten zusammenzuarbeiten.',
    it: 'Piattaforma di hosting di codice per il controllo versione e la collaborazione. Consente ai team di lavorare insieme ai progetti da qualsiasi luogo.',
    zh: '用于版本控制和协作的代码托管平台。允许团队从任何地方一起合作开展项目。',
    ja: 'バージョン管理とコラボレーションのためのコードホスティングプラットフォーム。チームがどこからでもプロジェクトで一緒に作業することを可能にします。',
    ru: 'Платформа для хостинга кода, контроля версий и совместной работы. Позволяет командам работать вместе над проектами из любого места.',
    ar: 'منصة استضافة الكود للتحكم في الإصدار والتعاون. تسمح للفرق بالعمل معًا في المشاريع من أي مكان.',
    hi: 'वर्शन कंट्रोल और कोलैबोरेशन के लिए कोड होस्टिंग प्लेटफॉर्म। टीमों को कहीं से भी प्रोजेक्ट पर एक साथ काम करने की अनुमति देता है।',
    ko: '버전 제어 및 협업을 위한 코드 호스팅 플랫폼. 팀이 어디서나 프로젝트에서 함께 작업할 수 있게 합니다.',
    nl: 'Code hosting platform voor versiecontrole en samenwerking. Stelt teams in staat om overal samen aan projecten te werken.',
    pl: 'Platforma hostingowa kodu do kontroli wersji i współpracy. Umożliwia zespołom wspólną pracę nad projektami z dowolnego miejsca.',
    tr: 'Sürüm kontrolü ve işbirliği için kod barındırma platformu. Ekiplerin herhangi bir yerden projeler üzerinde birlikte çalışmasına olanak tanır.',
    hv: 'Tubir aōghar hen grādāzma se iderbagon. Unsyn sētaga naejot dubys glaeson vestragon.'
  },
  
  // Sistemas Operativos
  'Windows': {
    es: 'Sistema operativo de Microsoft para ordenadores personales. Ampliamente utilizado en entornos empresariales y domésticos.',
    en: 'Microsoft operating system for personal computers. Widely used in business and home environments.',
    'en-us': 'Microsoft operating system for personal computers. Widely used in business and home environments.',
    'es-mx': 'Sistema operativo de Microsoft para ordenadores personales. Ampliamente utilizado en entornos empresariales y domésticos.',
    pt: 'Sistema operacional da Microsoft para computadores pessoais. Amplamente utilizado em ambientes empresariais e domésticos.',
    fr: 'Système d\'exploitation Microsoft pour ordinateurs personnels. Largement utilisé dans les environnements professionnels et domestiques.',
    de: 'Betriebssystem von Microsoft für Personal Computer. Weit verbreitet in Unternehmens- und Heimumgebungen.',
    it: 'Sistema operativo Microsoft per computer personali. Ampiamente utilizzato in ambienti aziendali e domestici.',
    zh: '微软为个人计算机开发的操作系统。在商业和家庭环境中广泛使用。',
    ja: '個人用コンピューター向けのMicrosoftオペレーティングシステム。ビジネスおよび家庭環境で広く使用されています。',
    ru: 'Операционная система Microsoft для персональных компьютеров. Широко используется в бизнес-среде и домашних условиях.',
    ar: 'نظام تشغيل Microsoft لأجهزة الكمبيوتر الشخصية. يستخدم على نطاق واسع في بيئات الأعمال والمنازل.',
    hi: 'पर्सनल कंप्यूटर के लिए माइक्रोसॉफ्ट ऑपरेटिंग सिस्टम। व्यापार और घरेलू वातावरण में व्यापक रूप से उपयोग किया जाता है।',
    ko: '개인용 컴퓨터를 위한 Microsoft 운영 체제. 비즈니스 및 가정 환경에서 널리 사용됩니다.',
    nl: 'Microsoft-besturingssysteem voor persoonlijke computers. Veel gebruikt in zakelijke en thuisomgevingen.',
    pl: 'System operacyjny Microsoft dla komputerów osobistych. Szeroko stosowany w środowiskach biznesowych i domowych.',
    tr: 'Kişisel bilgisayarlar için Microsoft işletim sistemi. İş ve ev ortamlarında yaygın olarak kullanılır.',
    hv: 'Microsoft gundytyr lī dohaerza. Bē udra gaomilaksir.'
  },
  'MacOS': {
    es: 'Sistema operativo de Apple para ordenadores Mac. Conocido por su estabilidad, seguridad y experiencia de usuario pulida.',
    en: 'Apple operating system for Mac computers. Known for its stability, security, and polished user experience.',
    'en-us': 'Apple operating system for Mac computers. Known for its stability, security, and polished user experience.',
    'es-mx': 'Sistema operativo de Apple para ordenadores Mac. Conocido por su estabilidad, seguridad y experiencia de usuario pulida.',
    pt: 'Sistema operacional da Apple para computadores Mac. Conhecido por sua estabilidade, segurança e experiência de usuário refinada.',
    fr: 'Système d\'exploitation Apple pour ordinateurs Mac. Connu pour sa stabilité, sa sécurité et son expérience utilisateur soignée.',
    de: 'Apple-Betriebssystem für Mac-Computer. Bekannt für seine Stabilität, Sicherheit und polierte Benutzererfahrung.',
    it: 'Sistema operativo Apple per computer Mac. Noto per la sua stabilità, sicurezza ed esperienza utente raffinata.',
    zh: 'Apple为Mac电脑开发的操作系统。以其稳定性、安全性和精致的用户体验而闻名。',
    ja: 'Macコンピューター向けのAppleオペレーティングシステム。その安定性、セキュリティ、洗練されたユーザー体験で知られています。',
    ru: 'Операционная система Apple для компьютеров Mac. Известна своей стабильностью, безопасностью и отточенным пользовательским опытом.',
    ar: 'نظام تشغيل Apple لأجهزة كمبيوتر Mac. معروف باستقراره وأمانه وتجربة المستخدم المصقولة.',
    hi: 'मैक कंप्यूटर के लिए एप्पल ऑपरेटिंग सिस्टम। अपनी स्थिरता, सुरक्षा और परिष्कृत उपयोगकर्ता अनुभव के लिए जाना जाता है।',
    ko: 'Mac 컴퓨터용 Apple 운영 체제. 안정성, 보안 및 세련된 사용자 경험으로 유명합니다.',
    nl: 'Apple-besturingssysteem voor Mac-computers. Bekend om zijn stabiliteit, veiligheid en gepolijste gebruikerservaring.',
    pl: 'System operacyjny Apple dla komputerów Mac. Znany ze stabilności, bezpieczeństwa i dopracowanego doświadczenia użytkownika.',
    tr: 'Mac bilgisayarlar için Apple işletim sistemi. Kararlılığı, güvenliği ve cilalı kullanıcı deneyimi ile tanınır.',
    hv: 'Apple gundytyr lī Mac dohaerza. Sikagon sytedhy se syndrōñoty.'
  }
};

// Exportamos también por categorías para facilitar su uso
export const skillCategories = {
  frontend: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Astro', 'Vite'],
  backend: ['NodeJS', 'Deno', 'ExpressJS', 'Bun'],
  database: ['MongoDB', 'Supabase', 'MySQL', 'Stripe', 'Graphql', 'Strapi'],
  tools: ['Docker', 'Git', 'GitHub', 'Npm', 'Pnpm', 'Vercel', 'C++', 'Phaser'],
  os: ['Windows', 'MacOS', 'Debian', 'Kali']
};

// Función para obtener la categoría según el nombre
export const getCategoryByName = (name: string): string => {
  if (skillCategories.frontend.includes(name)) return 'frontend';
  if (skillCategories.backend.includes(name)) return 'backend';
  if (skillCategories.database.includes(name)) return 'database';
  if (skillCategories.os.includes(name)) return 'os';
  if (skillCategories.tools.includes(name)) return 'tools';
  return 'framework';
};

// Función para obtener la experiencia recomendada basada en la skill
export const getRecommendedExperience = (name: string): number => {
  // Personaliza estos valores según tus niveles de experiencia reales
  const highExperience = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Tailwind CSS', 'Git', 'GitHub', 'Astro', 'NodeJS'];
  const mediumHighExperience = ['Vite', 'MongoDB', 'Supabase', 'MacOS', 'Windows', 'Vercel', 'Npm', 'Pnpm'];
  const mediumExperience = ['Docker', 'ExpressJS', 'MySQL', 'Debian', 'Bun'];
  const lowMediumExperience = ['Phaser', 'Stripe', 'Graphql', 'Strapi', 'Kali'];
  const lowExperience = ['Deno', 'C++'];

  if (highExperience.includes(name)) return 5;
  if (mediumHighExperience.includes(name)) return 4;
  if (mediumExperience.includes(name)) return 3;
  if (lowMediumExperience.includes(name)) return 2;
  if (lowExperience.includes(name)) return 1;
  
  return 3; // Valor por defecto
};
