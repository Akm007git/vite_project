import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
  {
    proxy:
    {
      "/data": "http://localhost:3000",
      "/users": "http://localhost:3000"
    }
  }
})
