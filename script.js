/* ============================================================
   Rupika Bajracharya Portfolio — Script
   ============================================================ */

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings inside the same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((el, idx) => {
          if (el === entry.target) {
            setTimeout(() => el.classList.add('in-view'), idx * 90);
          }
        });
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─── NAVBAR SCROLL STATE ──────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ─── ACTIVE NAV LINK ─────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

// ─── HAMBURGER MENU ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  hamburger.classList.toggle('open');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    hamburger.classList.remove('open');
  });
});

// ─── SMOOTH SCROLL (fallback for older browsers) ──────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── CONTACT FORM ────────────────────────────────────────────
const form    = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const name    = form.querySelector('#name').value.trim();
  const email   = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    shake(form);
    return;
  }

  // Simulate send
  sendBtn.disabled = true;
  sendBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
    Sending…`;

  setTimeout(() => {
    sendBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Message Sent!`;
    sendBtn.style.background = 'linear-gradient(130deg,#16a34a,#22c55e)';
    sendBtn.style.boxShadow  = '0 6px 28px rgba(34,197,94,0.35)';
    form.reset();

    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.style.background = '';
      sendBtn.style.boxShadow  = '';
      sendBtn.innerHTML = `Send Message
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>`;
    }, 3500);
  }, 1400);
});

function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shakeForm 0.4s ease';
}

// Inject shake keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes shakeForm {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-8px); }
    40%      { transform: translateX(8px); }
    60%      { transform: translateX(-5px); }
    80%      { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

// ─── SKILL CARD TILT ─────────────────────────────────────────
document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
    const y      = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ─── CURSOR GLOW (desktop only) ──────────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%,-50%);
    transition: opacity 0.3s;
    z-index: 0;
    top: 0; left: 0;
  `;
  document.body.appendChild(glow);

  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}
