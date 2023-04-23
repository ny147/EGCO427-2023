<template lang="">
   <div class = "container">
    <div class="row">
    <h2 class = "text-center">Signup</h2>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

        <input type="email" class="form-control" placeholder="email" v-model="user.email">
        <br>
        <input type="password" class="form-control" placeholder="password" v-model="user.password">
        <br>
     
        <div class="row justify-content-between">
            <div class="col-4">
                <button class="btn btn-success btn-block full-width" @click="signUp">SignUp</button>
            </div>
            <div class="col-6">
                <span>Already have account ? </span>
                <router-link to="/signin">
                   <button class="btn btn-primary btn-block full-width" >Signin</button>
                </router-link>
                
            </div>
        </div>
    </div>

</div>
   </div>
</template>
<script>
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
export default {
    name:"signup",
    data (){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        signUp(){
                const auth = getAuth()
                createUserWithEmailAndPassword(
                    auth,
                    this.user.email,
                    this.user.password
                ).then((userCredential)=>{
                    console.log('successfully register')
                    this.$router.replace('/')
                }).catch((error)=>{
                console.log(error.code+': '+error.message)
                alert(error.code+'\n'+error.message)
            })
                
        }
    }
}
</script>
<style lang="">
    
</style>