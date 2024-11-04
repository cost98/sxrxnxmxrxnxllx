// router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'

const routes = [
    { path: '/', component: HomePage },
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
