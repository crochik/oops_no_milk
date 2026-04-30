import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is /oops_no_milk/ for the prod build (GitHub Pages sub-path),
// and / in dev so localhost:5173 still serves at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/oops_no_milk/' : '/',
  plugins: [react()],
  server: {
    proxy: {
      '/app': {
        target: 'https://api.fci.cloud',
        changeOrigin: true,
        secure: true,
      },
    },
  },
}))
