import { createRouter, createWebHistory } from 'vue-router'
import {onAuthStateChanged,getAuth} from 'firebase/auth'

import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta : {
        requiresAuth:true
      }
    },
    {
      path: '/detail/:cityname',
      name: 'detail',
      component : Detail,
      meta : {
        requiresAuth:true
      }
      
    },
    {
      path :'/signin',
      name : 'signin',
      component: Signin
    },
    {
      path :'/signup',
      name : 'signup',
      component: Signup
    }
    ,{ path: "/:pathMatch(.*)*", redirect: "/" },
  ]
})


const getCurrentUser = () =>{
  return new Promise((resolve, reject)=> {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    if(await getCurrentUser()){
      console.log("You are authorized to access this area.");
      next()
    } else {
      console.log("You are not authorized to access this area.")
      next('signin')
    }
  } else {
    next()
  }
})
export default router
