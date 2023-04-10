<template>
    <!-- <div class="about">
      <h1>Add user</h1>
      <input type="number" placeholder="contactID"  v-model="User.cid"/><br>
      <input type="text" placeholder="firstName"  v-model="User.firstname"/><br>
      <input type="text" placeholder="lastName"  v-model="User.lastname"/><br>
      <input type="email" placeholder="email"  v-model="User.email"/><br>
      <input type="text" placeholder="mobile"  v-model="User.mobile"/><br>
      <input type="text" placeholder="facebook"  v-model="User.facebook"/><br>
      <input type="text" placeholder="imageUrl"  v-model="User.imageUrl"/><br>
      <button @click="addContact">Add New User</button>
      <router-link to="/contacts">
        <button>Back to User page</button>
      </router-link>
    </div> -->
    <h1 class="ui center aligned header">Add Contact</h1>
  <div class = "ui container">
    <div class="ui medium header">Cid<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="number" placeholder="cid" v-model="User.cid">
      </div>
    
    <div class="ui medium header">Firstname <span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="Firstname" v-model="User.firstname">
      </div>
   
    <div class="ui medium header">Lastname<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="Firstname" v-model="User.lastname">
      </div>
  
    <div class="ui medium header">Mobile No.<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="mobile" v-model="User.mobile">
      </div>
   
    <div class="ui medium header">Facebook</div>
   
      <div class="ui fluid icon input">
        <input type="text" placeholder="facebook" v-model="User.facebook">
      </div>
  
    <div class="ui medium header">Imageurl</div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="imageUrl" v-model="User.imageUrl">
      </div>

        <div id="btn-group">
          <button class="ui primary button"  @click="addContact">
          Save
        </button>
        <router-link to= "/contacts">
          <button class="ui button">Discard</button>
        </router-link>
        
        </div>
       </div>
  </template>
  

  <script>
import axios from 'axios';

  export default{
    name:'AddContact',
    data(){
      return{
        User: {
          cid:'',
          firstname:'',
          lastname:'',
          mobile:'',
          email:'',
          facebook:'',
          imageUrl:''

        }
      }
      
    },
    methods: {
        addContact(){
          const url = 'http://127.0.0.1:8081/contacts/'
          axios.post(url,this.User).then((Response)=>{
            alert("Add new User success!")
            this.$router.push('/contacts')
          }).catch((error) => {
            console.log(error)
          })
        }
      },


  }
  </script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  