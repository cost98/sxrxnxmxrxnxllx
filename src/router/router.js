// router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'
import AboutPage from '@/components/About.vue'
import ServicesPage from '@/components/Services.vue'
import ContactPage from '@/components/Contact.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/#about', component: AboutPage },
    { path: '/#services', component: ServicesPage },
    { path: '/#contact', component: ContactPage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
