<template>
  <div class="trusts">
    <div class="trusts__info">
      <h2>Нам доверяют</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id incidunt rem tempore totam? Doloremque
        doloribus eaque, eum mollitia nesciunt quam quibusdam quidem temporibus! A in iusto quos rerum voluptas.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id incidunt rem tempore totam? Doloremque
        doloribus eaque, eum mollitia nesciunt quam quibusdam quidem temporibus! A in iusto quos rerum voluptas.</p>
    </div>
    <img
        class="trusts__img"
        src="@/assets/img/promotion1.jpg"
        alt="promotion"
    />
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.trusts {
  max-width: 1000px;
  margin: 50px auto 0;
  @include myFlex($ai: start);

  .trusts__info {
    @include myFlex($ai: start, $jc: center);
    flex-direction: column;
    gap: 50px;
    background-color: $myLightBlue;
    min-height: 357px;
    padding: 20px;

  }
}

@media screen and (max-width: 950px){
  .trusts__img{
    display: none;
  }
}
</style>