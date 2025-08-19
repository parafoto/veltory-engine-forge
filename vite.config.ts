import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'          // если вдруг ругнётся в ESM, замени на: import path from 'node:path'
import { componentTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ВАЖНО: для кастомного домена base — всегда '/'
  base: '/',

  // Совпадает с путём в GitHub Actions (upload-pages-artifact → path: ./dist)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  server: {
    host: '::',
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(), // теггер только в dev — правильно
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
}))
