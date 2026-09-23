// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sahakar/', // 👈 तुमच्या रिपॉझिटरीचे (GitHub Repository) नाव इथे टाका
  server: {
    host: true,
    port: 5173
  }
})
