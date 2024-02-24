<script setup lang="ts">
import type { City } from "@/interfaces";

// ルートオブジェクトを用意
const route = useRoute();
// 都市情報リストをステートから取得
const cityList = useState<Map<number, City>>("cityList");
// ルートパラメータをもとに都市データを取得
const selectedCity = computed(
    (): City => {
        const idNo = Number(route.params.id);
        return cityList.value.get(idNo) as City;
    }
);

//クエリパラメータの元データとなるオブジェクトリテラルを用意。
const params:{
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
	appid: "xxxxxx"
}

const asyncData = useLazyFetch(
	"https://api.openweathermap.org/data/2.5/weather",
	{
		key: `/WeatherInfo/${route.params.id}`,
		query: params,
		transform: (data: any): string => {
			const weatherArray = data.weather;
			const weather = weatherArray[0];
			return weather.description;
		}
	}
);

const weatherDescription = asyncData.data;
const pending = asyncData.pending;

</script>

<template>
	<p v-if="pending">データ取得中</p>
	<section v-else>
		<h2>{{selectedCity.name}}の天気</h2>
		<p>{{weatherDescription}}</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
