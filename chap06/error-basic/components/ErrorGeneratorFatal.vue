<script setup lang="ts">
const onThrowsErrorClick = (): void => {
    throw createError({
        message: "致命的な擬似エラー発生。",
        fatal: true,
    });
};
</script>

<template>
    <section>
        致命的なエラーを<button v-on:click="onThrowsErrorClick">発生</button>
    </section>
</template>