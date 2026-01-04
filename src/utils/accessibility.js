// Accessibility utility functions

export const announce = (message) => {
  const announcer = document.getElementById('a11y-announcer');
  if (announcer) {
    announcer.textContent = message;
  }
};

export const setContrast = (enabled) => {
  if (enabled) {
    document.documentElement.setAttribute('data-theme', 'high-contrast');
    localStorage.setItem('high-contrast', 'true');
    announce("High contrast enabled");
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('high-contrast', 'false');
    announce("High contrast disabled");
  }
  return enabled;
};

export const getContrast = () => {
  return localStorage.getItem('high-contrast') === 'true';
};

export const setFontSize = (sizePx) => {
  document.documentElement.style.fontSize = sizePx + 'px';
  localStorage.setItem('font-size', sizePx);
  announce(`Font size set to ${sizePx} pixels`);
};

export const getFontSize = () => {
  return parseInt(localStorage.getItem('font-size')) || 16;
};

export const increaseFontSize = () => {
  const cur = parseInt(getComputedStyle(document.documentElement).fontSize);
  if (cur < 22) setFontSize(cur + 1);
};

export const decreaseFontSize = () => {
  const cur = parseInt(getComputedStyle(document.documentElement).fontSize);
  if (cur > 12) setFontSize(cur - 1);
};

export const resetFontSize = () => {
  setFontSize(16);
};

export const initAccessibility = () => {
  // Load saved settings
  const savedFontSize = getFontSize();
  setFontSize(savedFontSize);
  
  const savedContrast = getContrast();
  if (savedContrast) {
    document.documentElement.setAttribute('data-theme', 'high-contrast');
  }
  
  // Setup keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openMenus = document.querySelectorAll('.nav-menu.open');
      openMenus.forEach(menu => {
        menu.classList.remove('open');
        const btn = document.getElementById('mobileMenuBtn');
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
      announce("Navigation closed");
    }
  });

  // Setup smooth scrolling with focus management
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        
        // Close mobile nav if open
        const nav = document.getElementById('primaryNav');
        const btn = document.getElementById('mobileMenuBtn');
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
};