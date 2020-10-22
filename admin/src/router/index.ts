import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CourseList from '../views/courses/CourseList.vue'
import CourseEdit from '../views/courses/CourseEdit.vue'

Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {name: 'home',path:'/',component:Home},
      {name: 'course-list',path:'/course/list',component:CourseList},
      {name: 'course-edit',path:'/course/edit/:id',component:CourseEdit,props:true},
      {name: 'course-create',path:'/course/create',component:CourseEdit},
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
