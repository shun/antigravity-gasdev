# GEMINI.md - Project Manifest

## Project Name
Antigravity (Google Apps Script Web App)

## Objective
スプレッドシートのデータを参照し、HTML形式のWebアプリケーションとして表示するシステムを構築する。
開発環境はWindowsローカル環境とし、Claspを用いたデプロイフローを確立する。

## Prompt Context
> Google antiglabityを使ってgoogle apps scriptを使って、スプレッドシートからデータを参照してhtmlで表示するプロジェクトを作りたい。
> この内容でGEMINI.mdと、claspを使ってデプロイするskillを作成してください。
> どういうフォルダ構成になるかもREADMEも作ってください。
> 環境はWindowsです

## Documents
- [requirements.md](./docs/requirements.md)

## Core Features
1.  **Data Fetching**: GAS (`Code.js`) がアクティブなスプレッドシートからデータを配列として取得。
2.  **Web Serving**: `doGet` 関数を用いて HTML テンプレートを出力。
3.  **Client Rendering**: `index.html` 内で `google.script.run` を使用し、サーバーサイドからデータを非同期で取得してテーブル描画。

## Development Environment
* **OS**: Windows
* **CLI Tool**: Google Clasp
* **Script ID**: ``
* **Language**: JavaScript (.js), HTML

## Constraints
* **Language**: すべてのやり取り、計画書、コミットメッセージ、Artifactは**必ず日本語**で行うこと。例外はない。
* **Strict Mode**: ユーザーからの入力が英語であっても、出力は日本語で行うこと。
* **Experimental Files**: 実験的なコードやHTMLは `./tmp` ディレクトリに配置して実験を行ってもよい。