import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// เปลี่ยน 'my-first-fe-deploy' เป็นชื่อ repo ของคุณบน GitHub
export default defineConfig({
  plugins: [react()],
  base: '/my-first-fe-deploy/',
})
