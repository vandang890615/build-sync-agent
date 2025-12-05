// i18n.js - Multi-language support system
let currentLang = localStorage.getItem('language') || 'vi';
let translations = {};

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

// Load translation file
async function loadTranslations(lang) {
    try {
        const response = await fetch(`i18n/${lang}.json`);
        translations = await response.json();
        return true;
    } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
        return false;
    }
}

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
async function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    await loadTranslations(lang);
    updatePageContent();
    updateLanguageButton();
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
async function initI18n() {
    await loadTranslations(currentLang);
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
