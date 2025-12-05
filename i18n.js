// i18n.js - Multi-language support system
let currentLang = localStorage.getItem('language') || 'vi';

const languages = {
    vi: { name: 'Tiếng Việt', flag: '🇻🇳' },
    en: { name: 'English', flag: '🇬🇧' },
    zh: { name: '中文', flag: '🇨🇳' },
    ja: { name: '日本語', flag: '🇯🇵' },
    ko: { name: '한국어', flag: '🇰🇷' },
    fr: { name: 'Français', flag: '🇫🇷' },
    de: { name: 'Deutsch', flag: '🇩🇪' },
    it: { name: 'Italiano', flag: '🇮🇹' }
};

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
        "pageDesc": "A collection of my work and side projects"
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
        "certifications": "Certifications"
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
        hero: { greeting: "Xin chào, tôi là", title: "Kỹ sư AI & Nhà phát triển Full-Stack", description: "Xây dựng các hệ thống thông minh với AI/ML và công nghệ web hiện đại.", cta_work: "Xem dự án", cta_contact: "Liên hệ" },
        profile: { name: "Van Dang", title: "Kỹ sư phần mềm cấp cao", location: "🌍 Ho Chi Minh City, VN" },
        food: { pageTitle: "Ẩm thực", pageDesc: "Món ngon và đồ uống có sẵn trên Shopee Food" },
        construction: { pageTitle: "Cơ khí & Xây dựng", pageDesc: "Dịch vụ thiết kế và thi công chuyên nghiệp" },
        footer: { description: "Kỹ sư AI đam mê xây dựng trải nghiệm web tuyệt vời.", quickLinks: "Liên kết nhanh", connect: "Kết nối", copyright: "Được xây dựng với ❤️", certifications: "Chứng chỉ" }
    },
    zh: {
        ...baseEn,
        nav: { home: "首页", about: "关于", projects: "项目", food: "美食", construction: "建筑", blog: "博客", contact: "联系" },
        food: { pageTitle: "美食佳肴", pageDesc: "Shopee Food 上提供的美味食物和饮料" },
        construction: { pageTitle: "建筑与室内设计", pageDesc: "专业的设计与施工服务" }
    },
    ja: {
        ...baseEn,
        nav: { home: "ホーム", about: "約", projects: "プロジェクト", food: "料理", construction: "建設", blog: "ブログ", contact: "接触" },
        food: { pageTitle: "料理の楽しみ", pageDesc: "Shopee Foodで利用可能な美味しい食べ物と飲み物" },
        construction: { pageTitle: "建設とインテリア", pageDesc: "プロフェッショナルなデザインと建設サービス" }
    },
    ko: {
        ...baseEn,
        nav: { home: "홈", about: "소개", projects: "프로젝트", food: "요리", construction: "건설", blog: "블로그", contact: "연락처" },
        food: { pageTitle: "요리의 즐거움", pageDesc: "Shopee Food에서 맛있는 음식과 음료를 즐기세요" },
        construction: { pageTitle: "건설 및 인테리어", pageDesc: "전문 디자인 및 시공 서비스" }
    },
    fr: {
        ...baseEn,
        nav: { home: "Accueil", about: "À propos", projects: "Projets", food: "Culinaire", construction: "Construction", blog: "Blog", contact: "Contact" },
        food: { pageTitle: "Délices Culinaires", pageDesc: "Nourriture et boissons délicieuses disponibles sur Shopee Food" },
        construction: { pageTitle: "Construction & Intérieur", pageDesc: "Services professionnels de conception et de construction" }
    },
    de: {
        ...baseEn,
        nav: { home: "Startseite", about: "Über", projects: "Projekte", food: "Kulinarisch", construction: "Bau", blog: "Blog", contact: "Kontakt" },
        food: { pageTitle: "Kulinarische Köstlichkeiten", pageDesc: "Leckeres Essen und Getränke auf Shopee Food erhältlich" },
        construction: { pageTitle: "Bau & Innenarchitektur", pageDesc: "Professionelle Design- und Baudienstleistungen" }
    },
    it: {
        ...baseEn,
        nav: { home: "Home", about: "Di", projects: "Progetti", food: "Culinario", construction: "Costruzione", blog: "Blog", contact: "Contatto" },
        food: { pageTitle: "Delizie Culinarie", pageDesc: "Cibo e bevande deliziosi disponibili su Shopee Food" },
        construction: { pageTitle: "Costruzione & Interni", pageDesc: "Servizi professionali di progettazione e costruzione" }
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
        btn.textContent = `${languages[currentLang].flag} ${languages[currentLang].name}`;
    }
}

// Create language dropdown
function createLanguageDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.innerHTML = Object.entries(languages).map(([code, lang]) => `
    <button class="lang-option ${code === currentLang ? 'active' : ''}" onclick="changeLanguage('${code}')">
      ${lang.flag} ${lang.name}
    </button>
  `).join('');
    return dropdown;
}

// Toggle language menu
function toggleLanguageMenu() {
    const existing = document.querySelector('.lang-dropdown');
    if (existing) {
        existing.remove();
    } else {
        const btn = document.getElementById('langBtn');
        const dropdown = createLanguageDropdown();
        btn.parentElement.appendChild(dropdown);
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
