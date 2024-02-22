<script setup lang="ts">
import { computed } from 'vue';

// Propsインタフェース
interface Props {
    id: number;
    name: string;
    email: string;
    points: number;
    note?: string;
}

//Emitsインターフェースの定義。
// interface Emits {
// 	(event: "incrementPoint", id: number): void;
// }

// Emits型の定義
type Emits = {
    incrementPoint: [id: number];
};

//Propsオブジェクトの設定。
const props = defineProps<Props>();
//Emitの設定。
const emit = defineEmits<Emits>();

//Propsのnoteを加工する算出プロパティ。
const localNote = computed(
	(): string => {
		let localNote = props.note;
		if(localNote == undefined) {
			localNote = "--";
		}
		return localNote;
	}
);
//［ポイント加算］ボタンをクリックした時のメソッド。
const pointUp = (): void => {
	emit("incrementPoint", props.id);
}

</script>

<template>
    <section class="box">
        <h4>{{ name }}参の情報</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>
            <dt>メールアドレス</dt>
            <dd>{{ email }}</dd>
            <dt>保有ポイント</dt>
            <dd>{{ points }}</dd>
            <dt>備考</dt>
            <dd>{{ note }}</dd>
        </dl>
        <button v-on:click="pointUp">ポイント加算</button>
    </section>
</template>

<style scoped>
.box {
    border: green 1px solid;
    margin: 10px;
}
</style>