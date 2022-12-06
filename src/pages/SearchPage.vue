<template>
  <div class="container search-container">
    <div class="search">
      <form>
        <input
            v-model="query"
            type="search"
            class="search__input"
            placeholder="Поиск"
        >
        <button
            @click.prevent="goSearch"
            type="submit"
            class="search__button"
        >
          Поиск
        </button>
      </form>

      <div class="airports">
        <template v-if="airports">
          <div
              v-if="isFetchError"
              class="error"
          >
           <p>Ошибка</p>
          </div>
          <template v-if="airports.length">
            <AirportItem
                v-for="airport in airports"
                :airport="airport"
            />
          </template>
          <template v-else>
            Ничего не найдено
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import AirportItem from "@/components/search/AirportItem.vue";
import IAirport from "@/interfaces/IAirport";
import {ref} from "vue";

let query = ref<string>("");
let airports = ref<IAirport[]>();
let isFetchError = ref<boolean>(true);


async function goSearch() {
  if (query.value) {
    let response = await fetch("http://127.0.0.1:8000/api/airport?"
        + new URLSearchParams({"query": query.value}));

    let data = await response.json();
    if (!response.ok) {
      isFetchError.value = true;
      airports.value = data.errors;
      return console.log(data.errors);
    }

    isFetchError.value = false;
    airports.value = data.data.items;

  } else {
    console.log("not");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.search-container {
  margin: 50px auto 0;
  max-width: 700px;
  width: 100%;

  .search {
    @include myFlex($jc: center);
    flex-direction: column;
    gap: 50px;

    form {
      width: 100%;

      * {
        padding: 10px 20px;
        font-size: 18px;
        border: none;
        outline: 2px solid $myDarkBlue;
      }

      .search__input {
        width: 80%;
      }

      button {
        width: 20%;
        cursor: pointer;
        background-color: white;
      }
    }


  }
}
</style>