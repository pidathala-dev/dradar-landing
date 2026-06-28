const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
for (const form of document.querySelectorAll('form')) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) button.textContent = 'Thanks — we will be in touch';
  });
}

// Theme toggle
(function() {
  const btn = document.getElementById('theme-toggle');
  function applyTheme(light) {
    document.body.classList.toggle('light', light);
    if (btn) btn.textContent = light ? '🌑 Dark' : '☀ Light';
  }
  applyTheme(localStorage.getItem('theme') === 'light');
  if (btn) {
    btn.addEventListener('click', () => {
      const isLight = !document.body.classList.contains('light');
      applyTheme(isLight);
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
})();
