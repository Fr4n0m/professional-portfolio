// Archivo de configuración para las descripciones de habilidades de animación y movimiento
// Múltiples idiomas soportados

type SkillDescription = {
  [lang: string]: string;
};

type SkillDescriptions = {
  [skill: string]: SkillDescription;
};

export const animationSkillDescriptions: SkillDescriptions = {
  'GSAP': {
    es: 'Biblioteca profesional de animación JavaScript con rendimiento superior. Ideal para animaciones complejas, secuencias y efectos avanzados en interfaces web y experiencias interactivas.',
    en: 'Professional JavaScript animation library with superior performance. Ideal for complex animations, sequences, and advanced effects in web interfaces and interactive experiences.',
    'en-us': 'Professional JavaScript animation library with superior performance. Ideal for complex animations, sequences, and advanced effects in web interfaces and interactive experiences.',
    'es-mx': 'Biblioteca profesional de animación JavaScript con rendimiento superior. Ideal para animaciones complejas, secuencias y efectos avanzados en interfaces web y experiencias interactivas.',
    pt: 'Biblioteca profissional de animação JavaScript com desempenho superior. Ideal para animações complexas, sequências e efeitos avançados em interfaces web e experiências interativas.',
    fr: 'Bibliothèque professionnelle d\'animation JavaScript avec des performances supérieures. Idéale pour les animations complexes, les séquences et les effets avancés dans les interfaces web et les expériences interactives.',
    de: 'Professionelle JavaScript-Animationsbibliothek mit überlegener Leistung. Ideal für komplexe Animationen, Sequenzen und fortschrittliche Effekte in Webschnittstellen und interaktiven Erlebnissen.',
    it: 'Libreria professionale di animazione JavaScript con prestazioni superiori. Ideale per animazioni complesse, sequenze ed effetti avanzati nelle interfacce web e nelle esperienze interattive.',
    zh: '具有卓越性能的专业JavaScript动画库。非常适合网页界面和交互体验中的复杂动画、序列和高级效果。',
    ja: '優れたパフォーマンスを持つプロフェッショナルなJavaScriptアニメーションライブラリ。Webインターフェースやインタラクティブな体験における複雑なアニメーション、シーケンス、高度なエフェクトに最適。',
    ru: 'Профессиональная библиотека анимации JavaScript с превосходной производительностью. Идеально подходит для сложных анимаций, последовательностей и расширенных эффектов в веб-интерфейсах и интерактивных средах.',
    ar: 'مكتبة رسوم متحركة JavaScript احترافية ذات أداء متفوق. مثالية للرسوم المتحركة المعقدة والتسلسلات والتأثيرات المتقدمة في واجهات الويب والتجارب التفاعلية.',
    hi: 'बेहतर प्रदर्शन के साथ प्रोफेशनल जावास्क्रिप्ट एनिमेशन लाइब्रेरी। वेब इंटरफेस और इंटरएक्टिव अनुभवों में जटिल एनिमेशन, सीक्वेंस और एडवांस्ड इफेक्ट्स के लिए आदर्श।',
    ko: '우수한 성능을 갖춘 전문 JavaScript 애니메이션 라이브러리. 웹 인터페이스 및 인터랙티브 경험에서 복잡한 애니메이션, 시퀀스 및 고급 효과에 이상적입니다.',
    nl: 'Professionele JavaScript-animatiebibliotheek met superieure prestaties. Ideaal voor complexe animaties, sequenties en geavanceerde effecten in webinterfaces en interactieve ervaringen.',
    pl: 'Profesjonalna biblioteka animacji JavaScript o doskonałej wydajności. Idealna do złożonych animacji, sekwencji i zaawansowanych efektów w interfejsach internetowych i interaktywnych doświadczeniach.',
    tr: 'Üstün performansa sahip profesyonel JavaScript animasyon kütüphanesi. Web arayüzlerinde ve etkileşimli deneyimlerde karmaşık animasyonlar, sekanslar ve gelişmiş efektler için idealdir.',
    hv: 'Kostōbi JavaScript uēpa tubir isse tembyr ropagon. Tembyr hen mazmpār uēpagon, syndrōñor, se tubys mazilza hen sikudeptor.'
  },
  'Framer Motion': {
    es: 'Biblioteca de animación declarativa para React que simplifica la creación de interfaces animadas complejas. Ofrece gestos, transiciones y efectos de movimiento con un API intuitivo.',
    en: 'Declarative animation library for React that simplifies creating complex animated interfaces. Offers gestures, transitions, and motion effects with an intuitive API.',
    'en-us': 'Declarative animation library for React that simplifies creating complex animated interfaces. Offers gestures, transitions, and motion effects with an intuitive API.',
    'es-mx': 'Biblioteca de animación declarativa para React que simplifica la creación de interfaces animadas complejas. Ofrece gestos, transiciones y efectos de movimiento con un API intuitivo.',
    pt: 'Biblioteca de animação declarativa para React que simplifica a criação de interfaces animadas complexas. Oferece gestos, transições e efeitos de movimento com uma API intuitiva.',
    fr: 'Bibliothèque d\'animation déclarative pour React qui simplifie la création d\'interfaces animées complexes. Offre des gestes, des transitions et des effets de mouvement avec une API intuitive.',
    de: 'Deklarative Animationsbibliothek für React, die das Erstellen komplexer animierter Schnittstellen vereinfacht. Bietet Gesten, Übergänge und Bewegungseffekte mit einer intuitiven API.',
    it: 'Libreria di animazione dichiarativa per React che semplifica la creazione di interfacce animate complesse. Offre gesti, transizioni ed effetti di movimento con un\'API intuitiva.',
    zh: '用于React的声明式动画库，简化了创建复杂动画界面的过程。通过直观的API提供手势、过渡和动作效果。',
    ja: 'Reactのための宣言的アニメーションライブラリで、複雑なアニメーションインターフェースの作成を簡素化します。直感的なAPIでジェスチャー、トランジション、モーションエフェクトを提供します。',
    ru: 'Декларативная библиотека анимации для React, которая упрощает создание сложных анимированных интерфейсов. Предлагает жесты, переходы и эффекты движения с интуитивно понятным API.',
    ar: 'مكتبة رسوم متحركة تصريحية لـ React تبسط إنشاء واجهات متحركة معقدة. توفر إيماءات وانتقالات وتأثيرات حركة مع واجهة برمجة تطبيقات بديهية.',
    hi: 'रिएक्ट के लिए डिक्लेरेटिव एनिमेशन लाइब्रेरी जो जटिल एनिमेटेड इंटरफेस बनाना सरल बनाती है। इंटूटिव API के साथ जेस्चर, ट्रांजिशन और मोशन इफेक्ट्स प्रदान करती है।',
    ko: 'React를 위한 선언적 애니메이션 라이브러리로 복잡한 애니메이션 인터페이스 생성을 단순화합니다. 직관적인 API로 제스처, 전환 및 모션 효과를 제공합니다.',
    nl: 'Declaratieve animatiebibliotheek voor React die het maken van complexe geanimeerde interfaces vereenvoudigt. Biedt gebaren, overgangen en bewegingseffecten met een intuïtieve API.',
    pl: 'Deklaratywna biblioteka animacji dla React, która upraszcza tworzenie złożonych animowanych interfejsów. Oferuje gesty, przejścia i efekty ruchu z intuicyjnym API.',
    tr: 'Karmaşık animasyonlu arayüzler oluşturmayı basitleştiren React için bildirimsel animasyon kütüphanesi. Sezgisel bir API ile jestler, geçişler ve hareket efektleri sunar.',
    hv: 'Zōbrie uēpa tubir hen React se māzigon gaomagon mazmpār uēpagon sikudeptor. Tubis azantyr, urnenka, se uēpa mazilza isse intuitive API.'
  },
  'Motion Design': {
    es: 'Disciplina creativa que combina diseño gráfico, animación y narración visual para crear elementos interactivos atractivos y experiencias de usuario dinámicas en productos digitales.',
    en: 'Creative discipline that combines graphic design, animation, and visual storytelling to create engaging interactive elements and dynamic user experiences in digital products.',
    'en-us': 'Creative discipline that combines graphic design, animation, and visual storytelling to create engaging interactive elements and dynamic user experiences in digital products.',
    'es-mx': 'Disciplina creativa que combina diseño gráfico, animación y narración visual para crear elementos interactivos atractivos y experiencias de usuario dinámicas en productos digitales.',
    pt: 'Disciplina criativa que combina design gráfico, animação e narrativa visual para criar elementos interativos envolventes e experiências de usuário dinâmicas em produtos digitais.',
    fr: 'Discipline créative qui combine design graphique, animation et narration visuelle pour créer des éléments interactifs attrayants et des expériences utilisateur dynamiques dans les produits numériques.',
    de: 'Kreative Disziplin, die Grafikdesign, Animation und visuelles Storytelling kombiniert, um ansprechende interaktive Elemente und dynamische Benutzererfahrungen in digitalen Produkten zu schaffen.',
    it: 'Disciplina creativa che combina design grafico, animazione e storytelling visivo per creare elementi interattivi coinvolgenti ed esperienze utente dinamiche nei prodotti digitali.',
    zh: '创意学科，结合了图形设计、动画和视觉叙事，在数字产品中创建吸引人的交互元素和动态用户体验。',
    ja: 'グラフィックデザイン、アニメーション、ビジュアルストーリーテリングを組み合わせた創造的な分野で、デジタル製品に魅力的なインタラクティブ要素とダイナミックなユーザー体験を作成します。',
    ru: 'Творческая дисциплина, сочетающая графический дизайн, анимацию и визуальное повествование для создания увлекательных интерактивных элементов и динамичного пользовательского опыта в цифровых продуктах.',
    ar: 'انضباط إبداعي يجمع بين التصميم الجرافيكي والرسوم المتحركة ورواية القصص المرئية لإنشاء عناصر تفاعلية جذابة وتجارب مستخدم ديناميكية في المنتجات الرقمية.',
    hi: 'क्रिएटिव डिसिप्लिन जो ग्राफिक डिज़ाइन, एनिमेशन और विज़ुअल स्टोरीटेलिंग को जोड़कर डिजिटल प्रोडक्ट्स में आकर्षक इंटरैक्टिव एलिमेंट्स और डायनामिक यूजर एक्सपीरियंस बनाती है।',
    ko: '그래픽 디자인, 애니메이션 및 시각적 스토리텔링을 결합하여 디지털 제품에서 매력적인 인터랙티브 요소와 동적인 사용자 경험을 만드는 창의적인 분야입니다.',
    nl: 'Creatieve discipline die grafisch ontwerp, animatie en visuele storytelling combineert om boeiende interactieve elementen en dynamische gebruikerservaringen in digitale producten te creëren.',
    pl: 'Kreatywna dyscyplina łącząca projektowanie graficzne, animację i wizualne opowiadanie historii w celu tworzenia angażujących elementów interaktywnych i dynamicznych doświadczeń użytkownika w produktach cyfrowych.',
    tr: 'Dijital ürünlerde ilgi çekici etkileşimli öğeler ve dinamik kullanıcı deneyimleri oluşturmak için grafik tasarım, animasyon ve görsel hikaye anlatımını birleştiren yaratıcı disiplin.',
    hv: 'Tubis ropagon se kombagon graphics design, uēpa, se visual story-telling naejot gaomagon sikudeptor sikagon mazmpār se dynamic user iderenigon hen digital udlissy.'
  },
  'Animation': {
    es: 'Arte de crear la ilusión de movimiento mediante secuencias de imágenes. Fundamental para mejorar la experiencia de usuario, proporcionar feedback visual y guiar la atención en interfaces digitales.',
    en: 'Art of creating the illusion of movement through sequences of images. Fundamental for enhancing user experience, providing visual feedback, and guiding attention in digital interfaces.',
    'en-us': 'Art of creating the illusion of movement through sequences of images. Fundamental for enhancing user experience, providing visual feedback, and guiding attention in digital interfaces.',
    'es-mx': 'Arte de crear la ilusión de movimiento mediante secuencias de imágenes. Fundamental para mejorar la experiencia de usuario, proporcionar feedback visual y guiar la atención en interfaces digitales.',
    pt: 'Arte de criar a ilusão de movimento através de sequências de imagens. Fundamental para melhorar a experiência do usuário, fornecer feedback visual e guiar a atenção em interfaces digitais.',
    fr: 'Art de créer l\'illusion du mouvement à travers des séquences d\'images. Fondamental pour améliorer l\'expérience utilisateur, fournir un retour visuel et guider l\'attention dans les interfaces numériques.',
    de: 'Kunst, die Illusion von Bewegung durch Bildsequenzen zu erzeugen. Grundlegend für die Verbesserung der Benutzererfahrung, die Bereitstellung visuellen Feedbacks und die Lenkung der Aufmerksamkeit in digitalen Schnittstellen.',
    it: 'Arte di creare l\'illusione del movimento attraverso sequenze di immagini. Fondamentale per migliorare l\'esperienza utente, fornire feedback visivo e guidare l\'attenzione nelle interfacce digitali.',
    zh: '通过图像序列创造运动错觉的艺术。对于增强用户体验、提供视觉反馈和引导数字界面中的注意力至关重要。',
    ja: '画像のシーケンスを通じて動きの錯覚を作り出す芸術。ユーザー体験の向上、視覚的フィードバックの提供、デジタルインターフェースでの注意の誘導に不可欠です。',
    ru: 'Искусство создания иллюзии движения с помощью последовательностей изображений. Имеет фундаментальное значение для улучшения пользовательского опыта, предоставления визуальной обратной связи и привлечения внимания в цифровых интерфейсах.',
    ar: 'فن خلق وهم الحركة من خلال تسلسل الصور. أساسي لتعزيز تجربة المستخدم، وتوفير تغذية راجعة بصرية، وتوجيه الانتباه في الواجهات الرقمية.',
    hi: 'इमेजेज के सीक्वेंस के माध्यम से मूवमेंट का इल्यूज़न बनाने की कला। यूजर एक्सपीरियंस को बेहतर बनाने, विज़ुअल फीडबैक प्रदान करने और डिजिटल इंटरफेस में अटेंशन गाइड करने के लिए फंडामेंटल।',
    ko: '이미지 시퀀스를 통해 움직임의 환상을 만드는 예술. 사용자 경험 향상, 시각적 피드백 제공 및 디지털 인터페이스에서 주의를 유도하는 데 기본적입니다.',
    nl: 'Kunst van het creëren van de illusie van beweging door middel van beeldsequenties. Fundamenteel voor het verbeteren van de gebruikerservaring, het geven van visuele feedback en het sturen van aandacht in digitale interfaces.',
    pl: 'Sztuka tworzenia iluzji ruchu poprzez sekwencje obrazów. Fundamentalna dla poprawy doświadczenia użytkownika, zapewniania wizualnej informacji zwrotnej i kierowania uwagą w interfejsach cyfrowych.',
    tr: 'Görüntü dizileri yoluyla hareket yanılsaması yaratma sanatı. Kullanıcı deneyimini geliştirmek, görsel geri bildirim sağlamak ve dijital arayüzlerde dikkati yönlendirmek için temeldir.',
    hv: 'Tubis hen gaomagon uēpa pōja hen uēpagon. Valaripa hen gūrogon user iderenigon, tubis visual feedback, se tubos mazōptan hen digital sikudeptor.'
  },
  'Web Animation': {
    es: 'Técnicas y tecnologías para añadir movimiento y efectos dinámicos a sitios web. Combina HTML, CSS, JavaScript y diversas bibliotecas para crear experiencias web interactivas y visualmente atractivas.',
    en: 'Techniques and technologies for adding movement and dynamic effects to websites. Combines HTML, CSS, JavaScript, and various libraries to create interactive and visually appealing web experiences.',
    'en-us': 'Techniques and technologies for adding movement and dynamic effects to websites. Combines HTML, CSS, JavaScript, and various libraries to create interactive and visually appealing web experiences.',
    'es-mx': 'Técnicas y tecnologías para añadir movimiento y efectos dinámicos a sitios web. Combina HTML, CSS, JavaScript y diversas bibliotecas para crear experiencias web interactivas y visualmente atractivas.',
    pt: 'Técnicas e tecnologias para adicionar movimento e efeitos dinâmicos a sites. Combina HTML, CSS, JavaScript e várias bibliotecas para criar experiências web interativas e visualmente atraentes.',
    fr: 'Techniques et technologies pour ajouter du mouvement et des effets dynamiques aux sites web. Combine HTML, CSS, JavaScript et diverses bibliothèques pour créer des expériences web interactives et visuellement attrayantes.',
    de: 'Techniken und Technologien zum Hinzufügen von Bewegung und dynamischen Effekten zu Websites. Kombiniert HTML, CSS, JavaScript und verschiedene Bibliotheken, um interaktive und visuell ansprechende Web-Erlebnisse zu schaffen.',
    it: 'Tecniche e tecnologie per aggiungere movimento ed effetti dinamici ai siti web. Combina HTML, CSS, JavaScript e varie librerie per creare esperienze web interattive e visivamente accattivanti.',
    zh: '为网站添加运动和动态效果的技术。结合HTML、CSS、JavaScript和各种库，创建交互式且视觉吸引力的网络体验。',
    ja: 'ウェブサイトに動きとダイナミックな効果を追加するための技術とテクノロジー。HTML、CSS、JavaScript、さまざまなライブラリを組み合わせて、インタラクティブで視覚的に魅力的なウェブ体験を作成します。',
    ru: 'Техники и технологии для добавления движения и динамических эффектов на веб-сайты. Сочетает HTML, CSS, JavaScript и различные библиотеки для создания интерактивных и визуально привлекательных веб-страниц.',
    ar: 'تقنيات وتكنولوجيات لإضافة الحركة والتأثيرات الديناميكية إلى مواقع الويب. يجمع بين HTML و CSS و JavaScript ومكتبات مختلفة لإنشاء تجارب ويب تفاعلية وجذابة بصرياً.',
    hi: 'वेबसाइट्स में मूवमेंट और डायनामिक इफेक्ट्स जोड़ने के लिए टेक्निक्स और टेक्नोलॉजीज। इंटरैक्टिव और विज़ुअली अपीलिंग वेब एक्सपीरियंस बनाने के लिए HTML, CSS, JavaScript और विभिन्न लाइब्रेरीज को कंबाइन करता है।',
    ko: '웹사이트에 움직임과 역동적인 효과를 추가하기 위한 기술. HTML, CSS, JavaScript 및 다양한 라이브러리를 결합하여 인터랙티브하고 시각적으로 매력적인 웹 경험을 만듭니다.',
    nl: 'Technieken en technologieën voor het toevoegen van beweging en dynamische effecten aan websites. Combineert HTML, CSS, JavaScript en verschillende bibliotheken om interactieve en visueel aantrekkelijke webervaringen te creëren.',
    pl: 'Techniki i technologie dodawania ruchu i dynamicznych efektów do stron internetowych. Łączy HTML, CSS, JavaScript i różne biblioteki, aby tworzyć interaktywne i wizualnie atrakcyjne doświadczenia internetowe.',
    tr: 'Web sitelerine hareket ve dinamik efektler eklemek için teknikler ve teknolojiler. İnteraktif ve görsel olarak çekici web deneyimleri oluşturmak için HTML, CSS, JavaScript ve çeşitli kütüphaneleri birleştirir.',
    hv: 'Tubis se gundytyr hen udlignon uēpa se dynamic mazilza naejot sikudeptor. Kombagon HTML, CSS, JavaScript, se lanta magiaon naejot gaomagon ubrar sikagon sikudeptor iderenigon.'
  }
};

export default animationSkillDescriptions;