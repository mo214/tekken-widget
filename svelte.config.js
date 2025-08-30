import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: {
			name: 'custom-adapter',
			async adapt(builder) {
				// This is a minimal adapter that works with Deno
				// For production, you'd want to use @sveltejs/adapter-deno
				const { writeFileSync, mkdirSync } = await import('node:fs');
				const { join } = await import('node:path');
				
				const dir = '.svelte-kit/deno';
				mkdirSync(dir, { recursive: true });
				
				// Write a simple server file
				writeFileSync(join(dir, 'server.js'), `
					import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
					import { handler } from './handler.js';
					
					serve(handler);
				`);
				
				// Copy built files
				// This is a simplified version - in reality you'd copy the entire build output
				console.log('Deno adapter: Build completed');
			}
		}
	}
};

export default config;
