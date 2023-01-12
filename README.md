# react-typescript-vite

- React、TypeScript、Vite 構成のサンプルリポジトリ

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.12.0-blue?logo=node.js&style=flat-square">
  <img src="https://img.shields.io/badge/Yarn-1.22.19-blue?logo=yarn&style=flat-square">
  <img src="https://img.shields.io/badge/Vite-4.0.4-blue?logo=vite&style=flat-square">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react&style=flat-square">
  <img src="https://img.shields.io/badge/Typescript-4.9.3-blue?logo=typescript&style=flat-square">
  <img src="https://img.shields.io/badge/Prettier-2.8.2-blue?logo=prettier&style=flat-square">
  <img src="https://img.shields.io/badge/Eslint-8.31.0-blue?logo=eslint&style=flat-square">
  <img src="https://img.shields.io/badge/Testing--Library-13.4.0-blue?logo=testinglibrary&style=flat-square">
  <img src="https://img.shields.io/badge/Vitest-0.27.1-blue?logo=vitest&style=flat-square">
  <img src="https://img.shields.io/badge/styled--components-5.3.6-blue?logo=styledcomponents&style=flat-square">
</p>

## 実行環境

|                                      主要技術                                      | バージョン |
| :--------------------------------------------------------------------------------: | :--------: |
|                                      Node.js                                       |  18.12.0   |
|                                        Yarn                                        |  1.22.19   |
|                       [Vite](https://github.com/vitejs/vite)                       |   4.0.4    |
|                     [React](https://github.com/facebook/react)                     |   18.2.0   |
|               [TypeScript](https://github.com/microsoft/TypeScript)                |   4.9.3    |
|                  [Prettier](https://github.com/prettier/prettier)                  |   2.8.2    |
|                     [Eslint](https://github.com/eslint/eslint)                     |   8.31.0   |
| [@testing-library/react](https://github.com/testing-library/react-testing-library) |   13.4.0   |
|                   [Vitest](https://github.com/vitest-dev/vitest)                   |   0.27.1   |
|                                @vitest/coverage-c8                                 |   0.26.3   |
|                [Lefthook](https://github.com/evilmartians/lefthook)                |   1.2.6    |
|    [styled-components](https://github.com/styled-components/styled-components)     |   5.3.6    |

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

### storybook 起動

```shell
yarn sb
```

## github actions の設定

- 詳細は `.github/workflows/ci.yml` に書いてある
- PR が `draft` から `ready for review` に変わったら ci が走るようになっている
  - PR を出してからさらに修正を加え、さらに ci を回す場合
    - 一度 `draft` に戻して `ready for review` に変える必要がある

## lefthook の設定

- Git hooks を管理するためのパッケージ
- 詳細は `lefthook.yml` に書いてある
- `git commit` 時に以下のコマンドを実行する
  - `yarn coverage`
  - `yarn lint`

## stylelint の設定

- CSS の文法に対して lint をかける
- 使用パッケージ
  - `stylelint`
  - `stylelint-config-standard`
  - `postcss-syntax`
  - `@stylelint/postcss-css-in-js`
- 設定ファイル
  - `.stylelintrc`
- 設定項目
  - シングルクォート有効
  - 数字のパーセンテージ設定を `0.x` という形で指定する
  - `rbga` 、 `hsla` などを使った色指定時にコンマで色情報を区切る
- その他設定参考
  - [styled-components で Stylelint を使う方法 2022](https://zenn.dev/ciffelia/articles/a42434cd8c1abc)
  - [Stylelint で CSS-in-JS を lint する時にハマったこと](https://zenn.dev/cp20/articles/2844af357345cf)
