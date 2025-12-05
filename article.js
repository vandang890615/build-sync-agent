async function loadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const lang = localStorage.getItem('language') || 'vi';

    if (!id) {
        window.location.href = 'blog.html';
        return;
    }

    try {
        const response = await fetch(`data/blog_${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load blog data for ${lang}`);
        const posts = await response.json();
        const post = posts.find(p => p.id === id);

        if (!post) {
            document.getElementById('articleContent').innerHTML = '<div style="text-align: center;">Article not found</div>';
            return;
        }

        document.title = `${post.title} - Van Dang`;

        const container = document.getElementById('articleContent');
        container.innerHTML = `
            <div class="article-header fade-in">
                <div class="article-meta">${post.date} • ${post.readTime}</div>
                <h1 class="article-title">${post.title}</h1>
                <div style="display:flex; justify-content:center; gap:0.5rem; margin-top:1rem;">
                    ${post.tags.map(t => `<span class="tag" style="background:var(--bg-secondary); padding:0.25rem 0.75rem; border-radius:1rem; font-size:0.8rem;">${t}</span>`).join('')}
                </div>
            </div>
            <img src="${post.image}" alt="${post.title}" class="article-image fade-in">
            <div class="article-content fade-in">
                ${post.content || post.excerpt}
            </div>
        `;

    } catch (error) {
        console.error('Error loading article:', error);
        document.getElementById('articleContent').innerHTML = '<div style="text-align: center;">Error loading article</div>';
    }
}

// Initial load
loadArticle();

// Listen for language changes
document.addEventListener('languageChanged', () => {
    loadArticle();
});
