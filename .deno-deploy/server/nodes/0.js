

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CCEASj1v.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B3auK2hL.js"];
export const stylesheets = [];
export const fonts = [];
