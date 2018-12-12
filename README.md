# mb-web ![](https://img.shields.io/badge/MIRAI-BASE-brightgreen.svg)

http://miraibase.jp/

## How to Develop
方法のみを記載します。
開発環境の根拠は下に記載します。

### 条件
1. `npm(Node Package Manager)`が動作する環境を整える<br>
[Node.js](https://nodejs.org/)のインストール

2. このプロジェクトで使用しているモジュールパッケージをインストールする<br>
```shell
$ npm install
# 省略記法： npm i
# ただし、技術的余裕があれば yarn 推奨(そのうち説明書きます)
```

3. ファイル監視プログラムとテストサーバの起動
```shell
$ npm run dev
```

## How to Deploy
1. ビルドする
```shell
$ npm run build
```
→ buildフォルダが自動で開く

2. アップロードする
ftpでよしなに。
buildフォルダの中身を全部投げる。

## Visual
![screencapture-miraibase-jp-2018-12-11-23_21_47](https://user-images.githubusercontent.com/9881744/49806675-b7c99600-fd9b-11e8-9118-48f87c390bd5.png)
