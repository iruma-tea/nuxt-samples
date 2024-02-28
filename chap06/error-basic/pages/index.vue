import { NuxtLink } from '../../../chap04/usefetch/.nuxt/components';
<template>
    <ul>
        <li>
            <NuxtLink v-bind:to="{name: 'errorHandlerBasic'}">
                エラー表示実験
            </NuxtLink>
        </li>
    </ul>
</template>