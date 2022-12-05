<template>
<LayoutDefault>
  <div class="rt-views-wrapper">
    <router-view/>
  </div>
</LayoutDefault>
</template>

<script setup lang="ts">

import LayoutDefault from "@/layouts/LayoutDefault.vue"
</script>

<style scoped lang="scss">
.rt-views-wrapper{
  min-height: 80vh;
}
</style>
