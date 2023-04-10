import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import AddUser from '../views/Adduser.vue'
import UpdateUser from '../views/Updateuser.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/users'
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/adduser',
      name: 'Adduser',
      component: AddUser
    }, 
    {
      path: '/updateuser/:userId',
      name: 'Updateuser',
      component: UpdateUser
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path : '/:catchAll(.*)',
      redirect: '/users'
    }
    
  ]
})

export default router
