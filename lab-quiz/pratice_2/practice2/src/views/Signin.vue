<template lang="">
      <div class= "container">
        <div class="row">
      <h2 class = "text-center">Signin</h2>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

          <input type="email" class="form-control" placeholder="email" v-model="user.email">
          <br>
          <input type="password" class="form-control" placeholder="password" v-model="user.password">
          <br>
          <div class="row justify-content-between">
            <div class="col-4">
                <button class="btn btn-success btn-block full-width" @click="signIn">Signin</button>
            </div>
            <div class="col-6">
                <span>Don't have account ? </span>
                <router-link to="/signup">
                   <button class="btn btn-primary btn-block full-width" >Signup</button>
                </router-link>
                
            </div>
        </div>
       
      </div>    
    </div>
    

  </div>
</template>
<script>
import {getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
export default {
    name:"signin",
    data (){
        return {
            user :{
                email :'',
                password : ''
            }
        }
    },
    methods: {
        signIn(){
            const auth = getAuth()
            signInWithEmailAndPassword(
                auth,
                this.user.email,
                this.user.password
            ).then((userCredential) =>{
                console.log('Successfully sign in')
                console.log(auth.currentUser)
                this.$router.replace('/')
            })
            .catch((error)=>{
                console.log(error.code+': '+error.message)
                alert(error.code+'\n'+error.message)
            })
        },signInGoogle(){
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth,provider)
                .then((result)=>{
                    const credential = GoogleAuthProvider.credentialFromResult(result)
                    const token = credential.accessToken
                    console.log("Token: "+ token)
                    const user = result.user
                    console.log("User: "+ user)
                    this.$router.replace("/cities")
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    const email = error.customData.email
                    const credential = GoogleAuthProvider.credentialFromError(error)
                })
        }
        
    }
}
</script>
<style lang="">
    
</style>