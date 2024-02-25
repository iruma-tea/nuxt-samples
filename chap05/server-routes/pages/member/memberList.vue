<script setup lang="ts">
import type { Member } from "@/interfaces";
definePageMeta(
    {
        layout: "member"
    }
);

const asyncData = useLazyFetch("/api/getMemberList");
const memberList = asyncData.data;
const pending = asyncData.pending;

</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li>会員情報</li>
        </ul>
    </nav>
    <section>
        <h2>会員リスト</h2>
        <p>
            新規登録は<NuxtLink v-bind:to="{name: 'member-memberAdd'}">こちら</NuxtLink>から
        </p>
        <p v-if="pending">データ取得中・・・</p>
        <section v-else>
            <ul>
                <li v-for="member in memberList" v-bind:key="member.id">
					<NuxtLink v-bind:to="{name: 'member-memberDetail-id', params: {id: member.id}}">
						IDが{{member.id}}の{{member.name}}さん
					</NuxtLink>
                </li>
            </ul>
        </section>
    </section>
</template>