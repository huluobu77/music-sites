import { createWebHistory, createRouter } from 'vue-router'

import Index from '@/views/Index.vue'
import Sings from '@/views/Sings.vue'
import SongList from '@/views/SongList.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserIndex from '@/views/UserIndex.vue'
import USerEdit from '@/views/USerEdit.vue'
import Detail from '@/views/Detail.vue'
import SingerDetail from '@/views/SingerDetail.vue'
import SingDetail from '@/views/SingDetail.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/sings', component: Sings },
    { path: '/songlist', component: SongList },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/userIndex', component: UserIndex },
    { path: '/userEdit', component: USerEdit },
    { path: '/detail', component: Detail },
    { path: '/singerDetail', component: SingerDetail },
    { path: '/singDetail', component: SingDetail }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router