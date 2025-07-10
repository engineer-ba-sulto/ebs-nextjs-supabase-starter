# Bun を使った Cloudflare テンプレート活用術

## 概要

Bun パッケージマネージャーを使用して Cloudflare テンプレートから Next.js プロジェクトを作成する際、様々なテンプレートオプションを指定できます。このドキュメントでは`bun create cloudflare@latest`コマンドで Next.js テンプレートを指定する方法を解説します。

## 基本構文

Bun を使って Cloudflare テンプレートからプロジェクトを作成する基本構文は以下の通りです：

```bash
bun create cloudflare@latest [ディレクトリ] --framework next -- [Next.jsオプション]
```

ここで重要なのは、`--`の後に続くパラメータは Next.js のテンプレートオプションとして渡されるという点です。

## テンプレートの指定方法

Next.js には多数の公式テンプレート（Examples）が用意されています。これらは`--example`フラグを使って指定できます：

```bash
bun create cloudflare@latest ./ --framework next -- --example with-supabase
```

上記の例では：

- `with-supabase` - 使用するテンプレート名
- `with-supabase-app` - プロジェクト名（省略可能）

## 複数オプションの組み合わせ

テンプレート指定と他の Next.js オプションを組み合わせることも可能です：

```bash
bun create cloudflare@latest ./ --framework next -- --example with-supabase --typescript --tailwind --eslint
```

この例では、Supabase テンプレートを使いながら、TypeScript、Tailwind CSS、ESLint を有効にしています。

## 主なテンプレートオプション

Cloudflare プロジェクトで使用できる主な Next.js テンプレート例：

- `with-supabase` - Supabase 連携
- `with-mongodb` - MongoDB 連携
- `with-prisma` - Prisma ORM 連携
- `with-chakra-ui` - Chakra UI
- `with-tailwindcss` - Tailwind CSS
- `with-iron-session` - Iron Session 認証

Next.js の公式リポジトリでは、100 種類以上のテンプレートが提供されており、これらは全て Cloudflare プロジェクト作成時に使用できます。全てのテンプレートは [GitHub の Next.js 公式リポジトリ](https://github.com/vercel/next.js/tree/canary/examples) で確認できます。

## メリット

- 開発の初期段階での設定時間を大幅に短縮
- 一貫性のある構成でプロジェクトを開始可能
- 最新のベストプラクティスに基づいたテンプレート
- Cloudflare との連携が事前設定済み

## まとめ

`bun create cloudflare@latest`コマンドを使うことで、Cloudflare と Next.js の組み合わせに加え、様々な追加機能を持つテンプレートからプロジェクトを素早く作成できます。Next.js の公式サイトで提供されている全テンプレートは Cloudflare プロジェクト作成時にも活用できるので、自分のプロジェクトに最適なテンプレートを選んでみてください。

テンプレートの詳細や最新の一覧については、[Next.js の Examples ディレクトリ](https://github.com/vercel/next.js/tree/canary/examples)を参照してください。ここでは、様々なユースケースに対応した多数のスターターテンプレートを見つけることができます。
