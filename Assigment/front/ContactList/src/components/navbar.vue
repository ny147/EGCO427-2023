<script >
import {ref} from 'vue'
import {useCookies} from 'vue3-cookies'
import {useRouter} from 'vue-router'
const router = useRouter()
export default{
    
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    data (){
       return{
        isLoggedIn: ''
       }    
    }
    ,
    mounted(){
     
        // window.addEventListener('token-localstorage-changed', (event) => {
        //     // console.log("")
        //             alert(event.detail.storage)
        //             if(event.detail.storage===null){
        //                 this.isLoggedIn = false
                        
        //             }else {
        //                 this.isLoggedIn = true
                       
        //             }
        //     });


        // if(this.$cookies.isKey("token")){
        //     this.isLoggedIn = true;
        // }else {
        //     this.isLoggedIn = false;
        // }
      
    },
  methods: {
    handleSignout(){
        
        // localStorage.removeItem('token');
    
        // window.dispatchEvent(new CustomEvent('token-localstorage-changed', {
        //     detail: {
        //         storage: localStorage.getItem('token')
        //     }
        // }));
        
        this.$cookies.remove("token");
        this.$router.push('/login') 
        // window.location.href = '/login'
    },
    checkstatus(){
        // alert(this.isLoggedIn)
        // this.$cookies.set("token","GH1.1.1689020474.1484362313","60s")
        // let my_cookie_value = this.cookies.get("myCoookie");
        // console.log(my_cookie_value);
    }
  },
  watch :{
    $route(to,from){

        if(this.$cookies.isKey("token")){
            this.isLoggedIn = true;
        }else {
            this.isLoggedIn = false;
        }
    }
  }
}
</script>



<template>
       
       
    
    <!-- <nav class="navbar navbar-expand-sm navbar-dark  fixed-top " style="background-color: black;">
          <div class="container">
            
            <a class="navbar-brand" href="#">
                <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                Portfolio
              </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <Router-link to="/">Home</Router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <Router-link to="/login">Login</Router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <Router-link to="/contacts">Contact</Router-link>
                      </a>
                  </li>
                 
                   
                </ul>
            </div>
      </div>
    </nav> -->

    <div class="ui inverted menu ">
        <a class="ui  Tiny  image">
            <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg">
        </a>
        
        <a class="item">
            <router-link to="/contacts">
                <button class="ui black button">Contact</button>
            </router-link>
        </a>
        
    
        <div class="right menu">
            
            <a class="item"  v-if="!isLoggedIn">
                <router-link to="/login" >
                    
                    <button class="ui black button"><i class="circular users icon"></i></button>
                </router-link>
            </a>
            <a class="item" v-else>
                    <button class="ui red button" @click="handleSignout">sign out</button>
            </a>
          
          
            
            
        </div>
    </div>
        

</template>
  
<style >

</style>
  