async function loadProjects(lang = localStorage.getItem('language') || 'vi') {
  try {
    const response = await fetch(`data/projects_${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load projects data for ${lang}`);
    const projects = await response.json();

    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = projects.map(p => `
    <div class="card fade-in">
      <img src="${p.image}" alt="${p.title}" style="width:100%;height:200px;object-fit:cover;border-radius:1rem 1rem 0 0;">
      <div style="padding:1.5rem;">
        <h3>${p.title}</h3>
        <p style="color:var(--text-secondary);margin:0.5rem 0 1rem;">${p.description}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div style="display:flex;gap:1rem;">
          <a href="${p.github}" target="_blank" style="color:var(--accent);text-decoration:none;font-weight:600;">GitHub →</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" style="color:var(--accent);text-decoration:none;font-weight:600;">Demo →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Initial load
loadProjects();

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
  loadProjects(e.detail.language);
});
