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
