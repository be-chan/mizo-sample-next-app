# 公式 Node.js イメージを使う（Apple Silicon 対応も可）
FROM node:20-alpine

# 作業ディレクトリ
WORKDIR /app

# パッケージ関連を先にコピーして依存解決を高速化
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースをコピー
COPY . .

# 開発サーバー起動（必要に応じて build を追加）
CMD ["npm", "run", "dev"]
