import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daughterdriven.dev',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/imprint')
    })
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});
