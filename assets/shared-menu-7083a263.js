function s(){return`
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
  `}function o(){document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".hamburger-menu"),e=document.querySelector(".mobile-menu-overlay"),n=document.querySelector(".close-mobile-menu");a&&e&&a.addEventListener("click",()=>{e.classList.add("open"),a.setAttribute("aria-expanded","true"),document.body.classList.add("mobile-menu-open")}),n&&e&&n.addEventListener("click",()=>{e.classList.remove("open"),a.setAttribute("aria-expanded","false"),document.body.classList.remove("mobile-menu-open")}),e.addEventListener("click",t=>{t.target===e&&(e.classList.remove("open"),a.setAttribute("aria-expanded","false"),document.body.classList.remove("mobile-menu-open"))})})}export{s as c,o as i};
