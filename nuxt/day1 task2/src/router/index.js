import {createRouter , createWebHistory} from 'vue-router'
import Compositions from '../components/Compositions.vue'
import Options from '../components/Options.vue'

const routes = [
    {path:'/' , component : Options , name : "Options page"},
    {path:'/composition' , component : Compositions , name : "Composition page"},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,form,next) => {
    document.title = to.name
    next()
})

export default router