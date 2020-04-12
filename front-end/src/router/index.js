import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Operators from '../views/Operators.vue'
import OperatorBio from '../views/OperatorBio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/operators/',
    name: 'Operators',
    component: Operators
  },
  {
  path: '/operators/:id',
  name: 'OperatorBio',
  component: OperatorBio,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
