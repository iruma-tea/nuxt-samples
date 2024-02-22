<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';

const widthInit = Math.round(Math.random() * 10);
const heightInit = Math.round(Math.random() * 10);
const rectangle = reactive({
  width: widthInit,
  height: heightInit,
});
const area = computed(
  ():number => {
    return rectangle.width * rectangle.height;
  }
);

onMounted(()=> {
  const updateTimer = setInterval(
    ():void => {
      rectangle.width = Math.round(Math.random() * 10);
      rectangle.height = Math.round(Math.random() * 10);
    },
    1000
  );
  onUnmounted(() => {
    clearInterval(updateTimer);
  })
});
</script>

<template>
	<p>縦{{rectangle.height}}で横が{{rectangle.width}}の長方形の面積は{{area}}</p>
</template>
