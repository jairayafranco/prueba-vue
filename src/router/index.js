import { createRouter, createWebHistory }  from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register/Register.vue'
import Backoffice from '../components/Backoffice.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/backoffice',
        name: 'Backoffice',
        component: Backoffice,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(['/','/register'].includes(to.path) && localStorage.getItem('token')) {
        next('/backoffice')
        return
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !localStorage.getItem('token')) {
        next('/')
        return
    }

    next()
})

export default router