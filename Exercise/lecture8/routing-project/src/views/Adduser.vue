<template>
    <div class="about">
      <h1> add New user page</h1>
      <input type="text" placeholder="firstName"  v-model="User.firstName"/><br>
      <input type="text" placeholder="lastName"  v-model="User.lastName"/><br>
      <input type="text" placeholder="email"  v-model="User.email"/><br>
      <button @click="addToAPI">Add New User</button>
      <router-link to="/">
        <button>Back to User page</button>
      </router-link>
    </div>
  </template>
  <script>
  import axios from 'axios';
    export default{
        name : 'Adduser',
        data(){
            return {
                User: {
                    firstName: '',
                    lastName : '',
                    email : ''
                }
            }
        },
        methods:{
            addToAPI(){
                const url = "http://127.0.0.1:5001/users"
                axios.post(url,this.User).then((Response)=>{
                    console.log(Response)
                    alert("Add new User success!")
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
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
  