// https://vitest.dev/config/
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vitest/config'

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

// テスト設定
const test = {
  environment: 'jsdom', // node環境でDOMをシミュレートする
  globals: true, // APIをグローバルに使う
  coverage: {
    enabled: true, // カバレッジ収集を有効化
    reportsDirectory: '../coverage',
    reporters: ['text', 'json', 'html'],
  },
}

const settings: UserConfig = {
  base,
  root,
  publicDir,
  build,
  server,
  plugins,
  test,
}

// https://vitejs.dev/config/
export default defineConfig(settings)
