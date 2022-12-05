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
              v-model.trim="firstNameReg"
              class="reg__inp inp"
              type="text"
              placeholder="Имя"
          >
          <input
              v-model.trim="lastNameReg"
              class="reg__inp inp"
              type="text"
              placeholder="Фамилия"
          >
          <input
              v-model.trim="phoneReg"
              class="reg__inp inp"
              type="text"
              placeholder="Телефон"
          >
          <input
              v-model.trim="passwordReg"
              class="reg__inp inp"
              type="password"
              placeholder="Пароль"
          >
          <input
              v-model.trim="passwordRepeatReg"
              class="reg__inp inp"
              type="password"
              placeholder="Повторите пароль"
          >
          <input
              v-model.trim="documentNumberReg"
              class="reg__inp inp"
              type="number"
              placeholder="Номер документа"
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

import Router from "@/routes/router";
import {ref} from "vue";
import {useRouter} from "vue-router";

const route = useRouter();

let passwordLog = ref<string>("");
let phoneLog = ref<string>("");

let phoneReg = ref<number>(79646660328);
let passwordReg = ref<string>("password");
let passwordRepeatReg = ref<string>("password");
let firstNameReg = ref<string>("Ivan");
let lastNameReg = ref<string>("Shestopalov");
let documentNumberReg = ref<number>(2231234);

async function auth() {
  if (!(passwordLog.value && phoneLog.value)) {
    console.log("not");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "phone": phoneLog.value,
        "password": passwordLog.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Пошёл нахуй быдло");
    } else {
      const data = await response.json();
      localStorage.setItem("token", data.data.token);
      await route.push({name: "home"});
    }

  } catch (error) {
    console.log("ошибка");
  }

}

async function reg() {
  if (phoneReg.value &&
      passwordReg.value &&
      passwordRepeatReg.value &&
      firstNameReg.value &&
      lastNameReg.value &&
      documentNumberReg.value &&
      (passwordReg.value === passwordRepeatReg.value)) {

    let formData = {
      "document_number": documentNumberReg.value,
      "first_name": firstNameReg.value,
      "last_name": lastNameReg.value,
      "password": passwordReg.value,
      "phone": phoneReg.value,
    };

    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let data = await response.json();
      console.log(data.error);
    }
  } else {
    console.log("заполните все поля");
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
      min-height: 520px;
      height: 100%;
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
