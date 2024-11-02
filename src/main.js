import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import icons from "v-svg-icons";
import VerticalTimeline from "vue-vertical-timeline";


const app = createApp(App)
app.use(router)
app.use(VerticalTimeline);
app.component("IconComponent", icons)
app.mount('#app')