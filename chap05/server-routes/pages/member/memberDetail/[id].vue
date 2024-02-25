<script setup lang="ts">

definePageMeta(
    {
        layout: "member"
    }
);

// ルートオブジェクトを取得
const route = useRoute();
// memberListを絞り込んで取得
const asyncData = useLazyFetch("/api/getOneMemberInfo", {
	query: {id: route.params.id}
})
const member = asyncData.data;
const pending = asyncData.pending;


//備考データがない場合の対応。
const localNote = computed(
	(): string => {
		let localNote = "--";
		if (member.value != null && member.value.note != undefined) {
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
		<p v-if="pending">データ取得中・・・</p>
		<dl v-else>
			<dt>ID</dt>
			<dd>{{member?.id}}</dd>
			<dt>名前</dt>
			<dd>{{member?.name}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{member?.email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{member?.points}}</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
	</section>
</template>
