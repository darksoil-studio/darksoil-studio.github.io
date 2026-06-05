// Shared Menu Component for Dark Soil Studio
export function createSharedMenu() {
  return `
    <header>
      <nav class="menu-links">
        <div class="menu-left">
          <a href="/" class="home-link">darksoil studio</a>
        </div>
        <div class="menu-right">
          <!-- GitHub Link -->
          <custom-social-link name="Github" url="https://github.com/darksoil-studio/dash-chat"></custom-social-link>
        </div>
      </nav>
    </header>
  `;
}

// Mobile/desktop nav was removed, so there is nothing to wire up.
export function initializeSharedMenu() {}
