import { html } from "lit";

import { PageTree } from "@rocket/engine";

export const pageTree = new PageTree();
await pageTree.restore(
  new URL("../../pages/pageTreeData.rocketGenerated.json", import.meta.url)
);
import "../elements/custom-social-link.js";

export const layoutData = {
  pageTree,
  titleWrapperFn: (title) => title,
  description: "Welcome to darksoil studio",
  siteName: "darksoil studio",

  head__150: html`<link rel="stylesheet" href="resolve:#src/css/page.css" />`,

  header__100: html` <div style="display: inline-block; position: relative">
    <div
      style="display: flex; position: absolute; margin-top: -22px; justify-contents: center; align-items: center"
    >
      <rocket-social-link
        style="--primary-text-color: white; --primary-color: var(white); "
        name="Github"
        url="https://github.com/darksoil-studio"
      ></rocket-social-link>
      <custom-social-link
        style="--primary-text-color: white; --primary-color: var(--theme-secondary); "
        name="OpenCollective"
        url="https://opencollective.com/darksoil"
      ></custom-social-link>
      <custom-social-link
        style="--primary-text-color: white; --primary-color: var(--theme-secondary); "
        name="Ghost"
        url="https://substack.com/profile/5969055-darksoil"
      ></custom-social-link>
    </div>
  </div>`,

  footer__10: html``,
};

/*old footer
<rocket-content-area>
<rocket-columns>
<div>
  <strong>Find Us</strong><br />
  <br />
  email:<br />
  
</div>

<div class="legal">
  <strong>More</strong> <br />
  <a href="#">About</a><br />
  <a href="#">Us</a><br />
  <a href="#">Welcome</a><br />
</div>
</rocket-columns>
</rocket-content-area>*/
