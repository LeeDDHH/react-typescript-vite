# react-typescript-vite

- React、TypeScript、Vite 構成のサンプルリポジトリ

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.12.0-blue?logo=node.js&style=flat-square">
  <img src="https://img.shields.io/badge/Yarn-1.22.19-blue?logo=yarn&style=flat-square">
  <img src="https://img.shields.io/badge/Vite-4.0.0-blue?logo=vite&style=flat-square">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react&style=flat-square">
  <img src="https://img.shields.io/badge/Typescript-4.9.3-blue?logo=typescript&style=flat-square">
  <img src="https://img.shields.io/badge/Prettier-2.8.1-blue?logo=prettier&style=flat-square">
  <img src="https://img.shields.io/badge/Eslint-8.29.0-blue?logo=eslint&style=flat-square">
  <img src="https://img.shields.io/badge/Testing--Library-13.4.0-blue?logo=testinglibrary&style=flat-square">
  <img src="https://img.shields.io/badge/Vitest-0.25.8-blue?logo=vitest&style=flat-square">
</p>

## 実行環境

|        主要技術        | バージョン |
| :--------------------: | :--------: |
|        Node.js         |  18.12.0   |
|          Yarn          |  1.22.19   |
|          Vite          |   4.0.0    |
|         React          |   18.2.0   |
|       TypeScript       |   4.9.3    |
|        Prettier        |   2.8.1    |
|         Eslint         |   8.29.0   |
| @testing-library/react |   13.4.0   |
|         Vitest         |   0.25.7   |
|  @vitest/coverage-c8   |   0.25.8   |

## コマンド

### 開発モード実行

```shell
yarn dev
```

### ビルド

```shell
yarn build
```

### ローカルでビルドを実行する

```shell
yarn build
yarn preview
```

### lint 実行

```shell
yarn lint
```

### テスト実行

```shell
yarn test
```

### カバレッジ表示

```shell
yarn coverage
```

## github actions の設定

- 詳細は `.github/workflows/ci.yml` に書いてある
- PR が `draft` から `ready for review` に変わったら ci が走るようになっている
  - PR を出してからさらに修正を加え、さらに ci を回す場合
    - 一度 `draft` に戻して `ready for review` に変える必要がある
