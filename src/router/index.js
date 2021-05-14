import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Symbol from '../views/symbol/Symbol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/symbol',
  //   name: 'Symbols',
  //   component: Symbols
  // },
  {
    path: '/symbol/:symbol_name',
    name: 'Symbol',
    component: Symbol
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
