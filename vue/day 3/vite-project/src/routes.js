import { createRouter , createWebHistory } from "vue-router";
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import UserProfile from "./components/UserProfile.vue"

const routes = [
    {path : "/" , component : Home} ,
    {path : "/about" , component : About} ,
    {path : "/user/:id" , component : UserProfile , props:true},
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router