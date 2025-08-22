function c(){return`
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
              <a href="/dash-chat">Dash Chat</a>
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
              <a href="/dash-chat">Dash Chat</a>
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
  `}function u(){document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-menu-overlay"),r=document.querySelector(".close-mobile-menu"),n=document.querySelector(".dropdown"),s=document.querySelector(".dropdown-toggle"),d=document.querySelector(".dropdown-menu"),o=document.querySelector(".mobile-dropdown"),i=o==null?void 0:o.querySelector(".dropdown-toggle"),l=o==null?void 0:o.querySelector(".dropdown-menu");a&&t&&a.addEventListener("click",()=>{t.classList.add("open"),a.setAttribute("aria-expanded",!0),document.body.classList.add("mobile-menu-open")}),r&&t&&r.addEventListener("click",()=>{t.classList.remove("open"),a.setAttribute("aria-expanded",!1),document.body.classList.remove("mobile-menu-open")}),t.addEventListener("click",e=>{e.target===t&&(t.classList.remove("open"),a.setAttribute("aria-expanded",!1),document.body.classList.remove("mobile-menu-open"))}),o&&i&&l&&(i.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),o.classList.toggle("open")}),l.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("open"),a.setAttribute("aria-expanded",!1),document.body.classList.remove("mobile-menu-open"),o.classList.remove("open")})})),n&&s&&d&&(s.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),n.classList.toggle("open")}),document.addEventListener("click",e=>{n.contains(e.target)||n.classList.remove("open")}),d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("open")})}))})}export{c,u as i};
