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
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    if (platform.includes('Win') || userAgent.includes('Windows')) {
      return 'Windows';
    } else if (platform.includes('Mac')) {
      // Check if it's Apple Silicon
      if (navigator.userAgent.includes('Mac OS X') && navigator.userAgent.includes('AppleWebKit')) {
        // For Apple Silicon, we can't detect it perfectly from user agent alone
        // But we can check if it's a newer Mac (likely Silicon)
        const isAppleSilicon = navigator.userAgent.includes('Mac OS X 10_15') || 
                              navigator.userAgent.includes('Mac OS X 11_') || 
                              navigator.userAgent.includes('Mac OS X 12_') ||
                              navigator.userAgent.includes('Mac OS X 13_') ||
                              navigator.userAgent.includes('Mac OS X 14_');
        return isAppleSilicon ? 'MacOS Silicon' : 'MacOS Intel';
      }
      return 'MacOS Intel';
    } else if (platform.includes('Linux') || userAgent.includes('Linux')) {
      return 'Linux';
    }
    
    // Default fallback
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
    return html`<div
      style="
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        gap: 24px; 
        max-width: 400px;
        margin: 0 auto;
        padding: 32px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      "
    >
      <div style="
        text-align: center;
        color: white;
        margin-bottom: 8px;
      ">
        <h3 style="
          margin: 0 0 8px 0;
          font-size: 24px;
          font-weight: 700;
          color: white;
        ">Download Dash Chat</h3>
        <p style="
          margin: 0;
          font-size: 16px;
          opacity: 0.9;
          color: white;
        ">Get the latest version for ${browser}</p>
      </div>

      <div style="display:flex; flex-direction: row; align-items: center; width: 100%;">
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
            flex: 1;
            justify-content: center;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          "
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(0, 0, 0, 0.1)'"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="${mdiDownload}"/>
          </svg>
          Download
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
                    onmouseout="this.style.backgroundColor='transparent'"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#667eea">
                      <path d="${mdiDownload}"/>
                    </svg>
                    <span style="font-weight: 600; color: #374151; font-size: 16px;">Download for ${os}</span>
                  </sl-menu-item>
                `,
              )}
          </sl-menu>
        </sl-dropdown>
      </div>

      ${this.nixCommand && browser === 'Linux'
        ? html`
            <div style="
              width: 100%;
              text-align: center;
              padding: 20px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
            ">
              <span style="
                display: block;
                margin-bottom: 12px;
                color: white;
                font-size: 14px;
                font-weight: 500;
                opacity: 0.9;
              ">Or install with Nix:</span>
              <div style="
                display: flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 8px;
                padding: 12px 16px;
                font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                font-size: 14px;
                color: #374151;
              ">
                <span style="flex: 1; text-align: left;">${this.nixCommand}</span>
                <sl-copy-button
                  .value=${this.nixCommand}
                  style="
                    --sl-color-primary-600: #667eea;
                    --sl-color-primary-700: #764ba2;
                  "
                ></sl-copy-button>
              </div>
            </div>
          `
        : html``}
    </div>`;
  }

  static styles = css`
    .download-button.primary:hover {
      background: #1E40AF !important;
    }
    
    .dropdown-trigger:hover {
      background: #1E40AF !important;
    }
    
    sl-menu-item:hover {
      background-color: #F3F4F6 !important;
    }
    
    sl-dropdown::part(base) {
      border: none;
      box-shadow: none;
    }
    
    sl-menu::part(base) {
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      background: white;
      padding: 8px 0;
    }
    
    sl-menu-item::part(base) {
      border-radius: 4px;
      margin: 2px 8px;
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
