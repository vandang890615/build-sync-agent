document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = e.target.querySelector('button');

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate form submission (replace with actual EmailJS or backend)
    setTimeout(() => {
        status.textContent = '✓ Message sent successfully!';
        status.className = 'form-status success';
        e.target.reset();
        btn.textContent = 'Send Message';
        btn.disabled = false;
    }, 1000);
});
