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

const asyncData = useLazyAsyncData(
	'/WeatherInfog/${route.params.id}',
	(): Promise<any> => {
		const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
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
			appid: "eae14fea056621839d8e6fb42c1e9e65",
		}
		//クエリパラメータを生成。
		const queryParams = new URLSearchParams(params);
		//実際にアクセスするURLを生成。
		const urlFull = `${weatherInfoUrl}?${queryParams}`;
		const response = $fetch(urlFull);
		return response;
	},
	{
		// pick: ["wather"],
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
	<p v-if="pending">データ取得中・・・</p>
	<section v-else>
		<h2>{{selectedCity.name}}の天気</h2>
		<p>{{weatherDescription}}</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
