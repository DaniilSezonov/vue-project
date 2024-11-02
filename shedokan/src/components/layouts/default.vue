<script setup lang="ts">
import DefaultHeader from "@/components/layouts/headers/default.vue";
</script>

<template>
    <div class="background"></div>

    <main class="layout">
        <DefaultHeader :title="`Важней всего погода в доме...`" avatar="src/assets/logo.svg"/>
        <nav class="navigation">
            <RouterLink :to="`/other`">Other Page</RouterLink>
            <RouterLink :to="`/404`">404 Page</RouterLink>
        </nav>
        <div class="content">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss">
    .layout {
        position: relative;
        z-index: 10;
        display: grid;
        padding: 0 $layout-p-sm;
        @media (min-width: $lg) {
            padding: 0 $layout-p-lg;
        }
        @media (min-width: $xl) {
            padding: 0 $layout-p-xl;
        }
    }
    .background {
        z-index: 0;
        position: absolute;
        top:0%;
        left:0;
        width: calc($logo-size-sm + 2*$layout-p-sm);
        height: 100vh;
        background-color: $main-color;
        @media (min-width: $md) {
            width: calc($logo-size-md + 2*$layout-p-sm);
        }
        @media (min-width: $lg) {
            width: calc($logo-size-lg + 2*$layout-p-lg);
        }
        @media (min-width: $xl) {
            width: calc($logo-size-xl + 2*$layout-p-xl);
        }
    };
    .content {
        width: 100%;
        height: 100%;
        padding-left: $left-layout-padding;
        padding-top: 20px;
        @media (min-width: $lg) {
            padding-left: calc($layout-p-lg + $logo-size-lg);
        }
        @media (min-width: $xl) {
            padding-left: calc($layout-p-xl + $logo-size-xl);
        }
    }
    .navigation {
        width: auto;
        background-color: $main-color;
        padding: 10px 25px;
        display: flex;
        gap: 20px;
        margin-left: -$layout-p-sm;
        margin-right: -$layout-p-sm;
        @media (min-width: $lg) {
            margin-left: -$layout-p-lg;
            margin-right: -$layout-p-lg
        }
        @media (min-width: $xl) {
            margin-left: -$layout-p-xl;
            margin-right: -$layout-p-xl;
        }
    }
</style>