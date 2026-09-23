<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/sahakar/', 
    server: {
      host: true,
      port: 5173,
      // 🟢 फाईल बदलल्याचे आपोआप ओळखण्यासाठी खालील ३ लाईन्स जोडा
      watch: {
        usePolling: true
      }
    }
=======
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sahakar/', // 👈 तुमच्या रिपॉझिटरीचे (GitHub Repository) नाव इथे टाका
  server: {
    host: true,
    port: 5173
>>>>>>> 52973713a3bfd55318116aaa7e38ee527b7929d6
  }
})
