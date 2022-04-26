import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: () => import( '../views/SearchView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
