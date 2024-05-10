import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
  {
    proxy:
    {
      "/data": "https://vite-project-nine-iota.vercel.app/",
      "/users": "https://vite-project-nine-iota.vercel.app/"
    }
  }
})
