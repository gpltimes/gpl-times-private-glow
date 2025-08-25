import { defineConfig } from 'vite'

// Minimal Vite config to serve a static HTML/CSS/JS site
export default defineConfig({
  server: { host: true, port: 5173 },
  preview: { host: true, port: 5173 },
  build: { outDir: 'dist' }
})
