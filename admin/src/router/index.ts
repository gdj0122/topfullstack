import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {name: 'home',path:'/',component:Home}
    ]
  },
  // {
  //   path: '/main',
    
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
