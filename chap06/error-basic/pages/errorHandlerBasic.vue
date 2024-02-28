<script setup lang="ts">
const onResetButtonClick = (error: Ref) => {
    error.value = null;
};
</script>

<template>
    <NuxtErrorBoundary>
        <ErrorGeneratorBasic />
        <template v-slot:error="errorProps">
            <p>エラーが発生しました!</p>
            <p>{{ errorProps.error }}</p>
            <button v-on:click="onResetButtonClick(errorProps.error)">エラーを解消</button>
        </template>
    </NuxtErrorBoundary>
        <p>
            <NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink>
        </p>
</template>