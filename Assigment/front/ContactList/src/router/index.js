import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../views/AddContact.vue'
import Login from '../views/Login.vue'
import EditContact from '../views/EditContact.vue'
import Contacts from '../views/Contacts.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta:{
        requiresAuth : true,
      },
    },
    {
      path: '/editcontact/:contactId',
      name: 'editcontact',
      component: EditContact
    },
    {
      path: '/addcontact',
      name: 'addcontact',
      component: AddContact
    },
    
    {
      path : '/:catchAll(.*)',
      redirect: '/login'
    }
  ]
})


router.beforeEach(
  async (to,from,next)=>{
    
       if(to.matched.some((record) => record.meta.requiresAuth)){
      
          // if( localStorage.hasOwnProperty('token') )
          if(cookies.isKey('token'))
          {
            
           next()
          }else {
               alert("you don't have access!")
               next("/login")
          }
       }else {
           next();
       }
   
   }
   )
export default router

