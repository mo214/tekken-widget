import { w as head, v as pop, t as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<style>
    :global(body) {
      margin: 0;
      padding: 0;
      background: transparent;
      font-family: 'Arial', sans-serif;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }
  </style>`);
  });
  $$payload.out.push(`<div class="twitch-widget svelte-o4y2yf">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="loading svelte-o4y2yf">Loading rank data...</div>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
export {
  _page as default
};
