// Hamburger nav toggle
(function() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  const HAM = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  const X   = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>';

  function openMenu() {
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    toggle.innerHTML = X;
  }
  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.innerHTML = HAM;
  }

  toggle.addEventListener('click', () => {
    links.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when a nav link is tapped
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close when clicking outside the nav
  document.addEventListener('click', e => {
    if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
})();

// Form submit feedback
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
