<template>
    <div >
      <h1>Sign up page</h1>
      <input type="text" placeholder="email" v-model="User.email"><br>
      <input type="password" placeholder="password" v-model="User.password"><br>
      <button @click="signupUser">signup</button>

    </div>
</template>

<script>
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
    export default{
        name:'SignUp',
        data (){
            return {
                User:{
                    email: '',
                    password : ''
                }
            }
        },
        methods:{
            signupUser() {
                const auth = getAuth()
                createUserWithEmailAndPassword(
                    auth,
                    this.User.email,
                    this.User.password
                ).then((userCredential)=>{
                     console.log('successfully register')
                     this.$router.replace('/movies')
                }).catch((error)=>{
                    console.log(error.code + ' : ' + error.message)
                    alert('something wrong')
                })
            }
        }
    }
</script>

<style>
  
</style>
  