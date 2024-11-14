import { createWebHistory, createRouter } from 'vue-router'

import Index from '@/views/Index.vue'
import Sings from '@/views/Sings.vue'
import SongList from '@/views/SongList.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserIndex from '@/views/UserIndex.vue'
import UserEdit from '@/views/UserEdit.vue'
import Detail from '@/views/Detail.vue'
import SingerDetail from '@/views/SingerDetail.vue'
import SingDetail from '@/views/SingDetail.vue'
import SearchDetail from '@/views/SearchDetail.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/sings', component: Sings },
    { path: '/songlist', component: SongList },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/userIndex', component: UserIndex },
    { path: '/userEdit', component: UserEdit },
    { path: '/detail', component: Detail },
    { path: '/singerDetail', component: SingerDetail },
    { path: '/singDetail', component: SingDetail },
    { path: '/SearchDetail', component: SearchDetail }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router