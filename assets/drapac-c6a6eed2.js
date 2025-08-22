var ko=Object.defineProperty;var Co=(t,e,o)=>e in t?ko(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var ee=(t,e,o)=>(Co(t,typeof e!="symbol"?e+"":e,o),o);import{i as M,u as So,f as Eo,a as Ze,x as $,T as Tt,b as $o,E as Ft,c as Oe,_ as oe}from"./custom-social-link-bcdda2cb.js";import{c as Ao,i as Lo}from"./shared-menu-60e66007.js";var ze="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",To=M`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const ue=new Set,vt=new Map;let ft,ge="ltr",ve="en";const Qe=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Qe){const t=new MutationObserver(to);ge=document.documentElement.dir||"ltr",ve=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Je(...t){t.map(e=>{const o=e.$code.toLowerCase();vt.has(o)?vt.set(o,Object.assign(Object.assign({},vt.get(o)),e)):vt.set(o,e),ft||(ft=e)}),to()}function to(){Qe&&(ge=document.documentElement.dir||"ltr",ve=document.documentElement.lang||navigator.language),[...ue.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Oo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ue.add(this.host)}hostDisconnected(){ue.delete(this.host)}dir(){return`${this.host.dir||ge}`.toLowerCase()}lang(){return`${this.host.lang||ve}`.toLowerCase()}getTranslationData(e){var o,i;const n=new Intl.Locale(e.replace(/_/g,"-")),r=n==null?void 0:n.language.toLowerCase(),s=(i=(o=n==null?void 0:n.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=vt.get(`${r}-${s}`),u=vt.get(r);return{locale:n,language:r,region:s,primary:l,secondary:u}}exists(e,o){var i;const{primary:n,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(n&&n[e]||r&&r[e]||o.includeFallback&&ft&&ft[e])}term(e,...o){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(n&&n[e])r=n[e];else if(ft&&ft[e])r=ft[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var eo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Je(eo);var zo=eo,ht=class extends Oo{};Je(zo);var Y=M`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,oo=Object.defineProperty,Po=Object.defineProperties,Ro=Object.getOwnPropertyDescriptor,Do=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,Mo=Object.prototype.hasOwnProperty,Bo=Object.prototype.propertyIsEnumerable,ie=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ye=t=>{throw TypeError(t)},Re=(t,e,o)=>e in t?oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,bt=(t,e)=>{for(var o in e||(e={}))Mo.call(e,o)&&Re(t,o,e[o]);if(Pe)for(var o of Pe(e))Bo.call(e,o)&&Re(t,o,e[o]);return t},Yt=(t,e)=>Po(t,Do(e)),a=(t,e,o,i)=>{for(var n=i>1?void 0:i?Ro(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(i?s(e,o,n):s(n))||n);return i&&n&&oo(e,o,n),n},io=(t,e,o)=>e.has(t)||ye("Cannot "+o),Io=(t,e,o)=>(io(t,e,"read from private field"),o?o.call(t):e.get(t)),Vo=(t,e,o)=>e.has(t)?ye("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Fo=(t,e,o,i)=>(io(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),No=function(t,e){this[0]=t,this[1]=e},Uo=t=>{var e=t[ie("asyncIterator")],o=!1,i,n={};return e==null?(e=t[ie("iterator")](),i=r=>n[r]=s=>e[r](s)):(e=e.call(t),i=r=>n[r]=s=>{if(o){if(o=!1,r==="throw")throw s;return s}return o=!0,{done:!1,value:new No(new Promise(l=>{var u=e[r](s);u instanceof Object||ye("Object expected"),l(u)}),1)}}),n[ie("iterator")]=()=>n,i("next"),"throw"in e?i("throw"):n.throw=r=>{throw r},"return"in e&&i("return"),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo={attribute:!0,type:String,converter:So,reflect:!1,hasChanged:Eo},Ho=(t=Wo,e,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),i==="accessor"){const{name:s}=o;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,u,t)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(i==="setter"){const{name:s}=o;return function(l){const u=this[s];e.call(this,l),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+i)};function c(t){return(e,o)=>typeof o=="object"?Ho(t,e,o):((i,n,r)=>{const s=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),s?Object.getOwnPropertyDescriptor(n,r):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return c({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(t,e){return(o,i,n)=>{const r=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:s,set:l}=typeof i=="object"?o:n??(()=>{const u=Symbol();return{get(){return this[u]},set(d){this[u]=d}}})();return De(o,i,{get(){let u=s.call(this);return u===void 0&&(u=r(this),(u!==null||this.hasUpdated)&&l.call(this,u)),u}})}return De(o,i,{get(){return r(this)}})}}var Bt,D=class extends Ze{constructor(){super(),Vo(this,Bt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,bt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let n=" (unknown version)",r=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(n&&r&&n===r)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,o){Io(this,Bt)||(this.constructor.elementProperties.forEach((i,n)=>{i.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),Fo(this,Bt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};Bt=new WeakMap;D.version="2.20.1";D.dependencies={};a([c()],D.prototype,"dir",2);a([c()],D.prototype,"lang",2);var we=class extends D{constructor(){super(...arguments),this.localize=new ht(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};we.styles=[Y,To];var Et=new WeakMap,$t=new WeakMap,At=new WeakMap,ne=new WeakSet,Rt=new WeakMap,no=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof n=="string"&&n.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{o.formData.append(n,l.toString())}):o.formData.append(n,r.toString()))},this.handleFormSubmit=o=>{var i;const n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Et.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Rt.set(this.host,[])},this.handleInteraction=o=>{const i=Rt.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=bt({form:o=>{const i=o.form;if(i){const r=o.getRootNode().querySelector(`#${i}`);if(r)return r}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Rt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Rt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Et.has(this.form)?Et.get(this.form).add(this.host):Et.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$t.has(this.form)||($t.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),At.has(this.form)||(At.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Et.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$t.has(this.form)&&(this.form.reportValidity=$t.get(this.form),$t.delete(this.form)),At.has(this.form)&&(this.form.checkValidity=At.get(this.form),At.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ne.add(t):ne.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!ne.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},xe=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Yt(bt({},xe),{valid:!1,valueMissing:!0}));Object.freeze(Yt(bt({},xe),{valid:!1,customError:!0}));var jo=M`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,_e=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function qo(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var de="";function Me(t){de=t}function Ko(t=""){if(!de){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Me(o.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let n="";i&&(n=i.getAttribute("src")),Me(n.split("/").slice(0,-1).join("/"))}}return de.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Xo={name:"default",resolver:t=>Ko(`assets/icons/${t}.svg`)},Yo=Xo,Be={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Go={name:"system",resolver:t=>t in Be?`data:image/svg+xml,${encodeURIComponent(Be[t])}`:""},Zo=Go,Qo=[Yo,Zo],he=[];function Jo(t){he.push(t)}function ti(t){he=he.filter(e=>e!==t)}function Ie(t){return Qo.find(e=>e.name===t)}var ei=M`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function F(t,e){const o=bt({waitUntilFirstUpdate:!1},e);return(i,n)=>{const{update:r}=i,s=Array.isArray(t)?t:[t];i.update=function(l){s.forEach(u=>{const d=u;if(l.has(d)){const h=l.get(d),p=this[d];h!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,p)}}),r.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,ro=t=>t.strings===void 0,ii={},ni=(t,e=ii)=>t._$AH=e;var Lt=Symbol(),Dt=Symbol(),re,se=new Map,B=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return this.svg=$`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Lt:Dt}catch{return Dt}try{const n=document.createElement("div");n.innerHTML=await i.text();const r=n.firstElementChild;if(((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())!=="svg")return Lt;re||(re=new DOMParser);const l=re.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Lt}catch{return Lt}}connectedCallback(){super.connectedCallback(),Jo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ti(this)}getIconSource(){const t=Ie(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?Ie(this.library):void 0;if(!e){this.svg=null;return}let n=se.get(e);if(n||(n=this.resolveIcon(e,i),se.set(e,n)),!this.initialRender)return;const r=await n;if(r===Dt&&se.delete(e),e===this.getIconSource().url){if(oi(r)){if(this.svg=r,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(r){case Dt:case Lt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};B.styles=[Y,ei];a([gt()],B.prototype,"svg",2);a([c({reflect:!0})],B.prototype,"name",2);a([c()],B.prototype,"src",2);a([c()],B.prototype,"label",2);a([c({reflect:!0})],B.prototype,"library",2);a([F("label")],B.prototype,"handleLabelChange",1);a([F(["name","src","library"])],B.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ke=t=>(...e)=>({_$litDirective$:t,values:e});let Ce=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=ke(class extends Ce{constructor(t){var e;if(super(t),t.type!==lt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Tt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=Symbol.for(""),ri=t=>{if((t==null?void 0:t.r)===so)return t==null?void 0:t._$litStatic$},Nt=(t,...e)=>({_$litStatic$:e.reduce((o,i,n)=>o+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[n+1],t[0]),r:so}),Ve=new Map,si=t=>(e,...o)=>{const i=o.length;let n,r;const s=[],l=[];let u,d=0,h=!1;for(;d<i;){for(u=e[d];d<i&&(r=o[d],(n=ri(r))!==void 0);)u+=n+e[++d],h=!0;d!==i&&l.push(r),s.push(u),d++}if(d===i&&s.push(e[i]),h){const p=s.join("$$lit$$");(e=Ve.get(p))===void 0&&(s.raw=s,Ve.set(p,e=s)),o=l}return t(e,...o)},It=si($o);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=t=>t??Ft;var k=class extends D{constructor(){super(...arguments),this.formControlController=new no(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new _e(this,"[default]","prefix","suffix"),this.localize=new ht(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:xe}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Nt`a`:Nt`button`;return It`
      <${e}
        part="base"
        class=${J({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:this.type)}
        title=${this.title}
        name=${x(t?void 0:this.name)}
        value=${x(t?void 0:this.value)}
        href=${x(t&&!this.disabled?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t?this.rel:void 0)}
        role=${x(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?It` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?It`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};k.styles=[Y,jo];k.dependencies={"sl-icon":B,"sl-spinner":we};a([L(".button")],k.prototype,"button",2);a([gt()],k.prototype,"hasFocus",2);a([gt()],k.prototype,"invalid",2);a([c()],k.prototype,"title",2);a([c({reflect:!0})],k.prototype,"variant",2);a([c({reflect:!0})],k.prototype,"size",2);a([c({type:Boolean,reflect:!0})],k.prototype,"caret",2);a([c({type:Boolean,reflect:!0})],k.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],k.prototype,"loading",2);a([c({type:Boolean,reflect:!0})],k.prototype,"outline",2);a([c({type:Boolean,reflect:!0})],k.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],k.prototype,"circle",2);a([c()],k.prototype,"type",2);a([c()],k.prototype,"name",2);a([c()],k.prototype,"value",2);a([c()],k.prototype,"href",2);a([c()],k.prototype,"target",2);a([c()],k.prototype,"rel",2);a([c()],k.prototype,"download",2);a([c()],k.prototype,"form",2);a([c({attribute:"formaction"})],k.prototype,"formAction",2);a([c({attribute:"formenctype"})],k.prototype,"formEnctype",2);a([c({attribute:"formmethod"})],k.prototype,"formMethod",2);a([c({attribute:"formnovalidate",type:Boolean})],k.prototype,"formNoValidate",2);a([c({attribute:"formtarget"})],k.prototype,"formTarget",2);a([F("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);k.define("sl-button");var ai=M`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,li=M`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ct=Math.min,I=Math.max,Ut=Math.round,Mt=Math.floor,Q=t=>({x:t,y:t}),ci={left:"right",right:"left",bottom:"top",top:"bottom"},ui={start:"end",end:"start"};function pe(t,e,o){return I(t,ct(e,o))}function _t(t,e){return typeof t=="function"?t(e):t}function ut(t){return t.split("-")[0]}function kt(t){return t.split("-")[1]}function ao(t){return t==="x"?"y":"x"}function Se(t){return t==="y"?"height":"width"}const di=new Set(["top","bottom"]);function nt(t){return di.has(ut(t))?"y":"x"}function Ee(t){return ao(nt(t))}function hi(t,e,o){o===void 0&&(o=!1);const i=kt(t),n=Ee(t),r=Se(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Wt(s)),[s,Wt(s)]}function pi(t){const e=Wt(t);return[fe(t),e,fe(e)]}function fe(t){return t.replace(/start|end/g,e=>ui[e])}const Fe=["left","right"],Ne=["right","left"],fi=["top","bottom"],mi=["bottom","top"];function bi(t,e,o){switch(t){case"top":case"bottom":return o?e?Ne:Fe:e?Fe:Ne;case"left":case"right":return e?fi:mi;default:return[]}}function gi(t,e,o,i){const n=kt(t);let r=bi(ut(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(fe)))),r}function Wt(t){return t.replace(/left|right|bottom|top/g,e=>ci[e])}function vi(t){return{top:0,right:0,bottom:0,left:0,...t}}function lo(t){return typeof t!="number"?vi(t):{top:t,right:t,bottom:t,left:t}}function Ht(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function Ue(t,e,o){let{reference:i,floating:n}=t;const r=nt(e),s=Ee(e),l=Se(s),u=ut(e),d=r==="y",h=i.x+i.width/2-n.width/2,p=i.y+i.height/2-n.height/2,b=i[l]/2-n[l]/2;let f;switch(u){case"top":f={x:h,y:i.y-n.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:p};break;case"left":f={x:i.x-n.width,y:p};break;default:f={x:i.x,y:i.y}}switch(kt(e)){case"start":f[s]-=b*(o&&d?-1:1);break;case"end":f[s]+=b*(o&&d?-1:1);break}return f}const yi=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let d=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:p}=Ue(d,i,u),b=i,f={},m=0;for(let v=0;v<l.length;v++){const{name:w,fn:y}=l[v],{x:_,y:S,data:A,reset:E}=await y({x:h,y:p,initialPlacement:i,placement:b,strategy:n,middlewareData:f,rects:d,platform:s,elements:{reference:t,floating:e}});h=_??h,p=S??p,f={...f,[w]:{...f[w],...A}},E&&m<=50&&(m++,typeof E=="object"&&(E.placement&&(b=E.placement),E.rects&&(d=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):E.rects),{x:h,y:p}=Ue(d,b,u)),v=-1)}return{x:h,y:p,placement:b,strategy:n,middlewareData:f}};async function $e(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:l,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:b=!1,padding:f=0}=_t(e,t),m=lo(f),w=l[b?p==="floating"?"reference":"floating":p],y=Ht(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:u})),_=p==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),A=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},E=Ht(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:_,offsetParent:S,strategy:u}):_);return{top:(y.top-E.top+m.top)/A.y,bottom:(E.bottom-y.bottom+m.bottom)/A.y,left:(y.left-E.left+m.left)/A.x,right:(E.right-y.right+m.right)/A.x}}const wi=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:l,middlewareData:u}=e,{element:d,padding:h=0}=_t(t,e)||{};if(d==null)return{};const p=lo(h),b={x:o,y:i},f=Ee(n),m=Se(f),v=await s.getDimensions(d),w=f==="y",y=w?"top":"left",_=w?"bottom":"right",S=w?"clientHeight":"clientWidth",A=r.reference[m]+r.reference[f]-b[f]-r.floating[m],E=b[f]-r.reference[f],H=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d));let z=H?H[S]:0;(!z||!await(s.isElement==null?void 0:s.isElement(H)))&&(z=l.floating[S]||r.floating[m]);const ot=A/2-E/2,G=z/2-v[m]/2-1,W=ct(p[y],G),rt=ct(p[_],G),Z=W,st=z-v[m]-rt,R=z/2-v[m]/2+ot,pt=pe(Z,R,st),it=!u.arrow&&kt(n)!=null&&R!==pt&&r.reference[m]/2-(R<Z?W:rt)-v[m]/2<0,j=it?R<Z?R-Z:R-st:0;return{[f]:b[f]+j,data:{[f]:pt,centerOffset:R-pt-j,...it&&{alignmentOffset:j}},reset:it}}}),xi=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:l,platform:u,elements:d}=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:b,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...w}=_t(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=ut(n),_=nt(l),S=ut(l)===l,A=await(u.isRTL==null?void 0:u.isRTL(d.floating)),E=b||(S||!v?[Wt(l)]:pi(l)),H=m!=="none";!b&&H&&E.push(...gi(l,v,m,A));const z=[l,...E],ot=await $e(e,w),G=[];let W=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&G.push(ot[y]),p){const R=hi(n,s,A);G.push(ot[R[0]],ot[R[1]])}if(W=[...W,{placement:n,overflows:G}],!G.every(R=>R<=0)){var rt,Z;const R=(((rt=r.flip)==null?void 0:rt.index)||0)+1,pt=z[R];if(pt&&(!(p==="alignment"?_!==nt(pt):!1)||W.every(q=>nt(q.placement)===_?q.overflows[0]>0:!0)))return{data:{index:R,overflows:W},reset:{placement:pt}};let it=(Z=W.filter(j=>j.overflows[0]<=0).sort((j,q)=>j.overflows[1]-q.overflows[1])[0])==null?void 0:Z.placement;if(!it)switch(f){case"bestFit":{var st;const j=(st=W.filter(q=>{if(H){const at=nt(q.placement);return at===_||at==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(at=>at>0).reduce((at,_o)=>at+_o,0)]).sort((q,at)=>q[1]-at[1])[0])==null?void 0:st[0];j&&(it=j);break}case"initialPlacement":it=l;break}if(n!==it)return{reset:{placement:it}}}return{}}}},_i=new Set(["left","top"]);async function ki(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=ut(o),l=kt(o),u=nt(o)==="y",d=_i.has(s)?-1:1,h=r&&u?-1:1,p=_t(e,t);let{mainAxis:b,crossAxis:f,alignmentAxis:m}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),u?{x:f*h,y:b*d}:{x:b*d,y:f*h}}const Ci=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:s,middlewareData:l}=e,u=await ki(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:n+u.x,y:r+u.y,data:{...u,placement:s}}}}},Si=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:y,y:_}=w;return{x:y,y:_}}},...u}=_t(t,e),d={x:o,y:i},h=await $e(e,u),p=nt(ut(n)),b=ao(p);let f=d[b],m=d[p];if(r){const w=b==="y"?"top":"left",y=b==="y"?"bottom":"right",_=f+h[w],S=f-h[y];f=pe(_,f,S)}if(s){const w=p==="y"?"top":"left",y=p==="y"?"bottom":"right",_=m+h[w],S=m-h[y];m=pe(_,m,S)}const v=l.fn({...e,[b]:f,[p]:m});return{...v,data:{x:v.x-o,y:v.y-i,enabled:{[b]:r,[p]:s}}}}}},Ei=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:n,rects:r,platform:s,elements:l}=e,{apply:u=()=>{},...d}=_t(t,e),h=await $e(e,d),p=ut(n),b=kt(n),f=nt(n)==="y",{width:m,height:v}=r.floating;let w,y;p==="top"||p==="bottom"?(w=p,y=b===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(y=p,w=b==="end"?"top":"bottom");const _=v-h.top-h.bottom,S=m-h.left-h.right,A=ct(v-h[w],_),E=ct(m-h[y],S),H=!e.middlewareData.shift;let z=A,ot=E;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(ot=S),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(z=_),H&&!b){const W=I(h.left,0),rt=I(h.right,0),Z=I(h.top,0),st=I(h.bottom,0);f?ot=m-2*(W!==0||rt!==0?W+rt:I(h.left,h.right)):z=v-2*(Z!==0||st!==0?Z+st:I(h.top,h.bottom))}await u({...e,availableWidth:ot,availableHeight:z});const G=await s.getDimensions(l.floating);return m!==G.width||v!==G.height?{reset:{rects:!0}}:{}}}};function Gt(){return typeof window<"u"}function Ct(t){return co(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function et(t){var e;return(e=(co(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function co(t){return Gt()?t instanceof Node||t instanceof V(t).Node:!1}function K(t){return Gt()?t instanceof Element||t instanceof V(t).Element:!1}function tt(t){return Gt()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function We(t){return!Gt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}const $i=new Set(["inline","contents"]);function Pt(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!$i.has(n)}const Ai=new Set(["table","td","th"]);function Li(t){return Ai.has(Ct(t))}const Ti=[":popover-open",":modal"];function Zt(t){return Ti.some(e=>{try{return t.matches(e)}catch{return!1}})}const Oi=["transform","translate","scale","rotate","perspective"],zi=["transform","translate","scale","rotate","perspective","filter"],Pi=["paint","layout","strict","content"];function Qt(t){const e=Ae(),o=K(t)?X(t):t;return Oi.some(i=>o[i]?o[i]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||zi.some(i=>(o.willChange||"").includes(i))||Pi.some(i=>(o.contain||"").includes(i))}function Ri(t){let e=dt(t);for(;tt(e)&&!wt(e);){if(Qt(e))return e;if(Zt(e))return null;e=dt(e)}return null}function Ae(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Di=new Set(["html","body","#document"]);function wt(t){return Di.has(Ct(t))}function X(t){return V(t).getComputedStyle(t)}function Jt(t){return K(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function dt(t){if(Ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||We(t)&&t.host||et(t);return We(e)?e.host:e}function uo(t){const e=dt(t);return wt(e)?t.ownerDocument?t.ownerDocument.body:t.body:tt(e)&&Pt(e)?e:uo(e)}function zt(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=uo(t),r=n===((i=t.ownerDocument)==null?void 0:i.body),s=V(n);if(r){const l=me(s);return e.concat(s,s.visualViewport||[],Pt(n)?n:[],l&&o?zt(l):[])}return e.concat(n,zt(n,[],o))}function me(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ho(t){const e=X(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=tt(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,l=Ut(o)!==r||Ut(i)!==s;return l&&(o=r,i=s),{width:o,height:i,$:l}}function Le(t){return K(t)?t:t.contextElement}function yt(t){const e=Le(t);if(!tt(e))return Q(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=ho(e);let s=(r?Ut(o.width):o.width)/i,l=(r?Ut(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Mi=Q(0);function po(t){const e=V(t);return!Ae()||!e.visualViewport?Mi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Bi(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==V(t)?!1:e}function mt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=Le(t);let s=Q(1);e&&(i?K(i)&&(s=yt(i)):s=yt(t));const l=Bi(r,o,i)?po(r):Q(0);let u=(n.left+l.x)/s.x,d=(n.top+l.y)/s.y,h=n.width/s.x,p=n.height/s.y;if(r){const b=V(r),f=i&&K(i)?V(i):i;let m=b,v=me(m);for(;v&&i&&f!==m;){const w=yt(v),y=v.getBoundingClientRect(),_=X(v),S=y.left+(v.clientLeft+parseFloat(_.paddingLeft))*w.x,A=y.top+(v.clientTop+parseFloat(_.paddingTop))*w.y;u*=w.x,d*=w.y,h*=w.x,p*=w.y,u+=S,d+=A,m=V(v),v=me(m)}}return Ht({width:h,height:p,x:u,y:d})}function te(t,e){const o=Jt(t).scrollLeft;return e?e.left+o:mt(et(t)).left+o}function fo(t,e){const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-te(t,o),n=o.top+e.scrollTop;return{x:i,y:n}}function Ii(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r=n==="fixed",s=et(i),l=e?Zt(e.floating):!1;if(i===s||l&&r)return o;let u={scrollLeft:0,scrollTop:0},d=Q(1);const h=Q(0),p=tt(i);if((p||!p&&!r)&&((Ct(i)!=="body"||Pt(s))&&(u=Jt(i)),tt(i))){const f=mt(i);d=yt(i),h.x=f.x+i.clientLeft,h.y=f.y+i.clientTop}const b=s&&!p&&!r?fo(s,u):Q(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-u.scrollLeft*d.x+h.x+b.x,y:o.y*d.y-u.scrollTop*d.y+h.y+b.y}}function Vi(t){return Array.from(t.getClientRects())}function Fi(t){const e=et(t),o=Jt(t),i=t.ownerDocument.body,n=I(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=I(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+te(t);const l=-o.scrollTop;return X(i).direction==="rtl"&&(s+=I(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:l}}const He=25;function Ni(t,e){const o=V(t),i=et(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,u=0;if(n){r=n.width,s=n.height;const h=Ae();(!h||h&&e==="fixed")&&(l=n.offsetLeft,u=n.offsetTop)}const d=te(i);if(d<=0){const h=i.ownerDocument,p=h.body,b=getComputedStyle(p),f=h.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,m=Math.abs(i.clientWidth-p.clientWidth-f);m<=He&&(r-=m)}else d<=He&&(r+=d);return{width:r,height:s,x:l,y:u}}const Ui=new Set(["absolute","fixed"]);function Wi(t,e){const o=mt(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=tt(t)?yt(t):Q(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,u=n*r.x,d=i*r.y;return{width:s,height:l,x:u,y:d}}function je(t,e,o){let i;if(e==="viewport")i=Ni(t,o);else if(e==="document")i=Fi(et(t));else if(K(e))i=Wi(e,o);else{const n=po(t);i={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Ht(i)}function mo(t,e){const o=dt(t);return o===e||!K(o)||wt(o)?!1:X(o).position==="fixed"||mo(o,e)}function Hi(t,e){const o=e.get(t);if(o)return o;let i=zt(t,[],!1).filter(l=>K(l)&&Ct(l)!=="body"),n=null;const r=X(t).position==="fixed";let s=r?dt(t):t;for(;K(s)&&!wt(s);){const l=X(s),u=Qt(s);!u&&l.position==="fixed"&&(n=null),(r?!u&&!n:!u&&l.position==="static"&&!!n&&Ui.has(n.position)||Pt(s)&&!u&&mo(t,s))?i=i.filter(h=>h!==s):n=l,s=dt(s)}return e.set(t,i),i}function ji(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?Zt(e)?[]:Hi(e,this._c):[].concat(o),i],l=s[0],u=s.reduce((d,h)=>{const p=je(e,h,n);return d.top=I(p.top,d.top),d.right=ct(p.right,d.right),d.bottom=ct(p.bottom,d.bottom),d.left=I(p.left,d.left),d},je(e,l,n));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function qi(t){const{width:e,height:o}=ho(t);return{width:e,height:o}}function Ki(t,e,o){const i=tt(e),n=et(e),r=o==="fixed",s=mt(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const u=Q(0);function d(){u.x=te(n)}if(i||!i&&!r)if((Ct(e)!=="body"||Pt(n))&&(l=Jt(e)),i){const f=mt(e,!0,r,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else n&&d();r&&!i&&n&&d();const h=n&&!i&&!r?fo(n,l):Q(0),p=s.left+l.scrollLeft-u.x-h.x,b=s.top+l.scrollTop-u.y-h.y;return{x:p,y:b,width:s.width,height:s.height}}function ae(t){return X(t).position==="static"}function qe(t,e){if(!tt(t)||X(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return et(t)===o&&(o=o.ownerDocument.body),o}function bo(t,e){const o=V(t);if(Zt(t))return o;if(!tt(t)){let n=dt(t);for(;n&&!wt(n);){if(K(n)&&!ae(n))return n;n=dt(n)}return o}let i=qe(t,e);for(;i&&Li(i)&&ae(i);)i=qe(i,e);return i&&wt(i)&&ae(i)&&!Qt(i)?o:i||Ri(t)||o}const Xi=async function(t){const e=this.getOffsetParent||bo,o=this.getDimensions,i=await o(t.floating);return{reference:Ki(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Yi(t){return X(t).direction==="rtl"}const Vt={convertOffsetParentRelativeRectToViewportRelativeRect:Ii,getDocumentElement:et,getClippingRect:ji,getOffsetParent:bo,getElementRects:Xi,getClientRects:Vi,getDimensions:qi,getScale:yt,isElement:K,isRTL:Yi};function go(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Gi(t,e){let o=null,i;const n=et(t);function r(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function s(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),r();const d=t.getBoundingClientRect(),{left:h,top:p,width:b,height:f}=d;if(l||e(),!b||!f)return;const m=Mt(p),v=Mt(n.clientWidth-(h+b)),w=Mt(n.clientHeight-(p+f)),y=Mt(h),S={rootMargin:-m+"px "+-v+"px "+-w+"px "+-y+"px",threshold:I(0,ct(1,u))||1};let A=!0;function E(H){const z=H[0].intersectionRatio;if(z!==u){if(!A)return s();z?s(!1,z):i=setTimeout(()=>{s(!1,1e-7)},1e3)}z===1&&!go(d,t.getBoundingClientRect())&&s(),A=!1}try{o=new IntersectionObserver(E,{...S,root:n.ownerDocument})}catch{o=new IntersectionObserver(E,S)}o.observe(t)}return s(!0),r}function Zi(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,d=Le(t),h=n||r?[...d?zt(d):[],...zt(e)]:[];h.forEach(y=>{n&&y.addEventListener("scroll",o,{passive:!0}),r&&y.addEventListener("resize",o)});const p=d&&l?Gi(d,o):null;let b=-1,f=null;s&&(f=new ResizeObserver(y=>{let[_]=y;_&&_.target===d&&f&&(f.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var S;(S=f)==null||S.observe(e)})),o()}),d&&!u&&f.observe(d),f.observe(e));let m,v=u?mt(t):null;u&&w();function w(){const y=mt(t);v&&!go(v,y)&&o(),v=y,m=requestAnimationFrame(w)}return o(),()=>{var y;h.forEach(_=>{n&&_.removeEventListener("scroll",o),r&&_.removeEventListener("resize",o)}),p==null||p(),(y=f)==null||y.disconnect(),f=null,u&&cancelAnimationFrame(m)}}const Qi=Ci,Ji=Si,tn=xi,Ke=Ei,en=wi,on=(t,e,o)=>{const i=new Map,n={platform:Vt,...o},r={...n.platform,_c:i};return yi(t,e,{...n,platform:r})};function nn(t){return rn(t)}function le(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function rn(t){for(let e=t;e;e=le(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=le(t);e;e=le(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||Qt(o)||e.tagName==="BODY"))return e}return null}function sn(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var C=class extends D{constructor(){super(...arguments),this.localize=new ht(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,r=0,s=0,l=0,u=0,d=0,h=0;o?t.top<e.top?(i=t.left,n=t.bottom,r=t.right,s=t.bottom,l=e.left,u=e.top,d=e.right,h=e.top):(i=e.left,n=e.bottom,r=e.right,s=e.bottom,l=t.left,u=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,n=t.top,r=e.left,s=e.top,l=t.right,u=t.bottom,d=e.left,h=e.bottom):(i=e.right,n=e.top,r=t.left,s=t.top,l=e.right,u=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||sn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Zi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ke({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(tn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ji({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ke({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(en({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>Vt.getOffsetParent(o,nn):Vt.getOffsetParent;on(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Yt(bt({},Vt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const u=n.arrow.x,d=n.arrow.y;let h="",p="",b="",f="";if(this.arrowPlacement==="start"){const m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=s?m:"",f=s?"":m}else if(this.arrowPlacement==="end"){const m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=s?"":m,f=s?m:"",b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof u=="number"?`${u}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:b,left:f,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${J({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${J({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[Y,li];a([L(".popup")],C.prototype,"popup",2);a([L(".popup__arrow")],C.prototype,"arrowEl",2);a([c()],C.prototype,"anchor",2);a([c({type:Boolean,reflect:!0})],C.prototype,"active",2);a([c({reflect:!0})],C.prototype,"placement",2);a([c({reflect:!0})],C.prototype,"strategy",2);a([c({type:Number})],C.prototype,"distance",2);a([c({type:Number})],C.prototype,"skidding",2);a([c({type:Boolean})],C.prototype,"arrow",2);a([c({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);a([c({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);a([c({type:Boolean})],C.prototype,"flip",2);a([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);a([c({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);a([c({type:Object})],C.prototype,"flipBoundary",2);a([c({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);a([c({type:Boolean})],C.prototype,"shift",2);a([c({type:Object})],C.prototype,"shiftBoundary",2);a([c({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);a([c({attribute:"auto-size"})],C.prototype,"autoSize",2);a([c()],C.prototype,"sync",2);a([c({type:Object})],C.prototype,"autoSizeBoundary",2);a([c({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);a([c({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var vo=new Map,an=new WeakMap;function ln(t){return t??{keyframes:[],options:{duration:0}}}function Xe(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function St(t,e){vo.set(t,ln(e))}function xt(t,e,o){const i=an.get(t);if(i!=null&&i[e])return Xe(i[e],o.dir);const n=vo.get(e);return n?Xe(n,o.dir):{keyframes:[],options:{duration:0}}}function jt(t,e){return new Promise(o=>{function i(n){n.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function qt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,Yt(bt({},o),{duration:cn()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function Ye(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function cn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Kt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var O=class extends D{constructor(){super(),this.localize=new ht(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Ye(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Ye(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Kt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=xt(this,"tooltip.show",{dir:this.localize.dir()});await qt(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Kt(this.body);const{keyframes:o,options:i}=xt(this,"tooltip.hide",{dir:this.localize.dir()});await qt(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,jt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,jt(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${J({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};O.styles=[Y,ai];O.dependencies={"sl-popup":C};a([L("slot:not([name])")],O.prototype,"defaultSlot",2);a([L(".tooltip__body")],O.prototype,"body",2);a([L("sl-popup")],O.prototype,"popup",2);a([c()],O.prototype,"content",2);a([c()],O.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],O.prototype,"disabled",2);a([c({type:Number})],O.prototype,"distance",2);a([c({type:Boolean,reflect:!0})],O.prototype,"open",2);a([c({type:Number})],O.prototype,"skidding",2);a([c()],O.prototype,"trigger",2);a([c({type:Boolean})],O.prototype,"hoist",2);a([F("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);a([F(["content","distance","hoist","placement","skidding"])],O.prototype,"handleOptionsChange",1);a([F("disabled")],O.prototype,"handleDisabledChange",1);St("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});St("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var un=M`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,T=class extends D{constructor(){super(...arguments),this.localize=new ht(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),o=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let n=this.from,r="";o?[n,r]=this.from.trim().split("."):i&&([n,r]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in e?e.getElementById(n):null;s?i?t=s.getAttribute(r)||"":o?t=s[r]||"":t=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),n=t==="success"?this.successIcon:this.errorIcon,r=xt(this,"copy.in",{dir:"ltr"}),s=xt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?o:i,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=t,n.hidden=!1,await n.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await n.animate(s.keyframes,s.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${J({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};T.styles=[Y,un];T.dependencies={"sl-icon":B,"sl-tooltip":O};a([L('slot[name="copy-icon"]')],T.prototype,"copyIcon",2);a([L('slot[name="success-icon"]')],T.prototype,"successIcon",2);a([L('slot[name="error-icon"]')],T.prototype,"errorIcon",2);a([L("sl-tooltip")],T.prototype,"tooltip",2);a([gt()],T.prototype,"isCopying",2);a([gt()],T.prototype,"status",2);a([c()],T.prototype,"value",2);a([c()],T.prototype,"from",2);a([c({type:Boolean,reflect:!0})],T.prototype,"disabled",2);a([c({attribute:"copy-label"})],T.prototype,"copyLabel",2);a([c({attribute:"success-label"})],T.prototype,"successLabel",2);a([c({attribute:"error-label"})],T.prototype,"errorLabel",2);a([c({attribute:"feedback-duration",type:Number})],T.prototype,"feedbackDuration",2);a([c({attribute:"tooltip-placement"})],T.prototype,"tooltipPlacement",2);a([c({type:Boolean})],T.prototype,"hoist",2);St("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});St("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});T.define("sl-copy-button");var dn=M`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*yo(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Uo(yo(t.shadowRoot.activeElement))))}function hn(){return[...yo()].pop()}var Ge=new WeakMap;function wo(t){let e=Ge.get(t);return e||(e=window.getComputedStyle(t,null),Ge.set(t,e)),e}function pn(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=wo(t);return e.visibility!=="hidden"&&e.display!=="none"}function fn(t){const e=wo(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function mn(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const r=t.getRootNode(),s=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=r.querySelector(`${s}:checked`);return l?l===t:r.querySelector(s)===t}return pn(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:fn(t):!1}function bn(t){var e,o;const i=vn(t),n=(e=i[0])!=null?e:null,r=(o=i[i.length-1])!=null?o:null;return{start:n,end:r}}function gn(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function vn(t){const e=new WeakMap,o=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||e.has(n))return;e.set(n,!0),!o.includes(n)&&mn(n)&&o.push(n),n instanceof HTMLSlotElement&&gn(n,t)&&n.assignedElements({flatten:!0}).forEach(r=>{i(r)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const r of n.children)i(r)}return i(t),o.sort((n,r)=>{const s=Number(n.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var P=class extends D{constructor(){super(...arguments),this.localize=new ht(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const o=(i,n)=>{if(!i)return null;const r=i.closest(n);if(r)return r;const s=i.getRootNode();return s instanceof ShadowRoot?o(s.host,n):null};setTimeout(()=>{var i;const n=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?hn():document.activeElement;(!this.containingElement||o(n,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],n=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>bn(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,jt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,jt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Kt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=xt(this,"dropdown.show",{dir:this.localize.dir()});await qt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Kt(this);const{keyframes:t,options:e}=xt(this,"dropdown.hide",{dir:this.localize.dir()});await qt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${x(this.sync?this.sync:void 0)}
        class=${J({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};P.styles=[Y,dn];P.dependencies={"sl-popup":C};a([L(".dropdown")],P.prototype,"popup",2);a([L(".dropdown__trigger")],P.prototype,"trigger",2);a([L(".dropdown__panel")],P.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],P.prototype,"open",2);a([c({reflect:!0})],P.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],P.prototype,"disabled",2);a([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],P.prototype,"stayOpenOnSelect",2);a([c({attribute:!1})],P.prototype,"containingElement",2);a([c({type:Number})],P.prototype,"distance",2);a([c({type:Number})],P.prototype,"skidding",2);a([c({type:Boolean})],P.prototype,"hoist",2);a([c({reflect:!0})],P.prototype,"sync",2);a([F("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);St("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});St("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});P.define("sl-dropdown");var yn=M`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,N=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Nt`a`:Nt`button`;return It`
      <${e}
        part="base"
        class=${J({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:"button")}
        href=${x(t?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t&&this.target?"noreferrer noopener":void 0)}
        role=${x(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${x(this.name)}
          library=${x(this.library)}
          src=${x(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};N.styles=[Y,yn];N.dependencies={"sl-icon":B};a([L(".icon-button")],N.prototype,"button",2);a([gt()],N.prototype,"hasFocus",2);a([c()],N.prototype,"name",2);a([c()],N.prototype,"library",2);a([c()],N.prototype,"src",2);a([c()],N.prototype,"href",2);a([c()],N.prototype,"target",2);a([c()],N.prototype,"download",2);a([c()],N.prototype,"label",2);a([c({type:Boolean,reflect:!0})],N.prototype,"disabled",2);N.define("sl-icon-button");B.define("sl-icon");var wn=M`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,xn=(t="value")=>(e,o)=>{const i=e.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,s,l){var u;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(r===h){const p=d.converter||Oe,f=(typeof p=="function"?p:(u=p==null?void 0:p.fromAttribute)!=null?u:Oe.fromAttribute)(l,d.type);this[t]!==f&&(this[o]=f)}n.call(this,r,s,l)}},_n=M`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn=ke(class extends Ce{constructor(t){if(super(t),t.type!==lt.PROPERTY&&t.type!==lt.ATTRIBUTE&&t.type!==lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ro(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Tt||e===Ft)return e;const o=t.element,i=t.name;if(t.type===lt.PROPERTY){if(e===o[i])return Tt}else if(t.type===lt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return Tt}else if(t.type===lt.ATTRIBUTE&&o.getAttribute(i)===e+"")return Tt;return ni(t),e}});var g=class extends D{constructor(){super(...arguments),this.formControlController=new no(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new _e(this,"help-text","label"),this.localize=new ht(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const n=e??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(t,n,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${J({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${J({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${x(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${x(this.placeholder)}
              minlength=${x(this.minlength)}
              maxlength=${x(this.maxlength)}
              min=${x(this.min)}
              max=${x(this.max)}
              step=${x(this.step)}
              .value=${kn(this.value)}
              autocapitalize=${x(this.autocapitalize)}
              autocomplete=${x(this.autocomplete)}
              autocorrect=${x(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${x(this.pattern)}
              enterkeyhint=${x(this.enterkeyhint)}
              inputmode=${x(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?$`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};g.styles=[Y,_n,wn];g.dependencies={"sl-icon":B};a([L(".input__control")],g.prototype,"input",2);a([gt()],g.prototype,"hasFocus",2);a([c()],g.prototype,"title",2);a([c({reflect:!0})],g.prototype,"type",2);a([c()],g.prototype,"name",2);a([c()],g.prototype,"value",2);a([xn()],g.prototype,"defaultValue",2);a([c({reflect:!0})],g.prototype,"size",2);a([c({type:Boolean,reflect:!0})],g.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],g.prototype,"pill",2);a([c()],g.prototype,"label",2);a([c({attribute:"help-text"})],g.prototype,"helpText",2);a([c({type:Boolean})],g.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],g.prototype,"disabled",2);a([c()],g.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],g.prototype,"readonly",2);a([c({attribute:"password-toggle",type:Boolean})],g.prototype,"passwordToggle",2);a([c({attribute:"password-visible",type:Boolean})],g.prototype,"passwordVisible",2);a([c({attribute:"no-spin-buttons",type:Boolean})],g.prototype,"noSpinButtons",2);a([c({reflect:!0})],g.prototype,"form",2);a([c({type:Boolean,reflect:!0})],g.prototype,"required",2);a([c()],g.prototype,"pattern",2);a([c({type:Number})],g.prototype,"minlength",2);a([c({type:Number})],g.prototype,"maxlength",2);a([c()],g.prototype,"min",2);a([c()],g.prototype,"max",2);a([c()],g.prototype,"step",2);a([c()],g.prototype,"autocapitalize",2);a([c()],g.prototype,"autocorrect",2);a([c()],g.prototype,"autocomplete",2);a([c({type:Boolean})],g.prototype,"autofocus",2);a([c()],g.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],g.prototype,"spellcheck",2);a([c()],g.prototype,"inputmode",2);a([F("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);a([F("step",{waitUntilFirstUpdate:!0})],g.prototype,"handleStepChange",1);a([F("value",{waitUntilFirstUpdate:!0})],g.prototype,"handleValueChange",1);g.define("sl-input");var Cn=M`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(t,e)=>{var i;const o=t._$AN;if(o===void 0)return!1;for(const n of o)(i=n._$AO)==null||i.call(n,e,!1),Ot(n,e);return!0},Xt=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while((o==null?void 0:o.size)===0)},xo=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),$n(e)}};function Sn(t){this._$AN!==void 0?(Xt(this),this._$AM=t,xo(this)):this._$AM=t}function En(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)Ot(i[r],!1),Xt(i[r]);else i!=null&&(Ot(i,!1),Xt(i));else Ot(this,t)}const $n=t=>{t.type==lt.CHILD&&(t._$AP??(t._$AP=En),t._$AQ??(t._$AQ=Sn))};class An extends Ce{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),xo(this),this.isConnected=e._$AU}_$AO(e,o=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),o&&(Ot(this,e),Xt(this))}setValue(e){if(ro(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln=()=>new Tn;class Tn{}const ce=new WeakMap,On=ke(class extends An{render(t){return Ft}update(t,[e]){var i;const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Ft}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=ce.get(e);o===void 0&&(o=new WeakMap,ce.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=ce.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var zn=class{constructor(t,e){this.popupRef=Ln(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break}},this.handleClick=o=>{var i;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(i=o.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{const o=this.host.renderRoot.querySelector("slot[name='submenu']"),i=o==null?void 0:o.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:r,top:s,width:l,height:u}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+u}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,r)=>{var s;const l=(s=e.get(r))!=null?s:new CSSUnitValue(0,"px"),d=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return n-d.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?$`
      <sl-popup
        ${On(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}},U=class extends D{constructor(){super(...arguments),this.localize=new ht(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new _e(this,"submenu"),this.submenuController=new zn(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return qo(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${J({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};U.styles=[Y,Cn];U.dependencies={"sl-icon":B,"sl-popup":C,"sl-spinner":we};a([L("slot:not([name])")],U.prototype,"defaultSlot",2);a([L(".menu-item")],U.prototype,"menuItem",2);a([c()],U.prototype,"type",2);a([c({type:Boolean,reflect:!0})],U.prototype,"checked",2);a([c()],U.prototype,"value",2);a([c({type:Boolean,reflect:!0})],U.prototype,"loading",2);a([c({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([F("checked")],U.prototype,"handleCheckedChange",1);a([F("disabled")],U.prototype,"handleDisabledChange",1);a([F("type")],U.prototype,"handleTypeChange",1);U.define("sl-menu-item");var Pn=M`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Te=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find(l=>{var u;return e.includes(((u=l==null?void 0:l.getAttribute)==null?void 0:u.call(l,"role"))||"")});if(!i||o.find(l=>{var u;return((u=l==null?void 0:l.getAttribute)==null?void 0:u.call(l,"role"))==="menu"})!==this)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Te.styles=[Y,Pn];a([L("slot")],Te.prototype,"defaultSlot",2);Te.define("sl-menu");const Rn=["Windows","MacOS Intel","MacOS Silicon","Linux"];function Dn(t){const e=document.createElement("a");e.href=t,e.download=t.split("/").pop(),document.body.appendChild(e),e.click(),document.body.removeChild(e)}class be extends Ze{constructor(){super(),this._detectedOS=this._detectOS()}_detectOS(){const e=navigator.userAgent,o=navigator.platform;return o.includes("Win")||e.includes("Windows")?"Windows":o.includes("Mac")?navigator.userAgent.includes("Mac OS X")&&navigator.userAgent.includes("AppleWebKit")&&(navigator.userAgent.includes("Mac OS X 10_15")||navigator.userAgent.includes("Mac OS X 11_")||navigator.userAgent.includes("Mac OS X 12_")||navigator.userAgent.includes("Mac OS X 13_")||navigator.userAgent.includes("Mac OS X 14_"))?"MacOS Silicon":"MacOS Intel":o.includes("Linux")||e.includes("Linux")?"Linux":"Windows"}getUrlFor(e){switch(e){case"Windows":return this.windowsUrl;case"MacOS Intel":return this.macosIntelUrl;case"MacOS Silicon":return this.macosSiliconUrl;case"Linux":return this.linuxUrl}}render(){const e=this._detectedOS;return $`<div
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
        ">Get the latest version for ${e}</p>
      </div>

      <div style="display:flex; flex-direction: row; align-items: center; width: 100%;">
        <a 
          href="${this.getUrlFor(e)}" 
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
            <path d="${ze}"/>
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
            ${Rn.filter(o=>o!==e).map(o=>$`
                  <sl-menu-item 
                    @click=${()=>Dn(this.getUrlFor(o))}
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
                      <path d="${ze}"/>
                    </svg>
                    <span style="font-weight: 600; color: #374151; font-size: 16px;">Download for ${o}</span>
                  </sl-menu-item>
                `)}
          </sl-menu>
        </sl-dropdown>
      </div>

      ${this.nixCommand&&e==="Linux"?$`
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
          `:$``}
    </div>`}}ee(be,"properties",{linuxUrl:{attribute:"linux-url"},nixCommand:{attribute:"nix-command"},macosIntelUrl:{attribute:"macos-intel-url"},macosSiliconUrl:{attribute:"macos-silicon-url"},windowsUrl:{attribute:"windows-url"}}),ee(be,"styles",M`
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
  `);customElements.define("download-installer-button",be);async function Mn(){customElements.define("rocket-content-area",await oe(()=>import("./content-area-368b6216.js"),["assets/content-area-368b6216.js","assets/lit-element-e618a7a4.js"]).then(t=>t.RocketContentArea)),customElements.define("rocket-card",await oe(()=>import("./card-3478fc1e.js"),["assets/card-3478fc1e.js","assets/lit-element-e618a7a4.js"]).then(t=>t.RocketCard)),customElements.define("rocket-columns",await oe(()=>import("./columns-59a19001.js"),["assets/columns-59a19001.js","assets/lit-element-e618a7a4.js"]).then(t=>t.RocketColumns))}Mn();document.getElementById("shared-menu-container").innerHTML=Ao();Lo();
