<template>
    <div >
      <h1>Sign in page</h1>
      <input type="text" placeholder="email" v-model="User.email"><br>
      <input type="password" placeholder="password" v-model="User.password"><br>
      <button @click="signipUser">signin</button>

    </div>
</template>

<script >
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
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
            signipUser() {
                const auth = getAuth()
                signInWithEmailAndPassword(
                    auth,
                    this.User.email,
                    this.User.password
                ).then((userCredential)=>{
                     console.log('successfully signIn')
                     console.log(auth.currentUser)
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
  