import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import icons from "v-svg-icons";

const app = createApp(App)
app.use(router)
app.component("IconComponent", icons)
app.mount('#app')