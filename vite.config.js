import { defineConfig } from 'vite'

export default defineConfig({
  // For static HTML projects
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  // Disable PostCSS processing for plain CSS
  css: {
    postcss: false
  }
})