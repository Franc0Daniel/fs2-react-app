import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // En Vercel la app vive en la raíz ('/'); en GitHub Pages va en la subcarpeta.
  base: process.env.VERCEL ? '/' : '/fs2-react-app/',
  plugins: [react()],
})