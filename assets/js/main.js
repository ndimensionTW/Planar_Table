
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-menu-toggle]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.classList.toggle('open', opened);
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const page = document.body.dataset.page;
document.querySelectorAll('[data-page-link]').forEach(link => {
  if (link.dataset.pageLink === page) link.classList.add('active');
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  revealElements.forEach(el => io.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('visible'));
}

const counters = document.querySelectorAll('[data-counter]');
const formatCounter = value => value >= 1000 ? `${Math.round(value / 1000)}K` : value.toString();

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.counter || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatCounter(Math.round(target * eased)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: .5 });
  counters.forEach(el => counterObserver.observe(el));
} else {
  counters.forEach(el => { el.textContent = formatCounter(Number(el.dataset.counter || 0)) + (el.dataset.suffix || ''); });
}

// Subtle tabletop parallax for custom SVG/mockup cards.
const motionTargets = document.querySelectorAll('.hero-board, .product-device, .image-card');
motionTargets.forEach(target => {
  target.addEventListener('mousemove', event => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    target.style.transform = `perspective(1000px) rotateX(${(-y * 2.2).toFixed(2)}deg) rotateY(${(x * 2.2).toFixed(2)}deg)`;
  });
  target.addEventListener('mouseleave', () => {
    target.style.transform = '';
  });
});
