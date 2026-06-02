/* ============================================================
   THE ADVISORY — Shared Navigation / Footer Injection
   Injects the same header and footer into every page
   ============================================================ */

(function() {
  'use strict';

  const NAV_HTML = `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="index.html" class="site-logo">
        <div class="logo-icon">
          <img src="images/social-proof-1.jpg" alt="" onerror="this.style.display='none'">
        </div>
        <div class="logo-text">
          <span class="logo-name">The Advisory</span>
          <span class="logo-sub">Enterprise Management</span>
        </div>
      </a>

      <nav class="primary-nav" aria-label="Primary navigation">
        <ul>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Who We Serve
              <svg class="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <ul class="dropdown">
              <li class="dropdown-item"><a href="sports.html" class="dropdown-link">Professional Athletes</a></li>
              <li class="dropdown-item"><a href="nil.html" class="dropdown-link">NIL Athletes</a></li>
              <li class="dropdown-item"><a href="creatives.html" class="dropdown-link">Entertainers &amp; Creatives</a></li>
              <li class="dropdown-item"><a href="bespoke.html" class="dropdown-link">Bespoke &amp; Entrepreneurs</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="services.html" class="nav-link">
              Services
              <svg class="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <ul class="dropdown">
              <li class="dropdown-item"><a href="services.html#contracts" class="dropdown-link">Contracts &amp; Negotiation</a></li>
              <li class="dropdown-item"><a href="services.html#nil-services" class="dropdown-link">NIL Strategy &amp; Compliance</a></li>
              <li class="dropdown-item"><a href="services.html#entity" class="dropdown-link">Entity &amp; Tax Structure</a></li>
              <li class="dropdown-item"><a href="services.html#brand-ip" class="dropdown-link">Brand &amp; IP</a></li>
              <li class="dropdown-item"><a href="services.html#family-governance" class="dropdown-link">Family Office &amp; Governance</a></li>
              <li class="dropdown-item"><a href="services.html#diligence" class="dropdown-link">Deal Diligence &amp; M&amp;A</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="nil.html" class="nav-link">NIL</a></li>
          <li class="nav-item">
            <a href="partnerships.html" class="nav-link">
              Partnerships
              <svg class="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <ul class="dropdown">
              <li class="dropdown-item"><a href="partnerships.html#agents-managers" class="dropdown-link">Agents &amp; Managers</a></li>
              <li class="dropdown-item"><a href="partnerships.html#advisors" class="dropdown-link">Trainers &amp; Advisors</a></li>
              <li class="dropdown-item"><a href="partnerships.html#connectors" class="dropdown-link">Movers &amp; Shakers</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="contact.html" class="btn btn--ghost">Start a Conversation</a>
      </div>

      <button class="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-nav-overlay"></div>

  <nav class="mobile-nav" aria-label="Mobile navigation">
    <ul>
      <li class="mobile-nav-item">
        <button class="mobile-nav-trigger" data-submenu="m-serve"><span>Who We Serve</span>
          <svg class="m-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8l5 5 5-5"/></svg>
        </button>
        <div class="mobile-submenu" id="m-serve">
          <a href="sports.html" class="mobile-submenu-link">Professional Athletes</a>
          <a href="nil.html" class="mobile-submenu-link">NIL Athletes</a>
          <a href="creatives.html" class="mobile-submenu-link">Entertainers &amp; Creatives</a>
          <a href="bespoke.html" class="mobile-submenu-link">Bespoke &amp; Entrepreneurs</a>
        </div>
      </li>
      <li class="mobile-nav-item">
        <button class="mobile-nav-trigger" data-submenu="m-services"><span>Services</span>
          <svg class="m-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8l5 5 5-5"/></svg>
        </button>
        <div class="mobile-submenu" id="m-services">
          <a href="services.html#contracts" class="mobile-submenu-link">Contracts &amp; Negotiation</a>
          <a href="services.html#nil-services" class="mobile-submenu-link">NIL Strategy &amp; Compliance</a>
          <a href="services.html#entity" class="mobile-submenu-link">Entity &amp; Tax Structure</a>
          <a href="services.html#brand-ip" class="mobile-submenu-link">Brand &amp; IP</a>
          <a href="services.html#family-governance" class="mobile-submenu-link">Family Office &amp; Governance</a>
          <a href="services.html#diligence" class="mobile-submenu-link">Deal Diligence &amp; M&amp;A</a>
        </div>
      </li>
      <li class="mobile-nav-item"><button class="mobile-nav-trigger"><a href="nil.html">NIL</a></button></li>
      <li class="mobile-nav-item">
        <button class="mobile-nav-trigger" data-submenu="m-partners"><span>Partnerships</span>
          <svg class="m-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8l5 5 5-5"/></svg>
        </button>
        <div class="mobile-submenu" id="m-partners">
          <a href="partnerships.html#agents-managers" class="mobile-submenu-link">Agents &amp; Managers</a>
          <a href="partnerships.html#advisors" class="mobile-submenu-link">Trainers &amp; Advisors</a>
          <a href="partnerships.html#connectors" class="mobile-submenu-link">Movers &amp; Shakers</a>
        </div>
      </li>
      <li class="mobile-nav-item"><button class="mobile-nav-trigger"><a href="about.html">About</a></button></li>
    </ul>
    <div class="mobile-nav-cta">
      <a href="contact.html" class="btn btn--primary">Start a Conversation</a>
    </div>
  </nav>
  `;

  const FOOTER_HTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">The Advisory</div>
          <p>Enterprise management for professional athletes, NIL athletes, entertainers, and high-net-worth entrepreneurs. Legal, financial, and operational excellence — under one roof.</p>
          <div style="margin-top: 1.5rem;">
            <a href="contact.html" class="btn btn--primary" style="padding: 0.65rem 1.25rem; font-size: 0.75rem;">Start Here</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Who We Serve</h5>
          <ul>
            <li><a href="sports.html">Professional Athletes</a></li>
            <li><a href="nil.html">NIL Athletes</a></li>
            <li><a href="creatives.html">Entertainers &amp; Creatives</a></li>
            <li><a href="bespoke.html">Bespoke &amp; Entrepreneurs</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="services.html#contracts">Contracts</a></li>
            <li><a href="nil.html">NIL Strategy</a></li>
            <li><a href="services.html#entity">Entity &amp; Tax</a></li>
            <li><a href="services.html#brand-ip">Brand &amp; IP</a></li>
            <li><a href="services.html#family-governance">Family Office &amp; Governance</a></li>
            <li><a href="services.html#diligence">Deal Diligence</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="partnerships.html">Partnerships</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 The Advisory. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Disclosures</a>
        </div>
      </div>
    </div>
  </footer>
  `;

  // Inject on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Inject header before body content
    const headerPlaceholder = document.getElementById('nav-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = NAV_HTML;
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    }
  });

})();
