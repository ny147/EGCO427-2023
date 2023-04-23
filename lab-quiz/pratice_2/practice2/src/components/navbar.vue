<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src="../assets/planelogo.png" width="30" height="30" alt=""></a>
            <div class="navbar-collapse" id="navbarID">
                <div class="navbar-nav">
                
                <router-link to="/">
                    <!-- <a id="home" >Home</a> -->
                    Home
                </router-link>
                    
                </div>
            </div>
        </div>
    </nav>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style>
    a{
      text-decoration: none;
      color: black;
    }
    nav{
      margin-bottom: 1rem;
    }
  </style>