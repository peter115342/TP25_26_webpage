// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://peter115342.github.io',
  base: '/TP25_26_webpage',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
