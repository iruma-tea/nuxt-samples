<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';

const widthInit = Math.round(Math.random() * 10);
const heightInit = Math.round(Math.random() * 10);
const width = ref(widthInit);
const height = ref(heightInit);
const area = computed(
	(): number => {
		return width.value * height.value;
	}
);

// サンプル通りのsetIntervalのみを使用するとエラーが発生する。
// onMounted、onUnmountedフック時にsetInterval、clearIntervalを呼び出す処理で修正。

onMounted(() => {
  const updateTimer = setInterval(
    ():void => {
      width.value = Math.round(Math.random() * 10);
  		height.value = Math.round(Math.random() * 10);
    },
    1000
  );
  onUnmounted(() => {
    clearInterval(updateTimer);
  })
})
</script>

<template>
	<p>縦{{height}}で横が{{width}}の長方形の面積は{{area}}</p>
</template>
