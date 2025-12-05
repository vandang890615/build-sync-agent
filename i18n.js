// i18n.js - Multi-language support system
let currentLang = localStorage.getItem('language') || 'vi';

const languages = [
    { code: 'vi', name: '🇻🇳 Tiếng Việt' },
    { code: 'en', name: '🇺🇸 English' },
    { code: 'zh', name: '🇨🇳 中文' },
    { code: 'ja', name: '🇯🇵 日本語' },
    { code: 'ko', name: '🇰🇷 한국어' },
    { code: 'fr', name: '🇫🇷 Français' },
    { code: 'de', name: '🇩🇪 Deutsch' },
    { code: 'it', name: '🇮🇹 Italiano' }
];

const baseEn = {
    "title": "Van Dang - Software Engineer",
    "hero": {
        "greeting": "Hello, I am",
        "title": "AI Engineer & Full-Stack Developer",
        "description": "Building intelligent systems with AI/ML and modern web technologies. Specialized in LLMs, automation agents, and scalable applications.",
        "cta_work": "View Projects",
        "cta_contact": "Contact"
    },
    "about": {
        "title": "About Me",
        "bio": "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in modern JavaScript frameworks, cloud architecture, and developer tooling. Love solving complex problems and mentoring junior developers."
    },
    "profile": {
        "name": "Van Dang",
        "title": "Senior Software Engineer",
        "location": "🌍 Ho Chi Minh City, VN"
    },
    "connect": {
        "title": "Connect"
    },
    "projects": {
        "title": "My Projects",
        "viewAll": "View All Projects →",
        "pageTitle": "My Projects",
        "pageDesc": "A collection of my work and side projects",
        "ecommerce": {
            "title": "E-Commerce Platform",
            "desc": "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard."
        }
    },
    "food": {
        "pageTitle": "Culinary Delights",
        "pageDesc": "Delicious food and beverages available on Shopee Food"
    },
    "construction": {
        "pageTitle": "Construction & Interior",
        "pageDesc": "Professional design and construction services"
    },
    "blog": {
        "pageTitle": "Blog",
        "pageDesc": "Thoughts on web development, tech, and more"
    },
    "contact": {
        "pageTitle": "Get In Touch",
        "pageDesc": "Have a project in mind? Let's talk!",
        "infoTitle": "Contact Information",
        "email": "Email",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "tiktok": "TikTok",
        "facebook": "Facebook",
        "form": {
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "send": "Send Message",
            "sending": "Sending...",
            "success": "✓ Message sent successfully!"
        }
    },
    "skills": {
        "title": "Skills & Technologies",
        "aiml": {
            "title": "AI/ML",
            "desc": "LLMs, LangChain, TensorFlow, PyTorch"
        },
        "automation": {
            "title": "Automation",
            "desc": "Playwright, Selenium, Agent Frameworks"
        },
        "frontend": {
            "title": "Frontend",
            "desc": "React, Next.js, TypeScript, Tailwind"
        },
        "backend": {
            "title": "Backend",
            "desc": "Node.js, Python, PostgreSQL, MongoDB"
        }
    },
    "footer": {
        "description": "AI Engineer passionate about building great web experiences.",
        "quickLinks": "Quick Links",
        "connect": "Connect",
        "copyright": "Built with ❤️",
        "certifications": "Certifications",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
    },
    "aiNews": {
        "title": "AI & Tech News",
        "items": [
            {
                "title": "Latest breakthroughs in Large Language Models",
                "link": "#"
            },
            {
                "title": "Automation trends 2025",
                "link": "#"
            },
            {
                "title": "Web development with AI assistants",
                "link": "#"
            }
        ]
    }
};

const resources = {
    en: { ...baseEn, nav: { home: "Home", about: "About", projects: "Projects", food: "Culinary", construction: "Construction", blog: "Blog", contact: "Contact" } },
    vi: {
        ...baseEn,
        nav: { home: "Trang chủ", about: "Giới thiệu", projects: "Dự án", food: "Ẩm thực", construction: "Cơ khí & Xây dựng", blog: "Blog", contact: "Liên hệ" },
        hero: { greeting: "Xin chào, tôi là", title: "Kỹ sư AI & Nhà phát triển Full-Stack", description: "Xây dựng các hệ thống thông minh với AI/ML và công nghệ web hiện đại. Chuyên về LLMs, automation agents và ứng dụng có khả năng mở rộng.", cta_work: "Xem dự án", cta_contact: "Liên hệ" },
        about: { title: "Giới thiệu", bio: "Kỹ sư phần mềm đam mê với hơn 8 năm kinh nghiệm xây dựng các ứng dụng web có khả năng mở rộng. Chuyên về các framework JavaScript hiện đại, kiến trúc đám mây và công cụ cho nhà phát triển. Yêu thích giải quyết các vấn đề phức tạp và hướng dẫn các nhà phát triển trẻ." },
        profile: { name: "Van Dang", title: "Kỹ sư phần mềm cấp cao", location: "🌍 TP. Hồ Chí Minh, VN" },
        connect: { title: "Kết nối" },
        projects: {
            title: "Dự án của tôi", viewAll: "Xem tất cả dự án →", pageTitle: "Dự án của tôi", pageDesc: "Bộ sưu tập các công việc và dự án cá nhân của tôi",
            ecommerce: { title: "Nền tảng thương mại điện tử", desc: "Giải pháp thương mại điện tử full-stack với React, Node.js và MongoDB. Các tính năng bao gồm danh mục sản phẩm, giỏ hàng, tích hợp thanh toán và bảng điều khiển quản trị." }
        },
        food: { pageTitle: "Ẩm thực", pageDesc: "Món ngon và đồ uống có sẵn trên Shopee Food" },
        construction: { pageTitle: "Cơ khí & Xây dựng", pageDesc: "Dịch vụ thiết kế và thi công chuyên nghiệp" },
        blog: { pageTitle: "Blog", pageDesc: "Suy nghĩ về phát triển web, công nghệ và hơn thế nữa" },
        contact: {
            pageTitle: "Liên hệ", pageDesc: "Bạn có ý tưởng dự án? Hãy cùng thảo luận!", infoTitle: "Thông tin liên hệ",
            form: { name: "Tên", email: "Email", message: "Tin nhắn", send: "Gửi tin nhắn", sending: "Đang gửi...", success: "✓ Tin nhắn đã được gửi thành công!" }
        },
        skills: { title: "Kỹ năng & Công nghệ", aiml: { title: "AI/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "Tự động hóa", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "Kỹ sư AI đam mê xây dựng trải nghiệm web tuyệt vời.", quickLinks: "Liên kết nhanh", connect: "Kết nối", copyright: "Được xây dựng với ❤️", certifications: "Chứng chỉ", privacy: "Chính sách bảo mật", terms: "Điều khoản dịch vụ" },
        aiNews: { title: "Tin tức AI & Công nghệ", items: [{ title: "Những đột phá mới nhất trong Mô hình Ngôn ngữ Lớn" }, { title: "Xu hướng tự động hóa 2025" }, { title: "Phát triển web với trợ lý AI" }] }
    },
    zh: {
        ...baseEn,
        nav: { home: "首页", about: "关于", projects: "项目", food: "美食", construction: "建筑", blog: "博客", contact: "联系" },
        hero: { greeting: "你好，我是", title: "AI 工程师 & 全栈开发人员", description: "利用 AI/ML 和现代 Web 技术构建智能系统。专注于 LLMs、自动化代理和可扩展应用程序。", cta_work: "查看项目", cta_contact: "联系" },
        about: { title: "关于我", bio: "充满激情的软件工程师，拥有 8 年以上构建可扩展 Web 应用程序的经验。专注于现代 JavaScript 框架、云架构和开发人员工具。喜欢解决复杂问题并指导初级开发人员。" },
        profile: { name: "Van Dang", title: "高级软件工程师", location: "🌍 越南胡志明市" },
        connect: { title: "连接" },
        projects: {
            title: "我的项目", viewAll: "查看所有项目 →", pageTitle: "我的项目", pageDesc: "我的工作和副业项目的集合",
            ecommerce: { title: "电子商务平台", desc: "使用 React、Node.js 和 MongoDB 的全栈电子商务解决方案。功能包括产品目录、购物车、支付集成和管理仪表板。" }
        },
        food: { pageTitle: "美食佳肴", pageDesc: "Shopee Food 上提供的美味食物和饮料" },
        construction: { pageTitle: "建筑与室内设计", pageDesc: "专业的设计与施工服务" },
        blog: { pageTitle: "博客", pageDesc: "关于 Web 开发、技术等的思考" },
        contact: {
            pageTitle: "取得联系", pageDesc: "有项目想法吗？让我们谈谈！", infoTitle: "联系信息",
            form: { name: "姓名", email: "电子邮件", message: "留言", send: "发送留言", sending: "发送中...", success: "✓ 留言发送成功！" }
        },
        skills: { title: "技能与技术", aiml: { title: "AI/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "自动化", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "前端", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "后端", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "热衷于构建出色 Web 体验的 AI 工程师。", quickLinks: "快速链接", connect: "连接", copyright: "用 ❤️ 构建", certifications: "认证", privacy: "隐私政策", terms: "服务条款" },
        aiNews: { title: "AI 与科技新闻", items: [{ title: "大型语言模型的最新突破" }, { title: "2025 年自动化趋势" }, { title: "使用 AI 助手进行 Web 开发" }] }
    },
    ja: {
        ...baseEn,
        nav: { home: "ホーム", about: "約", projects: "プロジェクト", food: "料理", construction: "建設", blog: "ブログ", contact: "接触" },
        hero: { greeting: "こんにちは、私は", title: "AI エンジニア & フルスタック開発者", description: "AI/ML と最新の Web テクノロジーを使用してインテリジェントなシステムを構築します。LLM、自動化エージェント、スケーラブルなアプリケーションを専門としています。", cta_work: "プロジェクトを見る", cta_contact: "連絡する" },
        about: { title: "私について", bio: "スケーラブルな Web アプリケーションの構築に 8 年以上の経験を持つ情熱的なソフトウェア エンジニア。最新の JavaScript フレームワーク、クラウド アーキテクチャ、開発者ツールを専門としています。複雑な問題を解決し、後輩の開発者を指導することが大好きです。" },
        profile: { name: "Van Dang", title: "シニア ソフトウェア エンジニア", location: "🌍 ホーチミン市, ベトナム" },
        connect: { title: "接続" },
        projects: {
            title: "私のプロジェクト", viewAll: "すべてのプロジェクトを見る →", pageTitle: "私のプロジェクト", pageDesc: "私の仕事とサイドプロジェクトのコレクション",
            ecommerce: { title: "Eコマースプラットフォーム", desc: "React、Node.js、MongoDB を使用したフルスタック E コマース ソリューション。製品カタログ、ショッピング カート、支払い統合、管理ダッシュボードなどの機能が含まれています。" }
        },
        food: { pageTitle: "料理の楽しみ", pageDesc: "Shopee Foodで利用可能な美味しい食べ物と飲み物" },
        construction: { pageTitle: "建設とインテリア", pageDesc: "プロフェッショナルなデザインと建設サービス" },
        blog: { pageTitle: "ブログ", pageDesc: "Web開発、技術などに関する考察" },
        contact: {
            pageTitle: "お問い合わせ", pageDesc: "プロジェクトのアイデアはありますか？話しましょう！", infoTitle: "連絡先情報",
            form: { name: "名前", email: "メール", message: "メッセージ", send: "メッセージを送信", sending: "送信中...", success: "✓ メッセージは正常に送信されました！" }
        },
        skills: { title: "スキルとテクノロジー", aiml: { title: "AI/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "自動化", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "フロントエンド", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "バックエンド", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "素晴らしい Web 体験の構築に情熱を注ぐ AI エンジニア。", quickLinks: "クイックリンク", connect: "接続", copyright: "❤️ で構築", certifications: "認定", privacy: "プライバシーポリシー", terms: "利用規約" },
        aiNews: { title: "AI & テックニュース", items: [{ title: "大規模言語モデルの最新の進歩" }, { title: "2025年の自動化トレンド" }, { title: "AIアシスタントによるWeb開発" }] }
    },
    ko: {
        ...baseEn,
        nav: { home: "홈", about: "소개", projects: "프로젝트", food: "요리", construction: "건설", blog: "블로그", contact: "연락처" },
        hero: { greeting: "안녕하세요, 저는", title: "AI 엔지니어 & 풀스택 개발자", description: "AI/ML 및 최신 웹 기술로 지능형 시스템을 구축합니다. LLM, 자동화 에이전트 및 확장 가능한 애플리케이션을 전문으로 합니다.", cta_work: "프로젝트 보기", cta_contact: "연락하기" },
        about: { title: "소개", bio: "확장 가능한 웹 애플리케이션 구축 경험이 8년 이상인 열정적인 소프트웨어 엔지니어입니다. 최신 JavaScript 프레임워크, 클라우드 아키텍처 및 개발자 도구를 전문으로 합니다. 복잡한 문제를 해결하고 후배 개발자를 멘토링하는 것을 좋아합니다." },
        profile: { name: "Van Dang", title: "수석 소프트웨어 엔지니어", location: "🌍 호치민시, 베트남" },
        connect: { title: "연결" },
        projects: {
            title: "내 프로젝트", viewAll: "모든 프로젝트 보기 →", pageTitle: "내 프로젝트", pageDesc: "내 작업 및 사이드 프로젝트 모음",
            ecommerce: { title: "전자 상거래 플랫폼", desc: "React, Node.js 및 MongoDB를 사용한 풀 스택 전자 상거래 솔루션입니다. 제품 카탈로그, 장바구니, 결제 통합 및 관리 대시보드와 같은 기능이 포함됩니다." }
        },
        food: { pageTitle: "요리의 즐거움", pageDesc: "Shopee Food에서 맛있는 음식과 음료를 즐기세요" },
        construction: { pageTitle: "건설 및 인테리어", pageDesc: "전문 디자인 및 시공 서비스" },
        blog: { pageTitle: "블로그", pageDesc: "웹 개발, 기술 등에 대한 생각" },
        contact: {
            pageTitle: "연락하기", pageDesc: "프로젝트 아이디어가 있으신가요? 이야기해 봅시다!", infoTitle: "연락처 정보",
            form: { name: "이름", email: "이메일", message: "메시지", send: "메시지 보내기", sending: "전송 중...", success: "✓ 메시지가 성공적으로 전송되었습니다!" }
        },
        skills: { title: "기술 및 기술", aiml: { title: "AI/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "자동화", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "프론트엔드", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "백엔드", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "훌륭한 웹 경험을 구축하는 데 열정적인 AI 엔지니어.", quickLinks: "빠른 링크", connect: "연결", copyright: "❤️로 제작", certifications: "자격증", privacy: "개인정보 처리방침", terms: "이용 약관" },
        aiNews: { title: "AI 및 기술 뉴스", items: [{ title: "대규모 언어 모델의 최신 혁신" }, { title: "2025년 자동화 트렌드" }, { title: "AI 비서와 함께하는 웹 개발" }] }
    },
    fr: {
        ...baseEn,
        nav: { home: "Accueil", about: "À propos", projects: "Projets", food: "Culinaire", construction: "Construction", blog: "Blog", contact: "Contact" },
        hero: { greeting: "Bonjour, je suis", title: "Ingénieur IA & Développeur Full-Stack", description: "Construction de systèmes intelligents avec l'IA/ML et les technologies web modernes. Spécialisé dans les LLM, les agents d'automatisation et les applications évolutives.", cta_work: "Voir les projets", cta_contact: "Contact" },
        about: { title: "À propos de moi", bio: "Ingénieur logiciel passionné avec plus de 8 ans d'expérience dans la création d'applications web évolutives. Spécialisé dans les frameworks JavaScript modernes, l'architecture cloud et les outils de développement. J'aime résoudre des problèmes complexes et encadrer des développeurs juniors." },
        profile: { name: "Van Dang", title: "Ingénieur Logiciel Senior", location: "🌍 Ho Chi Minh Ville, VN" },
        connect: { title: "Connecter" },
        projects: {
            title: "Mes Projets", viewAll: "Voir tous les projets →", pageTitle: "Mes Projets", pageDesc: "Une collection de mes travaux et projets personnels",
            ecommerce: { title: "Plateforme E-Commerce", desc: "Solution e-commerce full-stack avec React, Node.js et MongoDB. Les fonctionnalités incluent le catalogue de produits, le panier d'achat, l'intégration des paiements et le tableau de bord d'administration." }
        },
        food: { pageTitle: "Délices Culinaires", pageDesc: "Nourriture et boissons délicieuses disponibles sur Shopee Food" },
        construction: { pageTitle: "Construction & Intérieur", pageDesc: "Services professionnels de conception et de construction" },
        blog: { pageTitle: "Blog", pageDesc: "Réflexions sur le développement web, la technologie et plus encore" },
        contact: {
            pageTitle: "Entrer en contact", pageDesc: "Vous avez un projet en tête ? Parlons-en !", infoTitle: "Informations de contact",
            form: { name: "Nom", email: "Email", message: "Message", send: "Envoyer le message", sending: "Envoi...", success: "✓ Message envoyé avec succès !" }
        },
        skills: { title: "Compétences & Technologies", aiml: { title: "IA/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "Automatisation", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "Ingénieur IA passionné par la création de grandes expériences web.", quickLinks: "Liens rapides", connect: "Connecter", copyright: "Construit avec ❤️", certifications: "Certifications", privacy: "Politique de confidentialité", terms: "Conditions d'utilisation" },
        aiNews: { title: "Actualités IA & Tech", items: [{ title: "Dernières percées dans les grands modèles linguistiques" }, { title: "Tendances de l'automatisation 2025" }, { title: "Développement web avec des assistants IA" }] }
    },
    de: {
        ...baseEn,
        nav: { home: "Startseite", about: "Über", projects: "Projekte", food: "Kulinarisch", construction: "Bau", blog: "Blog", contact: "Kontakt" },
        hero: { greeting: "Hallo, ich bin", title: "AI Engineer & Full-Stack Entwickler", description: "Entwicklung intelligenter Systeme mit KI/ML und modernen Webtechnologien. Spezialisiert auf LLMs, Automatisierungsagenten und skalierbare Anwendungen.", cta_work: "Projekte ansehen", cta_contact: "Kontakt" },
        about: { title: "Über mich", bio: "Leidenschaftlicher Softwareingenieur mit über 8 Jahren Erfahrung in der Entwicklung skalierbarer Webanwendungen. Spezialisiert auf moderne JavaScript-Frameworks, Cloud-Architektur und Entwicklertools. Ich liebe es, komplexe Probleme zu lösen und Junior-Entwickler zu betreuen." },
        profile: { name: "Van Dang", title: "Senior Software Engineer", location: "🌍 Ho-Chi-Minh-Stadt, VN" },
        connect: { title: "Verbinden" },
        projects: {
            title: "Meine Projekte", viewAll: "Alle Projekte ansehen →", pageTitle: "Meine Projekte", pageDesc: "Eine Sammlung meiner Arbeiten und Nebenprojekte",
            ecommerce: { title: "E-Commerce-Plattform", desc: "Full-Stack-E-Commerce-Lösung mit React, Node.js und MongoDB. Zu den Funktionen gehören Produktkatalog, Warenkorb, Zahlungsintegration und Admin-Dashboard." }
        },
        food: { pageTitle: "Kulinarische Köstlichkeiten", pageDesc: "Leckeres Essen und Getränke auf Shopee Food erhältlich" },
        construction: { pageTitle: "Bau & Innenarchitektur", pageDesc: "Professionelle Design- und Baudienstleistungen" },
        blog: { pageTitle: "Blog", pageDesc: "Gedanken zu Webentwicklung, Technik und mehr" },
        contact: {
            pageTitle: "Kontakt aufnehmen", pageDesc: "Haben Sie eine Projektidee? Lassen Sie uns reden!", infoTitle: "Kontaktinformationen",
            form: { name: "Name", email: "E-Mail", message: "Nachricht", send: "Nachricht senden", sending: "Senden...", success: "✓ Nachricht erfolgreich gesendet!" }
        },
        skills: { title: "Fähigkeiten & Technologien", aiml: { title: "KI/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "Automatisierung", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "KI-Ingenieur mit Leidenschaft für großartige Web-Erlebnisse.", quickLinks: "Schnelllinks", connect: "Verbinden", copyright: "Erstellt mit ❤️", certifications: "Zertifizierungen", privacy: "Datenschutzrichtlinie", terms: "Nutzungsbedingungen" },
        aiNews: { title: "KI & Tech News", items: [{ title: "Neueste Durchbrüche bei großen Sprachmodellen" }, { title: "Automatisierungstrends 2025" }, { title: "Webentwicklung mit KI-Assistenten" }] }
    },
    it: {
        ...baseEn,
        nav: { home: "Home", about: "Di", projects: "Progetti", food: "Culinario", construction: "Costruzione", blog: "Blog", contact: "Contatto" },
        hero: { greeting: "Ciao, sono", title: "Ingegnere AI & Sviluppatore Full-Stack", description: "Costruzione di sistemi intelligenti con AI/ML e moderne tecnologie web. Specializzato in LLM, agenti di automazione e applicazioni scalabili.", cta_work: "Vedi Progetti", cta_contact: "Contatto" },
        about: { title: "Su di me", bio: "Ingegnere software appassionato con oltre 8 anni di esperienza nella creazione di applicazioni web scalabili. Specializzato in moderni framework JavaScript, architettura cloud e strumenti per sviluppatori. Amo risolvere problemi complessi e fare da mentore agli sviluppatori junior." },
        profile: { name: "Van Dang", title: "Ingegnere Software Senior", location: "🌍 Ho Chi Minh City, VN" },
        connect: { title: "Connetti" },
        projects: {
            title: "I Miei Progetti", viewAll: "Vedi tutti i progetti →", pageTitle: "I Miei Progetti", pageDesc: "Una raccolta dei miei lavori e progetti personali",
            ecommerce: { title: "Piattaforma E-Commerce", desc: "Soluzione e-commerce full-stack con React, Node.js e MongoDB. Le funzionalità includono catalogo prodotti, carrello, integrazione pagamenti e dashboard di amministrazione." }
        },
        food: { pageTitle: "Delizie Culinarie", pageDesc: "Cibo e bevande deliziosi disponibili su Shopee Food" },
        construction: { pageTitle: "Costruzione & Interni", pageDesc: "Servizi professionali di progettazione e costruzione" },
        blog: { pageTitle: "Blog", pageDesc: "Riflessioni su sviluppo web, tecnologia e altro" },
        contact: {
            pageTitle: "Mettiti in contatto", pageDesc: "Hai in mente un progetto? Parliamone!", infoTitle: "Informazioni di contatto",
            form: { name: "Nome", email: "Email", message: "Messaggio", send: "Invia Messaggio", sending: "Invio...", success: "✓ Messaggio inviato con successo!" }
        },
        skills: { title: "Competenze & Tecnologie", aiml: { title: "IA/ML", desc: "LLMs, LangChain, TensorFlow, PyTorch" }, automation: { title: "Automazione", desc: "Playwright, Selenium, Agent Frameworks" }, frontend: { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind" }, backend: { title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB" } },
        footer: { description: "Ingegnere AI appassionato di creare grandi esperienze web.", quickLinks: "Link Rapidi", connect: "Connetti", copyright: "Costruito con ❤️", certifications: "Certificazioni", privacy: "Informativa sulla privacy", terms: "Termini di servizio" },
        aiNews: { title: "Notizie AI & Tech", items: [{ title: "Ultimi progressi nei modelli linguistici di grandi dimensioni" }, { title: "Tendenze dell'automazione 2025" }, { title: "Sviluppo web con assistenti AI" }] }
    }
};

let translations = resources[currentLang];

// Get translated text
function t(key) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Update page content
function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}

// Change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    translations = resources[lang];
    updatePageContent();
    updateLanguageButton();

    // Close dropdown immediately
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) dropdown.remove();

    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Update language button
function updateLanguageButton() {
    const btn = document.getElementById('langBtn');
    if (btn) {
        btn.innerHTML = `${languages.find(l => l.code === currentLang).name}`;
    }
}

// Create language dropdown
function createLanguageDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.innerHTML = languages.map(lang => `
    <div class="lang-option ${lang.code === currentLang ? 'active' : ''}" onclick="changeLanguage('${lang.code}')">
      ${lang.name}
    </div>
  `).join('');
    return dropdown;
}

// Toggle language menu
function toggleLanguageMenu() {
    const existing = document.querySelector('.lang-dropdown');
    if (existing) {
        existing.remove();
    } else {
        const btn = document.querySelector('.lang-switcher');
        const dropdown = createLanguageDropdown();
        btn.appendChild(dropdown);
    }
}

// Initialize
function initI18n() {
    translations = resources[currentLang];
    updatePageContent();
    updateLanguageButton();
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-switcher')) {
        document.querySelector('.lang-dropdown')?.remove();
    }
});

// Auto-init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
