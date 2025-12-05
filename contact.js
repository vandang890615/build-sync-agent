document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = e.target.querySelector('button');

    btn.textContent = t('contact.form.sending');
    btn.disabled = true;

    // Simulate form submission (replace with actual EmailJS or backend)
    setTimeout(() => {
        status.textContent = t('contact.form.success');
        status.className = 'form-status success';
        e.target.reset();
        btn.textContent = t('contact.form.send');
        btn.disabled = false;
    }, 1000);
});
