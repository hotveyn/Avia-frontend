<template>
  <div class="container container-auth">
    <div class="auth">
      <div class="login auth-from">
        <h2>Авторизация</h2>
        <form>
          <input
              v-model.trim="phoneLog"
              class="auth__inp inp"
              type="text"
              placeholder="Телефон"
          >
          <input
              v-model.trim="passwordLog"
              class="auth__inp inp"
              type="password"
              placeholder="Пароль"
          >
          <button
              @click.prevent="auth()"
              type="submit"
              class="auth__button button"
          >
            Авторизоваться
          </button>
        </form>
      </div>
      <div class="reg auth-from">
        <h2>Регистрация</h2>
        <form>
          <input
              class="reg__inp inp"
              type="text"
              placeholder="Логин"
          >
          <input
              class="reg__inp inp"
              type="password"
              placeholder="Пароль"
          >
          <input
              class="reg__inp inp"
              type="password"
              placeholder="Повтроите пароль"
          >
          <button
              @click.prevent="reg()"
              type="submit"
              class="reg__button button"
          >
            Зарегестрироваться
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

let passwordLog = ref<string>("");
let phoneLog = ref<string>("");

async function auth() {
  if (!(passwordLog.value && phoneLog.value)) {
    console.log("not");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "phone": phoneLog.value,
        "password": passwordLog.value,
      }),
    });

    if (!response.ok){
      throw new Error("Пошёл нахуй быдло")
    }else{
      
    }
    const data = await response.json()
    console.log(data);

  } catch (error) {
    console.log("ошибка")
  }

}

</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.container-auth {
  margin-top: 20px;
  max-width: 700px;
  width: 100%;

  .auth {
    @include myFlex();

    .auth-from {
      background-color: $myLightBlue;
      width: 50%;
      min-height: 400px;
      padding: 30px 20px;
      outline: 2px solid $myDarkBlue;
      @include myFlex();
      flex-direction: column;

      form {
        @include myFlex();
        flex-direction: column;
        width: 100%;
        gap: 20px;

        .inp, button {
          width: 100%;
          padding: 10px 20px;

        }

        button {
          cursor: pointer;
          font-size: 18px;
        }
      }
    }
  }
}
</style>