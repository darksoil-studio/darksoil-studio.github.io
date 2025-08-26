import { mdiDownload } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import { LitElement, css, html } from 'lit';

// Simple SVG wrapper function since @darksoil-studio/holochain-elements doesn't exist
function wrapPathInSvg(path) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg viewBox="0 0 24 24"><path d="${path}"/></svg>`)}`;
}

const allBrowsersTypes = [
  'Windows',
  'MacOS Intel',
  'MacOS Silicon',
  'Linux',
];

function browserType() {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes('windows')) return 'Windows';
  if (ua.includes('mac')) {
    if (ua.includes('intel')) return 'MacOS Intel';
    else return 'MacOS Silicon';
  }
  return 'Linux';
}

function download(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

class DownloadInstallerButton extends LitElement {
  static properties = {
    linuxUrl: { attribute: 'linux-url' },
    nixCommand: { attribute: 'nix-command' },
    macosIntelUrl: { attribute: 'macos-intel-url' },
    macosSiliconUrl: { attribute: 'macos-silicon-url' },
    windowsUrl: { attribute: 'windows-url' }
  };

  constructor() {
    super();
    this._detectedOS = this._detectOS();
  }

  _detectOS() {
    const userAgent = navigator.userAgent || '';
    const ua = userAgent.toLowerCase();
    const platform = (navigator.platform || '').toLowerCase();

    // Windows
    if (platform.includes('win') || ua.includes('windows')) {
      return 'Windows';
    }

    // macOS: default to Intel unless UA clearly indicates ARM
    if (platform.includes('mac')) {
      const isArm = ua.includes('arm64') || ua.includes('aarch64') || ua.includes('apple silicon') || ua.includes('apple m1') || ua.includes('apple m2') || ua.includes('apple m3') || ua.includes('apple m4');
      return isArm ? 'MacOS Silicon' : 'MacOS Intel';
    }

    // Linux
    if (platform.includes('linux') || ua.includes('linux')) {
      return 'Linux';
    }

    // Fallback to Windows (most common desktop default)
    return 'Windows';
  }

  getUrlFor(browser) {
    switch (browser) {
      case 'Windows':
        return this.windowsUrl;
      case 'MacOS Intel':
        return this.macosIntelUrl;
      case 'MacOS Silicon':
        return this.macosSiliconUrl;
      case 'Linux':
        return this.linuxUrl;
    }
  }

  render() {
    const browser = this._detectedOS;
    return html`<div style="display:flex; flex-direction: row; align-items: center; width: 100%; justify-content: center; gap: 0;">
        <a 
          href="${this.getUrlFor(browser)}" 
          class="download-button primary"
          style="
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 32px;
            background: white;
            color: #1D4ED8;
            text-decoration: none;
            border-radius: 12px 0 0 12px;
            font-weight: 700;
            font-size: 18px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            justify-content: center;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          "
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(0, 0, 0, 0.1)'"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="${mdiDownload}"/>
          </svg>
          Download for ${browser}
        </a>
        
        <sl-dropdown class="os-dropdown">
          <button
            slot="trigger"
            class="dropdown-trigger"
            style="
              padding: 16px 20px;
              background: white;
              color: #1D4ED8;
              border: none;
              border-radius: 0 12px 12px 0;
              cursor: pointer;
              font-size: 18px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 60px;
              height: 56px;
              transition: all 0.3s ease;
              box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(0, 0, 0, 0.1)'"
          >
            ▾
          </button>
          <sl-menu class="os-menu" style="min-width: 220px;">
            ${allBrowsersTypes
              .filter(b => b !== browser)
              .map(
                os => html`
                  <sl-menu-item 
                    @click=${() => download(this.getUrlFor(os))}
                    style="
                      padding: 14px 20px;
                      display: flex;
                      align-items: center;
                      gap: 12px;
                      cursor: pointer;
                      transition: background-color 0.2s ease;
                      border-radius: 8px;
                      margin: 4px 8px;
                    "
                    onmouseover="this.style.backgroundColor='#F0F7FF'"
                    onmouseout="this.style.backgroundColor='#FFFFFF'"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#667eea">
                      <path d="${mdiDownload}"/>
                    </svg>
                    <span style="font-weight: 600; color: #222222; font-size: 14px;">Download for ${os}</span>
                  </sl-menu-item>
                `,
              )}
          </sl-menu>
        </sl-dropdown>
      </div>`;
  }

  static styles = css`
    /* Main download button: subtle blue border on hover */
    .download-button.primary:hover {
      border: 2px solid #1D4ED8 !important;
    }

    /* Remove all hover color changes per request */
    
    sl-dropdown::part(base) {
      border: none;
      box-shadow: none;
    }
    
    sl-dropdown::part(panel) {
      background: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      padding: 4px;
    }
    sl-menu::part(base) {
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
    }
    
    sl-menu-item::part(base) {
      background: #FFFFFF;
      border-radius: 6px;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    sl-copy-button::part(base) {
      border: 1px solid #D1D5DB;
      border-radius: 4px;
      padding: 4px 8px;
    }
  `;
}

// Define the custom element
customElements.define('download-installer-button', DownloadInstallerButton);
