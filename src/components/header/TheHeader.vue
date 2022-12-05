<template>
  <header>
    <div class="container container__header">
      <RouterLink
          class="rt-link"
          :to="{name:'home'}"
      >
        <h1>AviaYamal</h1>
      </RouterLink>
      <ul>
<!--        todo: router links-->
        <li><a href="#">Акции</a></li>
        <li><a href="#">Поиск</a></li>
        <li><a href="#">Регистрация на рейс</a></li>
        <li>
          <RouterLink
              class="rt-link"
              :to="{name: 'auth'}"
          >
            Личный кабинет
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">
header{
  background-color: #7ba5ec;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .rt-link{
    color:white
  }


  .container__header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      a{
        color: white;
      }
    }
  }
}
</style>