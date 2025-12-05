async function loadBlog(lang = localStorage.getItem('language') || 'vi') {
  try {
    const response = await fetch(`data/blog_${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load blog data for ${lang}`);
    const posts = await response.json();

    const container = document.getElementById('blogGrid');
    if (!container) return;

    container.innerHTML = posts.map(p => `
    <div class="card blog-card fade-in">
      <img src="${p.image}" alt="${p.title}">
      <div style="padding: 1.5rem;">
        <div class="blog-meta" style="color:var(--accent); font-size:0.9rem; margin-bottom:0.5rem;">${p.date} • ${p.readTime}</div>
        <h2 style="margin-bottom:0.5rem; font-size:1.25rem;">${p.title}</h2>
        <p style="color:var(--text-secondary); margin-bottom:1rem; line-height:1.6;">${p.excerpt}</p>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${p.tags.map(t => `<span class="tag" style="background:var(--bg-secondary); padding:0.25rem 0.75rem; border-radius:1rem; font-size:0.8rem;">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  } catch (error) {
    console.error('Error loading blog:', error);
  }
}

// Initial load
loadBlog();

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
  loadBlog(e.detail.language);
});
