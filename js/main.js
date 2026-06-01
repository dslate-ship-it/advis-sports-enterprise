/* ============================================================
   THE ADVISORY — Main JavaScript
   Navigation, scroll reveals, interactions
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // NAVIGATION: Sticky + Header behavior
  // ============================================================
  function initNavScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const isLight = header.classList.contains('light-header');
    let lastScroll = 0;

    function onScroll() {
      const scroll = window.scrollY;

      if (scroll > 40) {
        if (isLight) {
          header.classList.add('scrolled-light');
        } else {
          header.classList.add('scrolled');
        }
      } else {
        header.classList.remove('scrolled');
        header.classList.remove('scrolled-light');
      }

      lastScroll = scroll;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ============================================================
  // MOBILE NAV: Toggle + Submenu accordions
  // ============================================================
  function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    if (!toggle || !mobileNav) return;

    function openNav() {
      toggle.classList.add('active');
      mobileNav.classList.add('open');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      toggle.classList.remove('active');
      mobileNav.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    // Mobile submenu triggers
    const subTriggers = document.querySelectorAll('.mobile-nav-trigger[data-submenu]');
    subTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute('data-submenu');
        const submenu = document.getElementById(targetId);
        if (!submenu) return;

        const isOpen = trigger.classList.contains('open');

        // Close all others
        subTriggers.forEach(t => {
          t.classList.remove('open');
          const tTarget = t.getAttribute('data-submenu');
          const tMenu = document.getElementById(tTarget);
          if (tMenu) tMenu.classList.remove('open');
        });

        // Toggle clicked
        if (!isOpen) {
          trigger.classList.add('open');
          submenu.classList.add('open');
        }
      });
    });

    // Close on nav link clicks
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeNav);
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => {
      // Skip elements already revealed (pre-marked in HTML)
      if (el.classList.contains('revealed')) return;
      observer.observe(el);
    });
  }

  // ============================================================
  // ACCORDION
  // ============================================================
  function initAccordions() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isActive = trigger.classList.contains('active');

        // Optional: close siblings
        const parent = trigger.closest('.accordion-group');
        if (parent) {
          parent.querySelectorAll('.accordion-trigger').forEach(t => {
            t.classList.remove('active');
            const c = t.nextElementSibling;
            if (c) c.classList.remove('open');
          });
        }

        if (!isActive) {
          trigger.classList.add('active');
          if (content) content.classList.add('open');
        }
      });
    });
  }

  // ============================================================
  // HERO: Large text letter-by-letter entrance
  // ============================================================
  function initHeroText() {
    const heroWords = document.querySelectorAll('.hero-word');
    heroWords.forEach((word, i) => {
      word.style.transitionDelay = `${i * 0.08 + 0.2}s`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          word.classList.add('visible');
        }, i * 80 + 200);
      });
    });
  }

  // ============================================================
  // STATS COUNTER ANIMATION
  // ============================================================
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1800;
    const start = performance.now();

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = target * eased;

      el.textContent = prefix + (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // ============================================================
  // VIDEO: Vimeo autoplay on scroll into view
  // ============================================================
  function initVideoAutoplay() {
    // Vimeo iframes with autoplay attribute
    const players = document.querySelectorAll('.vimeo-autoplay');
    if (!players.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const iframe = entry.target;
        const src = iframe.getAttribute('src') || '';

        if (entry.isIntersecting) {
          if (!src.includes('autoplay=1')) {
            const newSrc = src.includes('?')
              ? src + '&autoplay=1&muted=1&loop=1&background=1'
              : src + '?autoplay=1&muted=1&loop=1&background=1';
            iframe.setAttribute('src', newSrc);
          }
        }
      });
    }, { threshold: 0.3 });

    players.forEach(p => observer.observe(p));
  }

  // ============================================================
  // SMOOTH SCROLL for anchor links
  // ============================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 72; // header height
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================================
  // STAGGER CHILDREN
  // ============================================================
  function initStaggerGroups() {
    document.querySelectorAll('[data-stagger]').forEach(group => {
      const delay = parseFloat(group.getAttribute('data-stagger')) || 0.1;
      const children = group.children;
      Array.from(children).forEach((child, i) => {
        child.classList.add('reveal');
        child.style.transitionDelay = `${i * delay}s`;
      });
    });
    // Re-init reveal observer to catch new elements
    initScrollReveal();
  }

  // ============================================================
  // INIT ALL
  // ============================================================
  function init() {
    initNavScroll();
    initMobileNav();
    initScrollReveal();
    initAccordions();
    initHeroText();
    initCounters();
    initVideoAutoplay();
    initSmoothScroll();
    initStaggerGroups();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
