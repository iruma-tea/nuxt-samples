<script setup lang="ts">
import type { City } from "@/interfaces";
import { useWeatherInfoFetcher } from "~/composables/useWeatherInfoFetcher";

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

// コンポーザブル(useWeatherInofFetcher)の使用
const asyncData = useWeatherInfoFetcher(selectedCity.value);
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
