// Google Translate Integration
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'vi',
        includedLanguages: 'en,vi,zh-CN,ja,ko,fr,de,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
    }, 'google_translate_element');
}

// Initialize Google Translate
(function () {
    // Add Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    // Create translate container
    const translateContainer = document.createElement('div');
    translateContainer.className = 'google-translate-container';
    translateContainer.innerHTML = `
        <span class="translate-label">🌐 Translate:</span>
        <div id="google_translate_element"></div>
    `;

    // Add to page when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(translateContainer);
        });
    } else {
        document.body.appendChild(translateContainer);
    }
})();
