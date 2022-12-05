<template>

  <TheHeader/>
  <slot/>
  <TheFooter/>
</template>

<script setup lang="ts">


import TheFooter from "@/components/footer/TheFooter.vue"
import TheHeader from "@/components/header/TheHeader.vue"
</script>

<style scoped lang="scss">

</style>