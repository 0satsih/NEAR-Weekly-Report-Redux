import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-5ca60231.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-5ca60231.js","_app/immutable/chunks/index-ac0e06b1.js","_app/immutable/chunks/index-eb481444.js"];
export const stylesheets = ["_app/immutable/assets/_page-9278857a.css"];
export const fonts = [];
