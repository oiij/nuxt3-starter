<script setup lang='ts'>
defineOptions({

})
definePageMeta({
  layout: 'default',
    title: 'HOME',
    requireAuth: true,
    keepAlive: true,
    icon: 'i-mage-home',
})
useHead({
  title: '首页',
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style scoped lang='less'>

</style>
