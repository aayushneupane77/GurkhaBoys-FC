console.log("Gurkha Boys Football Club website loaded successfully");

document.addEventListener('DOMContentLoaded', function(){
  // Toggle mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  function toggleMenu(){
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  }
  if(toggle) toggle.addEventListener('click', toggleMenu);

  // Set footer year dynamically
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});

// exported symbol link: [`toggleMenu`](main.js)
