
import { NuxtLink } from '#build/components';
<template>
    <ul>
        <li>
            <NuxtLink v-bind:to="{name: 'errorHandlerBasic'}">
                エラー表示実験
            </NuxtLink>
        </li>
        <li>
            <NuxtLink v-bind:to="{name: 'errorHandlerNavigate'}">
                画面表示時のエラー実験
            </NuxtLink>
        </li>
        <li>
            <NuxtLink v-bind:to="{name: 'errorHandlerFatal'}">
                致命的エラー発生実験
            </NuxtLink>
        </li>
        <li>
            <NuxtLink v-bind:to="{name: 'errorHandlerServer'}">
                サーバエラー発生実験
            </NuxtLink>
        </li>
    </ul>
</template>