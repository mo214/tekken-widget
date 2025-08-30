

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/twitch-widget/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C1RBc455.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CSAjYYxs.js","_app/immutable/chunks/B3auK2hL.js","_app/immutable/chunks/D_lfHUOF.js","_app/immutable/chunks/B5sbPd06.js"];
export const stylesheets = ["_app/immutable/assets/3.GlacUNOC.css"];
export const fonts = [];
