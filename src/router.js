import { createWebHistory, createRouter } from 'vue-router'

import Index from '@/views/Index.vue'
import Singers from '@/views/singer/Singers.vue'
import SingerDetail from '@/views/singer/SingerDetail.vue'
import SongSheet from '@/views/song-sheet/SongSheet.vue'
import SongDetail from '@/views/song-sheet/SongDetail.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserIndex from '@/views/UserIndex.vue'
import UserEdit from '@/views/UserEdit.vue'
import Lyric from '@/views/Lyric.vue'
import Search from '@/views/search/Search.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/singers', component: Singers },
    { path: '/songlist', component: SongSheet },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/userIndex', component: UserIndex },
    { path: '/userEdit', component: UserEdit },
    { path: '/lyric/:id', component: Lyric },
    { path: '/singer-detail/:id', component: SingerDetail },
    { path: '/song-detail/:id', component: SongDetail },
    { path: '/search', component: Search }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router