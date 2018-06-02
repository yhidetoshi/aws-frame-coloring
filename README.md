# aws-frame-coloring
- Google ChromeでAWSのマネジメントコンソールのヘッダーとフッダーをアカウント名で変更する
  - AWSアカウント名に `stg` / `dev` / `prd` が含まれる場合に色を以下のように変わるようにしています。
  - 他の名前で変更したい場合は、 `js/aws-frame-coloring.js` の値を変更してください

### 使い方
- git clone https://github.com/yhidetoshi/aws-frame-coloring
- Google ChromeのURLで `chrome://extensions` を開く
- `デベロッパーモード` にチェック
- `パッケージ化されていない拡張機能` を読み込む
- cloneしたディレクトリを選択
- 詳細を選択し、`シークレットモードでの実行を許可する`を有効にする

## 表示画面
- prd
![](./img/prd.png)
- stg
![](./img/stg.png)
- dev
![](./img/dev.png)
- default
![](./img/other.png)
