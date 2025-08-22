# Shared Menu System for Dark Soil Studio

This document explains how to use the shared menu system that has been implemented to maintain consistency across all pages and reduce code duplication.

## Overview

The shared menu system consists of:
- `shared-menu.js` - Contains the menu HTML and JavaScript functionality
- A container div (`<div id="shared-menu-container"></div>`) in each page
- Import statements to load and initialize the shared menu

## How to Use

### 1. Add the Menu Container

In your HTML page, replace the entire `<header>` section with:

```html
<div id="shared-menu-container"></div>
```

### 2. Import and Initialize the Shared Menu

In your JavaScript section, add these imports and initialization:

```javascript
// Import and initialize shared menu
import { createSharedMenu, initializeSharedMenu } from './shared-menu.js';

// Insert the shared menu
document.getElementById('shared-menu-container').innerHTML = createSharedMenu();

// Initialize the shared menu functionality
initializeSharedMenu();
```

### 3. Complete Example

Here's a complete example of how a page should look:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <title>Your Page Title - darksoil studio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>
    <!-- Shared menu container -->
    <div id="shared-menu-container"></div>

    <!-- Your page content here -->
    <rocket-content-area>
      <h1>Your Page Title</h1>
      <p>Your content...</p>
    </rocket-content-area>

    <footer>
      <p class="legal">
        © 2025 darksoil studio. All rights reserved.
      </p>
    </footer>

    <script type="module">
      export async function registerCustomElements() {
        // server-only components
        // prettier-ignore
        customElements.define('rocket-content-area', await import('@rocket/components/content-area.js').then(m => m.RocketContentArea));
        // prettier-ignore
        customElements.define('rocket-card', await import('@rocket/components/card.js').then(m => m.RocketCard));
        // prettier-ignore
        customElements.define('rocket-columns', await import('@rocket/components/card.js').then(m => m.RocketColumns));
      }

      registerCustomElements();
      import "./custom-social-link.js";
      
      // Import and initialize shared menu
      import { createSharedMenu, initializeSharedMenu } from './shared-menu.js';
      
      // Insert the shared menu
      document.getElementById('shared-menu-container').innerHTML = createSharedMenu();
      
      // Initialize the shared menu functionality
      initializeSharedMenu();
    </script>
  </body>
</html>
```

## Template File

Use `page-template.html` as a starting point for new pages. It already includes all the necessary structure and imports.

## What's Included

The shared menu automatically provides:

- **Desktop Navigation**: Logo, Projects dropdown, Connect link, GitHub link, Developer Portal link
- **Mobile Navigation**: Hamburger menu with overlay, mobile-optimized dropdown
- **Responsive Design**: Automatically adapts to different screen sizes
- **Dropdown Functionality**: Projects menu with hover and click support
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Current Menu Items

- **Home**: Links to `/` (index page)
- **Projects Dropdown**:
  - Dash Chat → `/dash-chat`
  - Corri AI → `/corri`
  - p2p Shipyard → External link
  - Buoy → `/bouy-os`
- **Connect**: Links to `/contact`
- **GitHub**: Links to GitHub organization
- **Developer Portal**: Links to p2p Shipyard

## Benefits

1. **Consistency**: All pages have identical navigation
2. **Maintainability**: Update menu in one place, affects all pages
3. **Clean URLs**: All internal links use clean URLs without `.html` extensions
4. **Reduced Code**: No more duplicated menu HTML and JavaScript
5. **Easier Updates**: Add new menu items or change existing ones in one file

## Adding New Menu Items

To add new menu items, edit `shared-menu.js` and update the `createSharedMenu()` function. The changes will automatically appear on all pages.

## Troubleshooting

- **Menu not appearing**: Check that the container div exists and the JavaScript is loading
- **Links not working**: Ensure the shared menu is imported and initialized
- **Build errors**: Verify that `shared-menu.js` is in the same directory as your HTML files

## Files Updated

The following files have been updated to use the shared menu system:
- `index.html`
- `drapac.html`
- `contact.html`
- `page-template.html` (new template file)
