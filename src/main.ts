import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
import App from "./App.vue"
import router from './router'


const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
