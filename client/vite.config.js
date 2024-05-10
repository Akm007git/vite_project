import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
  {
    proxy:
    {
      "/api/data": "https://vite-project-nine-iota.vercel.app/",
      "/api/users": "https://vite-project-nine-iota.vercel.app/"
    }
  }
})
