# nuxt-samples

## Nuxtプロジェクトの作成コマンド
* npx nuxi init プロジェクト名

## 開発サーバ起動コマンド
* npm run dev

## ref()関数
* const 変数名 = ref(値);
⇒ リアクティブ変数の用意

## computed()関数

## reactive()関数
* オブジェクトをまとめてリアクティブ変数を定義する

## watchEffect()関数
* リアクティブな変数を監視しその値が変化したさいに実行する

## watch()関数
* 監視対象を明示する。
> watch(監視対象リアクティブな変数, (newVal:データ型, oldVal:データ型):void => {
    監視対象が変化した際に実行される処理
}, {immediate:true});