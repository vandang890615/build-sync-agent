// Mock user data
const userData = {
    name: "Van Dang",
    title: "Software Developer",
    bio: "Passionate software developer building modern web applications. Specialized in JavaScript, automation, and web technologies. Always learning and exploring new technologies.",
    isActive: true,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vandang",
    social: [
        { name: "GitHub", url: "https://github.com/vandang890615" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/vandang890615/" },
        { name: "Email", url: "mailto:vandang890615@gmail.com" }
    ]
};

// DOM elements
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const usernameEl = document.getElementById('username');
const statusIndicator = document.getElementById('statusIndicator');

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Toggle theme
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update tooltip based on active status
function updateTooltip() {
    if (userData.isActive) {
        usernameEl.setAttribute('data-active', 'true');
        usernameEl.setAttribute('data-tooltip', 'User is currently active');
        statusIndicator.style.display = 'block';
    } else {
        usernameEl.removeAttribute('data-active');
        usernameEl.removeAttribute('data-tooltip');
        statusIndicator.style.display = 'none';
    }
}

// Initialize on page load
initTheme();
updateTooltip();

// Expose function for testing
window.setUserActive = function (active) {
    userData.isActive = active;
    updateTooltip();
};
