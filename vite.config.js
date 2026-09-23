// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 '127.0.0.1' काढून true किंवा '0.0.0.0' करा
    port: 5173
  }
})
