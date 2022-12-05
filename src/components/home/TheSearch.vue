<template>

  <div class="search">
    <h2>Найдите свой билет</h2>
    <form class="search__form" name="search__form">
      <div class="search__atr">
        <input
            v-model="from"
            type="search"
            placeholder="Откуда: iata аэропорта"
        >
        <input
            v-model="to"
            type="search"
            placeholder="Куда: iata аэропорта"
        >
        <input
            v-model="from_date"
            type="search"
            placeholder="Откуда: Дата вылета"
        >
        <input
            v-model="back_date"
            type="search"
            placeholder="Обратно: дата вылета"
        >
        <input
            v-model="passengers"
            type="number"
            placeholder="Кол-во пассажиров(1-8)"
        >
      </div>
      <button
          @click.prevent="submit()"
          type="submit"
      >
        Поиск
      </button>
    </form>
    <div
        v-if="flightData !== null"
        class="flights"
    >
      <div
          v-if="fetchIsError"
          class="flights__error"
      >
        <h3>Ошибка, возможно введенны неправильные данные</h3>
      </div>
      <div
          v-else
          class="flight__cards"
      >
        <template v-if="flightData.flight_to.length === 0">
          <h2>Полёты по такому запросу не найденны</h2>
        </template>

        <template
            v-for="(flightsToOrBack, index) in flightData"
            :key="index"
        >
          <FlightItem
              v-for="flights in flightsToOrBack"
              :key="flights.flight_id"
              :flight="flights"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlightItem from "@/components/home/FlightItem.vue";
import IFlights from "@/interfaces/IFlights";
import {ref} from "vue";

let from = ref<string>("");
let to = ref<string>("");
let from_date = ref<string>("");
let back_date = ref<string>("");
let passengers = ref<number>(1);

let flightData = ref<IFlights | null | undefined>(null);
let fetchIsError = ref<boolean>(true);


async function submit() {
  if (!(from.value && to.value && from_date.value && passengers.value || back_date.value)) {
    console.log("not");
    return;
  }

  // try {
    const response = await fetch("http://127.0.0.1:8000/api/flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
          {
            "from": from.value,
            "to": to.value,
            "date1": from_date.value,
            "date2": back_date?.value,
            "passengers": passengers.value,
          },
      ),
    })

    if (!response.ok) {
      fetchIsError.value = true;
      flightData.value = undefined;
    } else{
      response.json()
          .then(data => {
            console.log(data.data)
            flightData.value = data.data;
            fetchIsError.value = false;
          })
    }

  // } catch (error) {
  //   console.log(error);
  //   fetchIsError.value = true;
  // }
}

</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.search {
  margin-top: 50px;
  @include myFlex($ai: start);
  flex-direction: column;

  h2 {
    margin-bottom: 30px;
  }

  .search__form {
    width: 100%;
    height: 35px;
    display: grid;
    grid-template-columns: 0.9fr 0.1fr;

    .search__atr {
      display: grid;
      grid-template-columns: repeat(5, 1fr);

      input {
        padding: 5px 10px;
        font-size: 15px;
        border: none;
        outline: 2px solid $myLightBlue;
        color: $myDarkBlue;
      }
    }

    button {
      background-color: $myDarkBlue;
      color: $myLightBlue;
      font-size: 20px;
      border: none;
      outline: 2px solid $myLightBlue;
      cursor: pointer;
    }
  }
}

.flights {
  margin: 50px auto;

  .flight__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 85px;
  }

  .flights__error {
    margin-top: 30px;
  }
}
</style>