async function loadBlog(lang = localStorage.getItem('language') || 'vi') {
  try {
    // Store posts globally for modal access
    window.currentPosts = posts;

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
