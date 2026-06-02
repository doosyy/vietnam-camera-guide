import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Repo name for GitHub Pages. The app is served from https://<user>.github.io/vietnam-camera-guide/
const repoBase = '/vietnam-camera-guide/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vietnam Camera Companion',
        short_name: 'Camera Guide',
        description: 'Your Sony A7C II field guide for street photography in Vietnam.',
        theme_color: '#0b0b0d',
        background_color: '#0b0b0d',
        display: 'standalone',
        orientation: 'portrait',
        scope: repoBase,
        start_url: repoBase,
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Fonts are now bundled (self-hosted), so they precache with everything else.
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
      },
    }),
  ],
})
