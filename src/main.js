import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router.js'

const app = createApp(App)
app.use(router)
app.use(ElementPlus);
app.config.errorHandler = (err)=>{
    console.log('捕获到错误了')
}
app.mount('#app')
