<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<NuxtLink v-bind:to="{name: 'member-search-name-points', params: {name: 'suzuki', points: 45}}">複数パラメータ</NuxtLink>
		</p>
		<p>
			<NuxtLink v-bind:to="{name: 'member-show-name-points', params: {name: 'suzuki', points: 45}}">パラメータ省略(省略なし)</NuxtLink><br>
			<NuxtLink v-bind:to="{name: 'member-show-name-points', params: {name: 'tanaka'}}">パラメータ省略(省略あり)</NuxtLink>
		</p>
		<p>
			<NuxtLink v-bind:to="{name: 'member-call-id'}">可変長パラメータ(なし)</NuxtLink><br>
			<NuxtLink v-bind:to="{name: 'member-call-id', params: {id: [14, 25, 65]}}">可変長パラメータ(あり)</NuxtLink><br>
		</p>
	</section>
</template>
