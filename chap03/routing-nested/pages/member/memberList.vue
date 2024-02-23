<script setup lang="ts">
import type { Member } from "@/interfaces";

// 会員情報リストをステートから取得
const memberList = useState<Map<number, Member>>("memberList");
</script>

<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li>会員情報</li>
        </ul>
    </nav>
    <section>
        <h2>会員リスト</h2>
        <p>
            新規登録は<NuxtLink v-bind:to="{name: 'member-memberList-memberAdd'}">こちら</NuxtLink>から
        </p>
        <section>
            <ul>
                <li v-for="[id, member] in memberList" v-bind:key="id">
					<NuxtLink v-bind:to="{name: 'member-memberList-memberDetail-id', params: {id: id}}">
						IDが{{id}}の{{member.name}}さん
					</NuxtLink>
                </li>
            </ul>
        </section>
        <NuxtPage />
    </section>
</template>