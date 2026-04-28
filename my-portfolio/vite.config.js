import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Same-origin proxy to avoid CORS blocking in browser logs
      '/__debug_ingest': {
        target: 'http://127.0.0.1:7868',
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(
            /^\/__debug_ingest/,
            '/ingest/b4b1db98-ea71-4064-8ac9-6e8ad8915354',
          ),
      },
    },
  },
})