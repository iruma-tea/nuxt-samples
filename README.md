# nuxt-samples

## Nuxtプロジェクトの作成コマンド
* npx nuxi init プロジェクト名

## 開発サーバ起動コマンド
* npm run dev

---

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

` watch(監視対象リアクティブな変数, (newVal:データ型, oldVal:データ型):void => {
    監視対象が変化した際に実行される処理
}, {immediate:true});`

---

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
type Emits = {
    イベント名:[引数:データ型,・・・]
    ・・・
    ・・・
};
const emit = defineEmits<Emits>();

## ステートの用意
* useState
useState<ステートのデータ型>(
    ステート名,
    (): ステートのデータ型 => {
        ステートの初期値の生成処理
        return ステートの初期値;
    }
);

## ステートの取得
const ステートを格納する変数 = useState<ステートのデータ型>(ステート名);

---

## リンクの生成
* NuxtLinkタグ
  * リンク先パス情報をto属性で指定する。⇒ 例) <NuxtLink to="/member/memberList">
  * コーディングの柔軟性を考慮して、通常はv-bind:toディレクティブを利用する。   
  `⇒ 例) <NuxtLink v-bind:to="{name: 'member-memberList'}">会員管理はこちら</NuxtLink>`   
  * `<NuxtLink v-bind:to="{name: 'ハイフン区切りの画面用コンポーネントファイルパス'}">`

## ルートパラメータの取得
* 現在のルートオブジェクトの取得
  * useRoute()関数を実行する。返却値はRouteLocationNormalized型で主なプロパティは以下のようなものがある
  
  |プロパティ|内容|例|
  |:---|:---|:---|
  |name|ルーティング名|member-memberDetail-id|
  |fullPath|pathとhashとqueryのすべてが含まれたパス文字列|/member/memberDetail/47783#section?nametanaka|
  |path|ルーティングパス文字列|/member/memberDetail/47783|
  |hash|ハッシュ(#以降の文字列)|#section|
  |query|クエリ情報(?以降の情報){name: tanaka}||
  |params|ルートパラメータ|{id: 47783}|

## ルーティングを制御するルータオブジェクト
* ルータオブジェクトの取得
  * useRouter()関数を実行する。返却値はRouter型。Router型オブジェクトのメソッドは以下のようなものがある。

  |メソッド|内容|
  |:---|:---|
  |push()|指定パスに遷移する|
  |replace()|現在のパスを置き換える|
  |back()|履歴上のひとつ前の画面に戻る|
  |forward()|履歴上のひとつ次の画面に進む|
  |go()|履歴上の指定の画面に進む|

---

## Nuxtのレイアウト機能
1. layoutsフォルダ(ディレクトリの作成)
2. デフォルトで適用するレイアウトを記述するコンポーネントファイルの作成。default.vueというファイル名で作成する。
    * 各画面用コンポーネントをレンダリングする箇所には*slot*タグを記述する。
3. レイアウトの適用はNuxtLayoutタグ
    * レイアウトを適用するコンポーネントに*NuxtLayout*タグで囲む。
4. デフォルト以外のレイアウトは適切ファイル名.vueというファイル名でレイアウトを記述するコンポーネントファイルを作成する。
5. 4.を適用するコンポーネントに以下のロジックを組み込む

    `definePageMeta(
        {
            layout: "member"
        }
    );`
    * memberは作成したlayoutファイル名を指定。また、falseを指定するとデフォルトレイアウトを含め、適用対象外となる。

## ページのヘッダ情報を設定する
* useHead()関数を使用する。引数にオブジェクトを渡し、プロパティを設定することで、ヘッダ情報を設定する
* タイトルを設定するサンプル    
`useHead(
    {
        title: 'ヘッダ変更のサンプル'   
    }
);`   
* メタ(meta)情報の設定するサンプル   
`useHead({
    title: 'ヘッダ変更のサンプル',
    meta: [
        {name: "description", content: "ヘッダを変更するサンプルです。"},
        {property: "og:image", content: data.image}
    ]
});`   
* useHead()の引数オブジェクトのプロパティ    

|プロパティ名|データ型|内容|
|:---|:---|:---|
|title|string|タイトルタグの設定|
|titleTemplate|string/アロー関数|タイトルを動的に設定|
|meta|配列|metaタグの設定|
|link|配列|linkタグの設定|
|style|配列|styleタグの設定|
|script|配列|scriptタグの設定|
|noscript|配列|noscriptタグの設定|
|htmlAttrs|オブジェクト|htmlタグの属性の設定|
|bodyAttrs|オブジェクト|bodyタグの属性の設定|

## URLSearchParamsクラス
* このクラスをnewする際に、引数としてクエリ文字列の元となるオブジェクトをリテラルを渡すとクエリ文字列が自動生成される。     
`const params:{
	lang: string;
	q: string;
	appid: string;
} =
{
	//言語設定のクエリパラメータ
	lang: "ja",
	//都市を表すクエリパラメータ。
	q: selectedCity.value.q,
	//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
	appid: "eae14fea056621839d8e6fb42c1e9e65"
}
//クエリパラメータを生成。
const queryParams = new URLSearchParams(params);
`

## $fetch()関数
* 引数にアクセス先のURLを指定するとそのURLにGetアクセスを行う。
* POST通信の場合、第二引数にオプションのオブジェクトを渡す。       
`$fetch("・・・・・", {method: "POST", body: {・・・・}})`　　　　　　　
* $fetch()のオプション         

|オプション|値|内容|
|:---|:---|:---|
|method|文字列|リクエストメソッドの定義|
|query|オブジェクト|クエリパラメータの設定|
|params|オブジェクト|上記queryと同じ|
|body|文字列/オブジェクト|リクエストボディの設定(オブジェクトの場合は自動的にJSON変換される)|
|headers|オブジェクト|リクエストヘッダの設定|
|baseURL|文字列|ベースURLの設定|

## useAsyncData()関数    
`useAsyncData(
    キー文字列,
    ():Promise<取得データのデータ型> => {
        データ取得処理
        return 取得データ
    },
    オプションオブジェクト
);
`
## useAsyncData()の戻り値オブジェクト
|プロパティ名|内容|データ形式|
|:---|:---|:---|
|data|ハンドラの本来の戻り値、すなわち、取得したデータ|取得したデータが含まれたリアクティブな変数|
|pending|データ取得が終了したかどうかを表すbool値|true/falseを値とするリアクティブな変数|
|refresh|データを再取得する関数|非同期関数|
|error|データ取得に失敗した場合のエラーオブジェクト|エラーオブジェクトのリアクティブな変数|

## useAsyncData()のオプション
|オプション|値|内容|
|:---|:---|:---|
|server|true/false(デフォルトtrue)|サーバサイドでデータ取得を行うかどうかの設定|
|lazy|true/false(デフォルトfalse)|ページロード後にデータ取得を行うかどうかの設定|
|default|アロー関数|デフォルト値の設定。lazyオプションがtrueの場合に有用|
|transform|アロー関数|ハンドラによって取得したデータの加工処理を設定|
|pick|文字列配列|ハンドラによって取得したデータの絞り込みを設定|
|watch|リアクティブな変数の配列|自動的にrefreshを実行するためのリアクティブな変数を設定|
|immediate|true/false(デフォルトtrue)|falseを設定すると即時実行しない|

## useLazyAsyncData()/useLazyFetch()
useAsyncData()関数のLazy版。useLazyAsyncData(),useLazyFetch()を使用する場合、awaitは不要。*pending* プロパティを使用することで、
「データ取得中・・・」のような画面を表示させることが可能。   
* pendingプロパティの使い方   

`const asyncData = useLazyAsyncData(・・・・);   
const pending = asyncData.pending;    
<template>   
	<p v-if="pending">データ取得中・・・</p>   
	<section v-else>   
		<h2>{{selectedCity.name}}の天気</h2>   
		<p>{{weatherDescription}}</p>   
	</section>   
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>   
</template>`

---

## コンポーザブルの作成方法
1. composablesフォルダを作成する
2. 1.のフォルダ内にuse〇〇.tsという名称(キャメル記法)のファイルを作成する
3. 2.と同名のメソッドを定義しexportする
4. 3のメソッド内に再利用したいコードを記述し、その結果をリターンする。

`export const use〇〇 = (引数:引数の型,・・・・) => {
    データを用意する処理
    return 用意したデータ;
}`

## ランタイム設定を記述
 URLやAPIキーのような定数値を1箇所にまとめる機能がNuxtのランタイム設定(Runtime Config)です。<br>
 **nuxt.confing.ts** に記述する。**nuxt.config.ts** ファイルはプロジェクトを作成すると自動で<br>
 されており、あらかじめdefineNuxtConfig()のエクスポート記述がされている。<br>
 さらにその引数オブジェクトにdevtoolsプロパティも記述されている。

* ランタイム設定はruntimeConfigプロパティ。
* runtimeConfigプロパティにpublicプロパティとしてオブジェクトを設定する。

 `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherInfoUrl: "https://api.openweathermap.org/data/2.5/weather",
      // APIキーの設定。ここに各自の文字列を記述する!!
      weathermapAppid: "xxxxxx",
    }
  }
})`

## 環境変数の利用
環境変数(Environment Variable)であり、*.env*ファイルとして作成する。<br>
ランタイム設定の設定名を*.env*ファイルで上書きする場合、ランタイム設定の設定名を全て大文字のスネーク記法に変換し、<br>
先頭に*NUXT_*を付与した設定名とする。ただし、publicのランタイム設定の場合は*NUXT_PUBLIC_*として先頭に付与する。

`NUXT_PUBLIC_WEATHERMAP_APPID="xxxxxx"`


## Server(API)のエンドポイントの作成
 サーバー処理を作成する場合、Nuxtでは*sever*フォルダ内にファイルに記述する。<br>
そのうち、実際にサーバAPIエンドポイントとしてデータを送信する処理の場合、*api*サブフォルダ内に格納する。

* APIのエンドポイント処理コードはdefineEventHandler()関数の実行結果をデフォルト(default)エクスポートする。
* defineEventHandler()関数の引数にはサーバAPIエンドポイントとして送信するデータをリターンするアロー関数を定義する。
  * このアロー関数の引数はhttpに関するイベントオブジェクトである。
* 通常はJSON.stringify()メソッドを利用してJSONデータ化する必要があるが、defineEventHandler()内では不要。単に配列やオブジェクトを
リターンするだけで自動でJSONデータ化される。
* NuxtのサーバAPIエンドポイントのパス
  * /api/サーバ処理ファイル名から拡張子を取り除いたもの

## nuxiの主なコマンド
 nuxiの主なコマンドは以下の通り
|コマンド|内容|
|:---|:---|
|nuxi add|プロジェクト内へのファイル追加|
|nuxi build|プロジェクトのビルド。npm run buildと同じ|
|nuxi clean|生成ファイルの削除|
|nuxi dev|開発用サーバの起動 npm run devと同じ|
|nuxi generate|静的ファイルの生成。npm run generateと同じ|
|nuxi info|プロジェクト情報のログ|
|nuxi init|プロジェクトの作成|
|nuxi preview|プロジェクトのビルド後に生成されたファイルでプロジェクトを実行。npm run previewと同じ|
|nuxi typecheck|プロジェクト内の型チェックを実行|
|nuxi upgrade|プロジェクトを最新のNuxt環境にアップデート|

## サーバサイドルーティング
　サーバサイドのルーティングには、*server/routes*フォルダ配下に配置したファイルはルーティングの仕組みが適用される。
* ルートパラメータの取得(context.param)
  * defineEventHandler()のコールバック関数の引数(event)に対して、context.paramプロパティにアクセスすることで<br>
  ルートパラメータをすべて取得することができる。
