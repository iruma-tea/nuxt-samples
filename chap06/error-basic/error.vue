<script setup lang="ts">
interface Props {
    error: {
        statusCode?: string;
        statusMessage?: string;
        message?: string;
        stack?: string;
    };
}

defineProps<Props>();

const onBackButtonClick = () => {
    clearError({redirect: "/"});
}
</script>

<template>
    <h1>障害が発生しました。</h1>
    <h2>{{ error.statusCode }}: {{ error.statusMessage }}</h2>
    <p>{{ error.message }}</p>
    <p>{{ error.stack }}</p>
    <button v-on:click="onBackButtonClick">戻る</button>
</template>