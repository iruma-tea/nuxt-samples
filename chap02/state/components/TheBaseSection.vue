<script setup lang="ts">
import type { Member } from '@/interfaces';

// 会員情報リストをステートから取得
const memberList = useState<Map<number, Member>>("memberList");
// 保有ポイントの合計を算出プロパティ
const totalPoints = computed(
    (): number => {
        let total = 0;
        for (const member of memberList.value.values()) {
            total += member.points;
        }
        return total;
    }
);
</script>

<template>
    <section>
        <h1>会員リスト</h1>
        <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
        <OneMember
            v-for="id in memberList.keys()"
            v-bind:key="id"
            v-bind:id="id"
        />
    </section>
</template>

<style scoped>
section {
    border: orange 1px dashed;
    margin: 10px;
}
</style>