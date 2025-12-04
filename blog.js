async function loadBlog() {
    const response = await fetch('data/blog.json');
    const posts = await response.json();

    document.getElementById('blogGrid').innerHTML = posts.map(p => `
    <div class="card blog-card">
      <img src="${p.image}" alt="${p.title}">
      <div>
        <div class="blog-meta">${p.date} • ${p.readTime}</div>
        <h2 style="margin-bottom:0.5rem;">${p.title}</h2>
        <p style="color:var(--text-secondary);margin-bottom:1rem;">${p.excerpt}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
loadBlog();
