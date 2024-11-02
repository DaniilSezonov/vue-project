<script setup lang="ts">
interface Props {
  title: string
  avatar: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="header">
    <img :src="avatar" class="header-logo"/>
    <h1 class="header-title">
        {{title}}
    </h1>
  </div>
</template>


<style lang="scss">
.header {
  width: 100%;
  display: flex;
  gap: $logo-size-sm;
  @media (min-width: $md) {
    gap: $logo-size-md;
  }
  @media (min-width: $lg) {
    gap: $logo-size-lg;
  }
  @media (min-width: $xl) {
    gap: $logo-size-xl;
  }
}
.header-logo {
  display: block;
  width: $logo-size-sm;
  height: 0px;
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
  padding: 10px 0;
  color: #272727;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  @media (min-width: $md) {
    font-size: 18px;
  }
  @media (min-width: $lg) {
    font-size: 22px;
  }
  @media (min-width: $xl) {
    font-size: 24px;
  }
}
</style>