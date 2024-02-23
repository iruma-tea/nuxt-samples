<template>
	<h1>ルートパラメータ参照</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink>
			</li>
			<li>ルートパラメータ参照</li>
		</ul>
	</nav>
	<section>
		<p>{{$route.params}}</p>
	</section>
</template>
