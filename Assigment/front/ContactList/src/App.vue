<script setup>
import {ref, onMounted,onUpdated } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import {useCookies} from 'vue3-cookies'
const { cookies } = useCookies();


</script>

<template>
      
  
    
 
    
      <navbar/>
      <router-view/>

       


</template>

<style scoped>
  

</style>
