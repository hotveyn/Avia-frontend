<template>
<div class="flight__card">
  <h2>
    {{ props.flight.flight_code }}
  </h2>
  <div class="flight__airports">
    <p>Откуда: аэропорот - {{props.flight.from.airport}}, в {{ props.flight.from.time }}</p>
    <p>Куда: аэропорот - {{props.flight.to.airport}}, в {{ props.flight.to.time }}</p>
  </div>
  <p class="flight__cost">Цена - <i>{{ props.flight.cost }} RUB</i></p>
  <button
    class="buy"
  >
    Купить
  </button>
</div>
</template>

<script setup lang="ts">

import IFlight from "@/interfaces/IFlight";

const props = defineProps<{
  flight: IFlight;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.buy{
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: $myDarkBlue;
  border-radius: 3px;
  border-color: $myLightBlue;
  color: $myLightBlue;
  cursor: pointer;
}
</style>