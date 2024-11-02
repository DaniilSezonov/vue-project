<script setup lang="ts">
import DefaultHeader from "@/components/layouts/headers/default.vue";
</script>
<template>
    <div class="background">
        <div class="background-inner"></div>
    </div>

    <main class="layout">
        <DefaultHeader :title="'The most important thing is the weather in the house.'" avatar="src/assets/logo.svg"/>
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
        display: grid;
        padding-left: $layout-p-sm;
        @media (min-width: $md) {
            padding-left: $layout-p-md;
        }
        @media (min-width: $lg) {
            padding-left: $layout-p-lg;
        }
        @media (min-width: $xl) {
            padding-left: $layout-p-xl;
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
        .background-inner {
            content: "";
            display: flex;
            flex-direction: column-reverse;
            height: 100%;
            width: 80%;
            background-color: $primary-color;
            &::before {
                content: "";
                height: 100%;
                width: $layout-p-sm;
                @media (min-width: $md) {
                    width: $layout-p-md;
                }
                @media (min-width: $lg) {
                    width: $layout-p-lg;
                }
                @media (min-width: $xl) {
                    width: $layout-p-xl;
                }
            }
        }
    };
    .content {
        @include layout-content-padding;
        width: 100%;
        height: 100%;
        padding-top: 20px;
    }
    .navigation {
        border-bottom: 1px solid $gray;
        background-color: $main-color;
        display: flex;
        gap: 10%;
        border-top: 2px solid $primary-color;
        border-top-left-radius: 30px;
        color: $primary-color;
        padding-left: 10px;
        @media (min-width: $lg) {
            padding-left: 20px;
            border-top-width: 3px;
        }
        @media (min-width: $xl) {
            padding-left: 20px;
            border-top-width: 5px;
        }
        & a {
            padding: 15px 10px;
            text-decoration: none;
            line-height: 1.5rem;
            font-family: "GeistMono Regular", normal;
            color: $primary-color;
            font-size: 15px;
            @media (min-width: $md) {
                font-size: 20px;
                padding: 20px 15px;
            }
            @media (min-width: $lg) {
                font-size: 25px;
                padding: 22px 20px;

            }
            @media (min-width: $xl) {
                font-size: 30px;
                padding: 30px 20px;
            }
        }
    }
</style>