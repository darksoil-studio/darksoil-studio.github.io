import { LitElement, html, css } from "lit";

export class CustomSocialLink extends LitElement {
  static properties = {
    url: { type: String },
    name: { type: String },
    siteName: { type: String },
    _isDark: { state: true },
  };

  constructor() {
    super();
    this.url = "";
    this.name = "";
    this.siteName = "";
    this._isDark = (typeof window !== 'undefined' && window.matchMedia)
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  }

  connectedCallback() {
    super.connectedCallback();
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => { this._isDark = e.matches; this.requestUpdate(); };
      mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
      this._mq = mq; this._mqHandler = handler;
    } catch (_) { /* no-op */ }
  }

  disconnectedCallback() {
    try {
      if (this._mq && this._mqHandler) {
        this._mq.removeEventListener ? this._mq.removeEventListener('change', this._mqHandler) : this._mq.removeListener(this._mqHandler);
      }
    } catch (_) { /* no-op */ }
    super.disconnectedCallback();
  }

  get _iconColor() {
    return this._isDark ? 'white' : '000000';
  }

  render() {
    return html`
      <a
        class="social-link"
        href="${this.url}"
        aria-label="${this.siteName} on ${this.name}"
        rel="noopener noreferrer"
        target="_blank"
        slot="social"
      >
        <span class="sr-only">${this.name}</span>
        <img alt="${this.name} icon" src="https://cdn.simpleicons.org/${this.name.toLowerCase()}/${this._iconColor}" />
      </a>
    `;
  }

  static styles = [
    css`
      :host {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-right: 15px;
      }
      .social-link {
        width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: transparent;
        transition: background 0.2s ease, transform 0.05s ease;
      }
      .social-link:active {
        transform: translateY(1px);
      }
      img {
        width: 22px;
        height: 22px;
        display: block;
      }
      @media (prefers-color-scheme: dark) {
        .social-link { background: rgba(255,255,255,0.06); }
        .social-link:hover { background: rgba(255,255,255,0.12); }
      }
      @media (prefers-color-scheme: light) {
        .social-link:hover { background: rgba(0,0,0,0.06); }
      }
      .sr-only {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `,
  ];
}
customElements.define("custom-social-link", CustomSocialLink);
