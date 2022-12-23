import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [{
      path: '/index',
      component: () => import('../views/Index.vue')
    }, {
      path: '/game',
      component: () => import('../views/Game.vue')
    }, {
      path: '/promote',
      component: () => import('../views/Promote.vue')
    }],
    redirect: '/index'
  },
  {
    path: '/privacy',
    name: 'Privacyain',
    component: () => import('../views/Privacy.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router