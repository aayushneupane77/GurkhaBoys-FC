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

  // Player modal handling
  const playerCards = document.querySelectorAll('.player-card');
  const modal = document.getElementById('player-modal');
  const modalName = document.getElementById('modal-name');
  const modalPos = document.getElementById('modal-pos');
  const modalBio = document.getElementById('modal-bio');
  const modalClose = document.querySelector('.modal-close');

  function openPlayerModal(data){
    modalName.textContent = data.name + ' ' + (data.number ? ('#' + data.number) : '');
    modalPos.textContent = data.pos || '';
    modalBio.textContent = data.bio || '';
    modal.setAttribute('aria-hidden','false');
    modal.style.display = 'flex';
    // trap focus briefly
    modalClose.focus();
  }

  function closePlayerModal(){
    modal.setAttribute('aria-hidden','true');
    modal.style.display = 'none';
  }

  playerCards.forEach(card => {
    card.addEventListener('click', () => {
      const data = JSON.parse(card.getAttribute('data-player'));
      openPlayerModal(data);
    });
    card.addEventListener('keypress', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const data = JSON.parse(card.getAttribute('data-player')); openPlayerModal(data); } });
  });

  if(modalClose) modalClose.addEventListener('click', closePlayerModal);
  // close on overlay click
  if(modal) modal.addEventListener('click', (e) => { if(e.target === modal) closePlayerModal(); });
  // escape key
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') closePlayerModal(); });

  // Contact form handling (client-side only)
  const contactForm = document.querySelector('#contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();
      if(!name || !email || !message){
        alert('Please fill all required fields.');
        return;
      }
      // placeholder: real sites should POST to a server or use a service
      contactForm.reset();
      alert('Thanks ' + name + '! Your message has been received (demo).');
    });
  }
});

// exported symbol link: [`toggleMenu`](main.js)
