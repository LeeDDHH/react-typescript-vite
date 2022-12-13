import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = './'
const root = 'src'
const publicDir = '../public'
const build = {
  outDir: '../dist',
  emptyOutDir: true,
}
// 起動したら自動でブラウザを開く
const server = { open: true }
const plugins = [react()]

const settings = { base, root, publicDir, build, server, plugins }

// https://vitejs.dev/config/
export default defineConfig(settings)
