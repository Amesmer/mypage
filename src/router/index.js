import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home }
    ]
})

export default router
