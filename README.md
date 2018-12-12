# mb-web ![](https://img.shields.io/badge/MIRAI-BASE-brightgreen.svg)

http://miraibase.jp/

## How to Develop
方法のみを記載します。
開発環境の説明は下に記載します。

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

## 開発環境と開発指針
### おおまかな開発環境について
ファイル構成
```meu
/
+api/   :サーバーサイド。CGIとして開発。
+build/ :Deployするデータ。buildすると作成される。
+src/   :フロントサイドでいじる部分
  +style/    :Sassデータを入れる。main.sassから各モジュールをincludeする。
  +script/   :JSデータを入れる。ファイル作れば勝手に読まれる。
  +images/   :画像を入れる。
  +index.pug :HTMLのメタ言語
  +app.js    :Sassとjsを読み込む。いじらなくてよし。
```

開発環境の関係
```meu
Node-(実行)-parcel-(呼び出し)-index.pug-(ファイル内リンクから各ファイルをimport)--各JS,Sass
```
### 開発環境
#### pug
HTMLのメタ言語。
閉じタグ無し、インデントのみでの構成記述。
for文(反復処理)なども可能(`#scrollDown`参照)。

HTML
```html
<div class="meu">
  <p>閉じタグホンマきらい</p>
</div>
<div class="meumeu" id="plus">
  <p>あと見づらいねんな</p>
</div>
```

pug
```pug
.meu
  p 閉じタグ無いって幸せ
.meumeu#plus
  p divも省略可能で、CSSと同じ考え方でclassとidが振れます。
```

#### Sass
CSSのメタ言語。
閉じタグ無し、インデントのみでの構成記述。
セミコロン`;`も書かない。
入れ子構造で書けるのが一番の強み。
`pug-Sass-JS Standard Style`は本当にきれいに書ける。

CSS
```css
a img{
  width: 100%;
}
a p{
  color: red;
}
```

Sass
```sass
a
  img
    width: 100%
  p
    color: red
```

#### Vue
`src/script/loadCompassEvent.js`にて使用。
一言で言えば、表示内容と変数の中身を簡単に同期できるようにするつよいやつ。

### 開発環境(開発の裏方)
#### Node.js
ぶっちゃけ下記のnpmやParcelを動かす土台としてしか扱いません。
ビビらなくていいです。

#### npm(実は非推奨、使えなくはない)
公開されているライブラリをインストール、管理できる他、それらの実行をalias化できるもの。
つまり、どんな環境でも同じように開発できる状況を整えられるようにするためのツール。

#### yarn(推奨)
npmの上位互換。
早い、バージョン管理が厳密、ヤーン。
npmで入れられるので、よければ使ってほしい。
```shell
# install
$ npm i -g yarn

# 各種コマンドの変化
$ npm install
$ yarn

$ npm run dev
$ yarn dev

$ npm run build
$ yarn build
```

#### Parcel
設定ファイル無しにhtmlやpugなどを引数に実行すると全てよしなにしてくれるやべーやつ。
JSのコンパイルも勝手にやってます。
現在も開発が猛スピードで進んでいて、sKは注目してます。

---

## 開発規約
できる限り他人が読めるものを書きましょう（前提）
その中で気にすべきものを列挙します。

### 参考にしているWebページ
- [YngLabコーディング規約](https://github.com/YngLab/coding_rule)※sKawashima作
- [Markdown記法 チートシート - Qiita](http://qiita.com/Qiita/items/c686397e4a0f4f11683d)
- [ベストなコーディング規約の作り方](http://bonk.red/articles/project/coding_rule.html)
- [経験の浅いチームのためのHTML/CSSコーディング規約 - Qiita](http://qiita.com/WalkerEpps/items/9c9a1098404cd89c0068)
- [Googleが推奨しているHTML/CSSコーディングガイドラインをまとめてみました。 | NIWAKASOFT](http://niwakasoft.jp/column/coding_conventions/)
- [あなたのコーディング、大丈夫？ コーディング規約 HTML＋CSS編 | Web制作会社スタイル](http://www.hp-stylelink.com/news/2013/10/20131001.php)
- [HTML5 で省略できるタグ - Qiita](http://qiita.com/labocho/items/54fd70c73ced35c8ba49)

### 全体
#### エンコーディング
ソースコードのエンコードは **UTF-8(BOMなし)** を使用する。

#### インデント
スペースを2つ使う。

```html
<!-- 推奨 -->
<ul>
  <li>A
</ul>
```
```scss
/* 推奨 */
.selector {
  color: black;
}
```
> [Sublime Text 3 - インデントの設定（スペース・タブ） - 開発メモ - Webkaru](http://webkaru.net/dev/sublime-text-3-indent/)

#### コメント
規約から外れた書き方をする場合・他メンバーが理解しづらいと考えられる部分にはコメントを残す。

#### 大文字/小文字
タグやID、色コードなどの記述はDOCTYPE,キャメルケース使用時を覗いて小文字で行う。

```sass
/* 非推奨 */
.SELECTOR
  COLOR: #0DAC1A

/* 推奨 */
.selector
  color: #0dac1a
```

#### 末尾の空白
動作の乱れが発生する場合があるため、末尾の空白は残さない。
また、ファイルの最後の一行は空行とする。

## pug(HTML)

#### バージョン
**HTML5** を使用する。

#### Doctype宣言
必ず宣言する。

```pug
doctype html
```
#### 任意のタグの省略
Googleが推奨しているため採用する。
> [HTML5 で省略できるタグ - Qiita](http://qiita.com/labocho/items/54fd70c73ced35c8ba49)

```pug
// 非推奨
doctype html
html
  head
    title Spending money, spending bytes
  body
    p Sic.

// 推奨
doctype html
title Saving money, saving bytes
p Qed.
```

## CSS

#### プロパティ記述の際のスペース
プロパティ: _ 設定値;のようにスペースを利用する。
**Sassでは前者はエラーになりますが一応。**

```sass
/* 非推奨 */
.nav-bottom
  color:red

/* 推奨 */
.nav-bottom
  color: red
```

#### 複数セレクタ指定の際の改行
セレクタごとに改行する。

```sass
/* 非推奨 */
.class1, .class2, .class3
  color: red

/* 推奨 */
.class1,
.class2,
.class3
  color: red
```

#### ルール間の改行
ルールとルールの間には改行を挟む。

```sass
/* 非推奨 */
.class1
  color: red
.class2
  color: blue

/* 推奨 */
.class1
  color: red

.class2
  color: blue
```

#### セレクタに使用する要素
classを使用する。
base指定を除き、タグ、idをセレクタに使用しない。

#### 小数点数値の表記
小数点の数値0は省略する。

```sass
/* 非推奨 */
p
  opacity: 0.8

/* 推奨 */
p
  opacity: .8
```

#### !importantは使用しない
!importantは**いかなる理由があっても使用しない。**
使用する必要を感じた際は設計から見直す。

#### 長い名前に関してはキャメルケースを使用する。
```sass
.rightMenu
```

#### スタイルを示す命名は避ける。
```sass
/* 非推奨 */
.mb50
.red
```

## JS
### JavaScript Standard Styleに則る
- [JavaScript Standard Style](https://standardjs.com/)
- [JavaScript Standard Styleのススメ - Qiita](https://qiita.com/munieru_jp/items/ca16cbfa859468137d2e)

```shell
# リンタもあります
$ npm run lint
```
