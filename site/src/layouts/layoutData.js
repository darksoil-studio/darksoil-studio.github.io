import { html } from "lit";

import { PageTree } from "@rocket/engine";

export const pageTree = new PageTree();
await pageTree.restore(
  new URL("../../pages/pageTreeData.rocketGenerated.json", import.meta.url)
);

export const layoutData = {
  pageTree,
  titleWrapperFn: (title) => title,
  description: "Welcome to the Rocket Spark Landing Page example",
  siteName: "Rocket",

  head__150: html`<link rel="stylesheet" href="resolve:#src/css/page.css" />`,

  header__100: html`<div style="display: inline-block"><rocket-social-link style="--primary-text-color: white; --primary-color: var(--theme-secondary); " name="Github" url="https://github.com/darksoil-studio"></rocket-social-link></div>`,

  footer__10: html`
  `,
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