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

## ライフサイクルフック
|ライフサイクルフック関数|実行タイミング|
|:---|:---|
|onBeforeMount|コンポーネントの解析処理後、決定したDOMをレンダリングする直前|
|onMounted|DOMのレンダリングが完了し、表示状態(Mounted状態)になった時点|
|onBeforeUpdate|リアクティブデータが変更され、DOMの再レンダリング処理を行う前|
|onUpdated|DOMの再レンダリングを完了した時点|
|onBeforeUnmount|コンポーネントのDOMの非表示処理を開始する直前|
|onUnmounted|コンポーネントのDOMの非表示処理が完了した(Unmountedな状態)になった時点|
|onErrorCaptured|配下のコンポーネントを含めてエラーを検知した時点|
|onActivated|コンポーネントが待機状態でなくなった時点|
|onDeactivated|コンポーネントが待機状態になった時点|
|onRenderTracked|リアクティブ変数に初めてアクセスが発生した時点|
|onRenderTriggered|リアクティブ変数が変更されたのを検知して、その変数へのアクセスがあった時点|

## 親から子にデータを渡す
* Props
⇒ Propsのデータはreadonly(読み取り専用)となっているため、直接は変更できない。

## 子が親のイベントを実行する
* Emit