// Shared Menu Component for Dark Soil Studio
export function createSharedMenu() {
  return `
    <header>
      <nav class="menu-links">
        <div class="menu-left">
          <a href="/" class="home-link">darksoil studio</a>
        </div>
        <div class="menu-right">
          <!-- Desktop Navigation -->
          <nav class="desktop-nav">
            <a href="/dashchat">Dash Chat</a>
            <a href="/people">People</a>
            <a href="/contact">Connect</a>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button class="hamburger-menu" aria-label="Open menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <!-- GitHub Link -->
          <custom-social-link name="Github" url="https://github.com/darksoil-studio/dash-chat"></custom-social-link>
        </div>
      </nav>
      
      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu-overlay">
        <button class="close-mobile-menu" aria-label="Close menu">&times;</button>
        <nav class="mobile-menu-content">
          <a href="/dashchat">Dash Chat</a>
          <a href="/people">People</a>
          <a href="/contact">Connect</a>
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

    // Hamburger opens overlay (mobile only)
    if (hamburger && mobileOverlay) {
      hamburger.addEventListener('click', () => {
        mobileOverlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('mobile-menu-open');
      });
    }
    if (closeMobileMenu && mobileOverlay) {
      closeMobileMenu.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-menu-open');
      });
    }
    // Close overlay when clicking outside nav
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) {
        mobileOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-menu-open');
      }
    });
  });
}
