import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 起動したら自動でブラウザを開く
  server: {
    open: true,
  },
  plugins: [react()],
})
