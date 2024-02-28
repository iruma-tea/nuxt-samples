<script setup lang="ts">
const onThrowsErrorClick = (): void => {
    throw createError("擬似エラー発生。");
};
</script>

<template>
    <section>
        エラーを<button v-on:click="onThrowsErrorClick">発生</button>
    </section>
</template>