<script setup lang="ts">
import type { Member } from "@/interfaces";

definePageMeta(
    {
        layout: "member"
    }
);

// ルータオブジェクトを取得
const router = useRouter();
// 入力データと同期させるMemberオブジェクトの用意。
const member: Member = reactive({
    id: 0,
    name: "",
    email: "",
    points: 0,
    note: "",
});
const pending = ref(false);
const onAdd = async (): Promise<void> => {
	pending.value = true;
	const asyncData = await useFetch(
		"/member-management/members",
		{
			method: "POST",
			body: member
		}
	);
	if (asyncData.data.value != null && asyncData.data.value.result == 1) {
		router.push({name: "member-memberList"});
	}
}

</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li><NuxtLink v-bind:to="{name: 'member-memberList'}">会員リスト</NuxtLink></li>
            <li>会員情報追加</li>
        </ul>
    </nav>
	<section>
		<h2>会員情報追加</h2>
		<p v-if="pending">データ送信中...</p>
		<template v-else>
			<p>
				情報を入力し、登録ボタンをクリックしてください。
			</p>
			<form v-on:submit.prevent="onAdd">
				<dl>
					<dt>
						<label for="addId">ID&nbsp;</label>
					</dt>
					<dd>
						<input type="number" id="addId" v-model.number="member.id" required>
					</dd>
					<dt>
						<label for="addName">名前&nbsp;</label>
					</dt>
					<dd>
						<input type="text" id="addName" v-model="member.name" required>
					</dd>
					<dt>
						<label for="addEmail">メールアドレス&nbsp;</label>
					</dt>
					<dd>
						<input type="email" id="addEmail" v-model="member.email" required>
					</dd>
					<dt>
						<label for="addPoints">保有ポイント&nbsp;</label>
					</dt>
					<dd>
						<input type="number" id="addPoints" v-model.number="member.points" required>
					</dd>
					<dt>
						<label for="addNote">備考</label>
					</dt>
					<dd>
						<textarea id="addNote" v-model="member.note"></textarea>
					</dd>
				</dl>
				<button type="submit">登録</button>
			</form>
		</template>
	</section>
</template>