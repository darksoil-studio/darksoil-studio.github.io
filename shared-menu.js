// Shared Menu Component for Dark Soil Studio
export function createSharedMenu() {
  return `
    <header>
      <button class="hamburger-menu" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="menu-links">
        <div class="menu-left">
          <a href="/" class="home-link">darksoil studio</a>
        </div>
        <div class="menu-right">
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">Projects ▾</a>
            <div class="dropdown-menu">
              <a href="/dashchat">Dash Chat</a>
              <a href="/corri">Corri AI</a>
              <a href="https://darksoil.studio/p2p-shipyard" target="_blank" rel="noopener">p2p Shipyard</a>
              <a href="/bouy-os">Buoy</a>
            </div>
          </div>
          <a href="/contact">Connect</a>
          <div class="menu-separator"></div>
          <custom-social-link name="Github" url="https://github.com/darksoil-studio"></custom-social-link>
          <a href="https://darksoil.studio/p2p-shipyard/" class="dev-btn" target="_blank" rel="noopener" title="Developer Documentation">developer portal</a>
        </div>
      </nav>
      <div class="mobile-menu-overlay">
        <button class="close-mobile-menu" aria-label="Close menu">&times;</button>
        <nav class="mobile-menu-content">
          <div class="dropdown mobile-dropdown">
            <a href="#" class="dropdown-toggle">Projects ▾</a>
            <div class="dropdown-menu">
              <a href="/dashchat">Dash Chat</a>
              <a href="/corri">Corri AI</a>
              <a href="https://darksoil.studio/p2p-shipyard" target="_blank" rel="noopener">p2p Shipyard</a>
              <a href="/bouy-os">Buoy</a>
            </div>
          </div>
          <a href="/contact">Connect</a>
          <a href="https://darksoil.studio/p2p-shipyard/" class="dev-btn" target="_blank" rel="noopener" title="Developer Documentation">developer portal</a>
        </nav>
      </div>
    </header>
  `;
}

// Shared menu JavaScript functionality
export function initializeSharedMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMobileMenu = document.querySelector('.close-mobile-menu');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Mobile dropdown
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const mobileDropdownToggle = mobileDropdown?.querySelector('.dropdown-toggle');
    const mobileDropdownMenu = mobileDropdown?.querySelector('.dropdown-menu');

    // Hamburger opens overlay
    if (hamburger && mobileOverlay) {
      hamburger.addEventListener('click', () => {
        mobileOverlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', true);
        document.body.classList.add('mobile-menu-open');
      });
    }
    if (closeMobileMenu && mobileOverlay) {
      closeMobileMenu.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.classList.remove('mobile-menu-open');
      });
    }
    // Close overlay when clicking outside nav
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) {
        mobileOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.classList.remove('mobile-menu-open');
      }
    });

    // Mobile dropdown logic
    if (mobileDropdown && mobileDropdownToggle && mobileDropdownMenu) {
      mobileDropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mobileDropdown.classList.toggle('open');
      });
      mobileDropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileOverlay.classList.remove('open');
          hamburger.setAttribute('aria-expanded', false);
          document.body.classList.remove('mobile-menu-open');
          mobileDropdown.classList.remove('open');
        });
      });
    }

    // Desktop dropdown logic only
    if (dropdown && dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
      dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          dropdown.classList.remove('open');
        });
      });
    }
  });
}
