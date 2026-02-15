# プロジェクト名
**LinkHub**

![License](https://img.shields.io/badge/license-MIT-blue.svg)

# 概要
ウェブサイトのURLを保存し、自動で取得した情報（OGP: タイトル、説明、サムネイル画像）と共に管理できるアプリケーションです。
AI生成での自動タグ付けや全文検索により、後から目的のサイトを簡単に見つけ出すことができます。

# 要件定義 & デザイン
設計資料は以下で管理しています。
- [要件定義書 (Notion)](https://www.notion.so/24e99b672fcf809c9ccfe6d53b5dbc31?source=copy_link)
- [デザイン仕様書 (Figma)](https://figma.com/design/spcuLfxQSieMZkl4bq6RS7/LinkHub?node-id=4-2&t=hWeVDjffMbdg8z5h-1)

# 使用技術
このプロジェクトでは以下の技術を採用しています。

- **Frontend**: Next.js (App Router), React, TypeScript
- **Styling**: Vanilla Extract
- **State/Auth**: Firebase
- **Tooling**: Storybook, ESLint, Prettier

# 環境構築 (Getting Started)

以下の手順で開発環境を構築できます。

### 1. リポジトリのクローン
```bash
git clone <repository-url>
cd link-hub
```

### 2. 依存関係のインストール
パッケージをインストールします。
```bash
npm install
```

### 3. 環境変数の設定 (Environment Setup)
ルートディレクトリに `.env.local` ファイルを作成し、以下のFirebase設定キーを追加してください。
これらの値はFirebaseコンソールから取得できます。

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. 開発サーバーの起動
アプリケーションをローカルで起動します。
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### 5. Storybookの起動
コンポーネントカタログを確認・開発する場合は以下を実行します。
```bash
npm run storybook
```
