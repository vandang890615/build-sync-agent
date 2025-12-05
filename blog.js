async function loadBlog(lang = localStorage.getItem('language') || 'vi') {
  try {
    const response = await fetch(`data/blog_${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load blog data for ${lang}`);
    const posts = await response.json();

    const container = document.getElementById('blogGrid');
    if (!container) return;

    container.innerHTML = posts.map(p => `
    <div class="card blog-card fade-in" onclick="openModal(${p.id})" style="cursor: pointer;">
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

    // Store posts globally for modal access
    window.currentPosts = posts;

  } catch (error) {
    console.error('Error loading blog:', error);
  }
}

// Modal functions
function openModal(id) {
  const post = window.currentPosts.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById('blogModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <div class="modal-body">
        <img src="${post.image}" alt="${post.title}">
        <div class="meta">${post.date} • ${post.readTime}</div>
        <h2>${post.title}</h2>
        <div class="content">${post.content || post.excerpt}</div>
        <div style="margin-top: 2rem; display:flex; gap:0.5rem;">
            ${post.tags.map(t => `<span class="tag" style="background:var(--bg-secondary); padding:0.25rem 0.75rem; border-radius:1rem; font-size:0.8rem;">${t}</span>`).join('')}
        </div>
    </div>
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

// Close modal logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('blogModal');
  const span = document.getElementsByClassName("close-modal")[0];

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
});

// Initial load
loadBlog();

// Listen for language changes
document.addEventListener('languageChanged', (e) => {
  loadBlog(e.detail.language);
});
