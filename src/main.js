import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.config.errorHandler = (err)=>{
    console.log('捕获到子组件的错误了')
}
// app.component('TodoDeleteButton', TodoDeleteButton)  全局组件
app.mount('#app')
