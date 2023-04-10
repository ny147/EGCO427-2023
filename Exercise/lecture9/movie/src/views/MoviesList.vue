<template>
    <div class="movielist">
        <button @click="signoutUser">Sign out</button>
      <h1>Movie List</h1>
      <input type="text" placehodler="moviename" v-model="movie" @keyup.enter="addMovie">
      <button @click="addMovie" @keyup.enter="addMovie">Add Movie</button>
      <ul>
        <li v-for="(amovie,key) in movies"  :key="movieIds">
            <div><p>
                {{ amovie.name}}
                </p>
            </div>
            <div>
                <input type="text" v-model="editmovie[key]"  @keyup.enter="updateMovie(key)" id ="">
            </div>
            <div>
                <button @click="deleteMovie(key)">delete</button>
            </div>
        </li>
        
      </ul>
    </div>
  </template>
  
  
<script>
import {collection,onSnapshot,doc,getFirestore,setDoc,updateDoc, deleteDoc, terminate ,} from 'firebase/firestore'
import {getAuth,signOut,onAuthStateChanged} from 'firebase/auth'
  export default{
    name : 'MovieList',
    data() {
        return {
            movies : {},
            movieIds :{},
            movie: null,
            editmovie:[],
            auth: getAuth(),
            isLoggedIn : false
        }
    },
    mounted(){
        onAuthStateChanged(this.auth, (user)=>{
            if(user) {
                this.LoggedIn = true
            }else {
                this.isLoggedIn = false
            }
        })
        const db = getFirestore()
        const colRef = collection(db,"movies")
        onSnapshot(colRef,(snapshot) => {
            this.movies = snapshot.docs.map(doc => doc.data())
            this.movieIds = snapshot.docs.map(doc => doc.id)
            console.log(this.movies)
            console.log(this.movieIds)
        })
    },
    methods :{
        async addMovie(){
            const db = getFirestore()
            const docRef = doc(collection(db,"movies"))
            const dataObj = {name : this.movie}
            const  insertRef = await setDoc(docRef,dataObj)
         },
         async updateMovie(key){
            const db = getFirestore()
            const docRef = doc(db,"movies/"+this.movieIds[key])
            const dataObj = {name : this.editmovie[key]}
            const  updateRef = await updateDoc(docRef,dataObj)
         },
         async deleteMovie(key){
            const db = getFirestore()
            const docRef = doc(db,"movies/"+this.movieIds[key])
            const deleteRef = await deleteDoc(docRef)
         },
         signoutUser(){
            signOut(this.auth).then(() => {
            this.$router.replace('/signin')
         }).catch((error)=> {
            alert(error.message)
         })
         }
    }
  }
</script>
  <style>

  </style>
  