<template>
  
  <div class="ui container">
      <div class="ui padded segment">
        <div class="ui green padded segment"><a class="ui  big teal ribbon label">Login</a></div>
        <div class="ui medium header">Username<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="username" v-model="User.username" required>
      </div>
      <div class="ui medium header">Password<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="password"  placeholder="password" v-model="User.password" required>
      </div>
      <p></p>
      <button  class="ui primary button"  @click="loginAPI" id="bt-login">
          login
      </button>
      </div>
      
      
  </div>



  </template>

<script>
import axios from 'axios';
import navbar from '../components/navbar.vue'
import {useCookies} from 'vue3-cookies'
export default{
  name : 'login',
  setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
  data () {
    return {
      User : {
        username:'',
        password:''
    }
    }
  },
  methods: {
    loginAPI(){
      
      const url = 'http://127.0.0.1:8081/login'
      axios.post(url,this.User)
      .then((r)=>{

        if(r.data.token){


          axios.defaults.headers.common['Authorization'] = 'Bearer ' + r.data.token;
        
          
        //   localStorage.setItem( 'token', JSON.stringify(r.data.token) );
        // window.dispatchEvent(new CustomEvent('token-localstorage-changed', {
        //     detail: {
        //         storage: localStorage.getItem('token')
        //     }
        // }));
        this.$cookies.set("token",r.data.token,60*3)
        this.$router.replace('/contacts') 
        // window.location.href = '/contacts'
        }else {
          alert(r.data.message)
        }
       
       
      }).catch((error)=>{
      alert(error)
      })

    },
    
  },
  components:{
    navbar
  }
}
</script>

  <style>
   #bt-login{
    margin: auto;
    display:flex;
    justify-content: center;
    align-self: center;
   }
  </style>
  