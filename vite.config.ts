import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = './'
// index.htmlをsrc配下においたことによる設定
const root = 'src'
// rootを基準に参照するpublicパスを指定
const publicDir = '../public'
const build = {
  // rootを基準に参照するビルドパスを指定
  outDir: '../dist',
  // プロジェクトルートの外に出力先を指定する際、ビルド実行前にビルドディレクトリを空にする
  emptyOutDir: true,
}
// 起動したら自動でブラウザを開く
const server = { open: true }
const plugins = [react()]

const settings = { base, root, publicDir, build, server, plugins }

// https://vitejs.dev/config/
export default defineConfig(settings)
