<template>
  <div
      v-if="isLoading"
      class="container profile-container loading"
  >
    <h2>Загрузка</h2>
  </div>
  <div
      v-else
      class="container profile-container"
  >
    <h2>Ваш пользователь</h2>
    <p>Имя - {{ user?.first_name }}</p>
    <p>Фамилия - {{ user?.last_name }}</p>
    <p>Телефон - {{ user?.phone }}</p>
    <p>Номер документа - {{ user?.document_number }}</p>
  </div>
</template>

<script setup lang="ts">
import IUser from "@/interfaces/IUser";
import {onMounted, ref} from "vue";

let user = ref<IUser | null>();
let isLoading = ref<boolean>(true);

async function getUserInfo() {
  fetch("http://127.0.0.1:8000/api/user/",{
    headers:{
      "Authorization": "Bearer b9149750-6123-4ca9-be8e-c548f28e791a"
    }
  })
      .then(response => response.json())
      .then(data => {
        user.value = data.data;
        isLoading.value = false;
      });
}

onMounted(()=>{
  getUserInfo();
})

</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.profile-container {
  max-width: 500px;
  margin: 50px auto 0;
  @include myFlex($ai:center);
  flex-direction: column;
  gap: 20px;

}

</style>
