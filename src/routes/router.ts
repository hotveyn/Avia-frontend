import {computed} from "vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import SearchPage from "@/pages/SearchPage.vue"
import HomePage from "@/pages/HomePage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";



const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("token")) next();
            else next("/auth");
        },
    },
    {
        path: "/auth",
        name: "auth",
        component: AuthPage,
    },
    {
        path: "/search",
        name: "search",
        component: SearchPage
    }

];

export default createRouter({
    history: createWebHistory(),
    routes,
});
