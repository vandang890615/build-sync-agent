// Load and display featured projects
async function loadFeaturedProjects(lang = localStorage.getItem('language') || 'vi') {
  try {
    const response = await fetch(`data/projects_${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load projects data for ${lang}`);
    const projects = await response.json();
    const featured = projects.filter(p => p.featured);

    const container = document.getElementById('featuredProjects');
    if (!container) return;

    container.innerHTML = featured.map(project => `
      <div class="project-card fade-in">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank">GitHub →</a>
            ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Initial load
loadFeaturedProjects();

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
  loadFeaturedProjects(e.detail.language);
});
