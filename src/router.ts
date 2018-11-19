import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout.vue'

Vue.use(Router);

export const constantRouterMap = [
    {
        path: '/404',
        component: () => import('@/views/404.vue'),
        hidden: true
    },
    {
        path: '/',
        redirect: 'home',
        component: Layout,
        hidden: true,
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: { title: 'home', icon: 'home' }
            }
        ]
    },
    {
        path: '*', redirect: '/404', hidden: true
    }
]

export default new Router({
    routes: constantRouterMap
})
