<script setup lang="ts">
interface Props {
  title: string
  avatar: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="header">
    <img :src="avatar" class="header-logo" width="auto"/>
    <h1 class="header-title">
        {{title}}
    </h1>
  </div>
</template>


<style lang="scss">
.header {
  width: 100%;
  display: flex;
  gap: $layout-p-sm;
  background-color: $primary-color;
  border-left: 1px solid;
  border-top-left-radius: 120px;
  @media (min-width: $md) {
    gap: $layout-p-md;
  }
  @media (min-width: $lg) {
    gap: $layout-p-lg;
  }
  @media (min-width: $xl) {
    gap: $layout-p-xl;
  }
}
.header-logo {
  display: flex;
  transform: rotate(180deg);
  height: 100%;
  align-items: center;
  width: $logo-size-sm;
  height: 100%;
  @media (min-width: $md) {
    width: $logo-size-md;
  }
  @media (min-width: $lg) {
    width: $logo-size-lg;
  }
  @media (min-width: $xl) {
    width: $logo-size-xl;
  }
}
.header-title {
  display: flex;
  align-items: center;
  color: $text-color;
  background-color: $secondary-color;
  font-family: "GeistMono", sans-serif;
  line-height: 1.25rem;
  font-weight: 400;
  font-size: 14px;
  padding: 0 20px;
  @media (min-width: $md) {
    font-size: 18px;
  }
  @media (min-width: $lg) {
    font-size: 24px;
  }
  @media (min-width: $xl) {
    font-size: 28px;
  }
}
</style>