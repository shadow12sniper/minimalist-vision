// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const responseEl = document.getElementById('formResponse');
  const fields = ['name', 'email', 'message'];

  function validateEmail(email) {
    // Simple email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    responseEl.textContent = '';
    fields.forEach(field => {
      const el = form.elements[field];
      const errorEl = el.parentElement.querySelector('.error-message');
      if (!el.value.trim()) {
        errorEl.textContent = 'Required';
        valid = false;
      } else if (field === 'email' && !validateEmail(el.value.trim())) {
        errorEl.textContent = 'Invalid email';
        valid = false;
      } else {
        errorEl.textContent = '';
      }
    });

    if (valid) {
      // Simulate sending
      form.reset();
      responseEl.style.color = '#22c55e';
      responseEl.textContent = 'Thank you! Your message was sent.';
    }
  });

  fields.forEach(field => {
    form.elements[field].addEventListener('input', function () {
      const errorEl = this.parentElement.querySelector('.error-message');
      errorEl.textContent = '';
      responseEl.textContent = '';
    });
  });
});