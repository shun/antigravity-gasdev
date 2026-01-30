# Antigravity Project

Google Apps Script (GAS) を使用して、スプレッドシートのデータをWebアプリケーションとしてHTML表示するプロジェクトです。
Google Claspを利用してローカル環境（Windows）で開発・デプロイを行います。

## 前提条件

* **Node.js**: インストール済みであること (LTS推奨)
* **Google Account**: GASおよびGoogle Cloud Platformを利用可能なアカウント

## ディレクトリ構成

```text
antigravity-gasdev/
├── .agent/
│   └── skills/
│       └── clasp/
│           └── SKILL.md
├── src/               # GASソースコード
│   ├── Code.js        # サーバーサイドロジック
│   ├── index.html     # クライアントサイドHTML
│   └── appsscript.json # マニフェストファイル
├── .clasp.json        # Clasp設定
├── .gitignore
├── GEMINI.md
└── README.md
```

## セットアップ手順

Windows PowerShell または コマンドプロンプトで以下を実行してください。

### 1. プロジェクトの初期化

```bash
# プロジェクトフォルダの作成と移動 (既に存在する場合はスキップ)
# mkdir antigravity-gasdev
# cd antigravity-gasdev

# npmの初期化とClaspのインストール
npm init -y
npm install @google/clasp -g

## デプロイ方法

### 1. スラッシュコマンドを使用する場合（推奨）

本プロジェクトにはデプロイを自動化するワークフローが含まれています。チャット画面で以下のコマンドを入力するだけで、コードのアップロードからデプロイまでが実行されます。

```
/deploy
```

### 2. 手動で実行する場合

Claspコマンドを使用して手動でデプロイすることも可能です。

```bash
# コードのアップロード
clasp push

# Webアプリとしてデプロイ
clasp deploy --description "v1.0.0"

# Webアプリを開く
clasp open --webapp
```