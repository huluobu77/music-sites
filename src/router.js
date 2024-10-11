import { createWebHistory, createRouter } from 'vue-router'

import Index from '@/views/Index.vue'
import Sings from '@/views/Sings.vue'
import SongList from '@/views/SongList.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/sings', component: Sings },
    { path: '/songlist', component: SongList },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router