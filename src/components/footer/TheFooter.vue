<template>
  <footer>
    <div class="container footer-container">
      <div class="footer__info">
        <h2>AviaYamal</h2>
        <ul>
          <!--        todo: router links-->
          <li class="list-use">Полезные ссылки</li>
          <li><a href="#">Личный кабинет</a></li>
          <li><a href="#">Войти</a></li>
          <li><a href="#">Регистрация</a></li>
          <li><a href="#">Личный кабинет</a></li>
        </ul>
        <ul>
          <!--        todo: router links-->
          <li class="list-use">Юрисдикция</li>
          <li><a href="#">Права</a></li>
          <li><a href="#">Лецензии</a></li>
        </ul>
      </div>
      <p class="copyright">@Copyright by AviaYamal</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

footer {
  color: white;
  background-color: #5f89a0;
  padding: 50px 0;
}

.footer-container {
  max-width: 900px;
  margin: 0 auto;
  @include myFlex($jc: center, $ai: center);
  gap: 50px;
  flex-direction: column;
  .footer__info{
    @include myFlex($jc: center, $ai: start);
    gap: 150px;

    h2{
      color: $myLightBlue
    }

    a {
      color: white;
    }

    .list-use {
      font-size: 20px;
      margin-bottom: 10px;
      color: $myLightBlue;
    }
  }
  .copyright{
    color: $myLightBlue
  }
}
</style>