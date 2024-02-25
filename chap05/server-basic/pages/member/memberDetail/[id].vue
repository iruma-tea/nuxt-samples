<script setup lang="ts">
import type { Member } from "@/interfaces";

definePageMeta(
    {
        layout: "member"
    }
);

// ルートオブジェクトを取得
const route = useRoute();
// 会員情報リストをステートから取得
const memberList = useState<Map<number, Member>>("memberList");
// 会員情報リストから該当会員情報を取得
const member = computed(
    (): Member => {
        const id = Number(route.params.id);
        return memberList.value.get(id) as Member;
    }
);
//備考データがない場合の対応。
const localNote = computed(
	(): string => {
		let localNote = "--";
		if(member.value.note != undefined) {
			localNote = member.value.note;
		}
		return localNote;
	}
);
</script>
<template>
	<nav id="breadcrumbs">
		<ul>
			<li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
			<li><NuxtLink v-bind:to="{name: 'member-memberList'}">会員リスト</NuxtLink></li>
			<li>会員詳細情報</li>
		</ul>
	</nav>
	<section>
		<h2>会員詳細情報</h2>
		<dl>
			<dt>ID</dt>
			<dd>{{member.id}}</dd>
			<dt>名前</dt>
			<dd>{{member.name}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{member.email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{member.points}}</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
	</section>
</template>
