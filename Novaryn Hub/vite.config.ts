import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/auth': 'http://localhost:3000',
      '/admin': 'http://localhost:3000',
      '/evaluate': 'http://localhost:3000',
      '/stream': 'http://localhost:3000',
    },
  },
})
