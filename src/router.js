import { createWebHashHistory, createRouter } from 'vue-router'

import Index from '@/views/Index.vue'
import Sings from '@/views/Sings.vue'
import SongList from '@/views/SongList.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/sings', component: Sings },
    { path: '/songlist', component: SongList }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router