
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Proyecto2/',
  build: {
    rollupOptions: {
      input: {
        // Define your entry points here
        // The key is the chunk name (e.g., 'main', 'about')
        // The value is the path to the HTML file
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'Projects.html'),
      },
    },
  },
  // Other Vite config options...
});