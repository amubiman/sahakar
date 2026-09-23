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
  }
})
