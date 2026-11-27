// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub Pages (página de repositório): https://wmencaroni-max.github.io/portifolio/
// Guia: https://docs.astro.build/en/guides/deploy/github/ (consultado em 27/11/2026)
// Com domínio próprio: troque `site` pelo domínio e remova `base`.
export default defineConfig({
  site: 'https://wmencaroni-max.github.io',
  base: '/portifolio',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
