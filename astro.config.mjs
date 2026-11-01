import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tinymachines.studio',
  // manifesto.html, team.html… Cloudflare Pages serves them at /manifesto, /team
  build: { format: 'file' },
});
