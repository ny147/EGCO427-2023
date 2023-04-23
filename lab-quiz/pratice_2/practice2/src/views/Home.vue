<template>
  <div class = "container">
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <!-- <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a> -->
    <div class="card-group">
  <div class="card" v-for="(acity,index) in cities" v-bind:key="acity.name">
    <img class="card-img-top" :src="`../src/assets/${acity.images}`" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ acity.name }}</h5>
      <p class="card-text">{{ acity.detail }}</p>
    </div>
    <div  id="button-detail " class = "mx-auto">
      <router-link
          :to="{
            path: 'detail',
            name: 'detail',
            params: { cityname: acity.name },
          }"
        >
        <button type="button" class="btn btn-success" id="btn-dt">detail</button>
        </router-link>
      
    </div>
    
  </div>
  
    
   
</div>
  </div>
</div>
  </div>
  <div class="container" id="lg-btn">
      <button class="btn btn-primary"  @click="logout"><span class="glyphicon glyphicon-log-out"></span> Logout</button>
    </div>
</template>
<script>
import {collection,onSnapshot,
doc,
getFirestore,
setDoc,
updateDoc,
deleteDoc} from "firebase/firestore"
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"
export default {
  name:"Home",
  data(){
    return {
      city : null,
      cities : {},
      auth : getAuth(),
      isLoggedIn: false
    }
  },

  mounted() {
    const db = getFirestore();
    const colRef = collection(db,'practice')
    onSnapshot(colRef,(snapshot)=>{
      this.cities = snapshot.docs.map((doc) => doc.data())
      console.log(this.cities )
    })
  },
  methods: {
    logout () {
      console.log('logout')
  
      signOut(this.auth) 
            .then (()=>{
                this.$router.replace('/signin')
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
  }
}
</script>
<style>
  #button-detail{
    text-align:center
  }
  #btn-dt{
    margin: 1rem;
  }
  #lg-btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
</style>