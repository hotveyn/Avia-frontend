import { createApp } from 'vue'
import router from "@/routes/router";
import {createPinia} from "pinia";
import {createRouter} from "vue-router";
import './assets/css/style.css'
import App from './App.vue'

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app')
