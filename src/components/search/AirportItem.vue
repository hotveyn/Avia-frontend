<template>
  <div class="airport">
    <p>Аэропорт - {{props.airport.name}}</p>
    <p>Iata аэропорта - {{props.airport.iata }}</p>
  </div>
</template>

<script setup lang="ts">

import IAirport from "@/interfaces/IAirport";

const props = defineProps<{
  airport: IAirport
}>();
</script>

<style scoped lang="scss">

</style>