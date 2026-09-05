import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portafolio-beley-gomez-urdaneta.netlify.app/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
