// @ts-check
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

import react from '@astrojs/react';


import tailwind from '@astrojs/tailwind';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(),robotsTxt()],
  site: 'https://nickhrm.de',
  
  
});