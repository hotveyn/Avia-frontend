import {computed} from "vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue"
import AuthPage from "@/pages/AuthPage.vue"
import ProfilePage from "@/pages/ProfilePage.vue"


function isAuth (){

}


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path:"/profile",
        name:"profile",
        component: ProfilePage,
        beforeEnter:(to, from)=>{

        }
    },
    {
        path:"/auth",
        name:"auth",
        component: AuthPage
    }

]

export default createRouter({
    history:createWebHistory(),
    routes
});