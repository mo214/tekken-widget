import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { v as pop, t as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let rankData = {};
  $$payload.out.push(`<h1>Tekken Rank Tracker</h1> `);
  {
    $$payload.out.push("<!--[!-->");
    {
      $$payload.out.push("<!--[!-->");
      if (rankData) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="rank-card svelte-184mbe7"><h2>Current Rank</h2> <p class="rank svelte-184mbe7">${escape_html(rankData.rank)}</p> <p class="prowess svelte-184mbe7">Prowess: ${escape_html(rankData.prowess)}</p> <p class="last-updated svelte-184mbe7">Last updated: ${escape_html(rankData.lastUpdated ? new Date(rankData.lastUpdated).toLocaleString() : "Unknown")}</p></div> <button class="svelte-184mbe7">Refresh</button>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<p>No rank data available</p> <button class="svelte-184mbe7">Fetch Rank</button>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
export {
  _page as default
};
