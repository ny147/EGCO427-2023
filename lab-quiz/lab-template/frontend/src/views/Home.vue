<template>


<div v-if="!validate" class="container-md  py-3 px-3 bg-danger">
    <p class="text-center text-white">can not connect to server pls try again or check your network</p>
</div>

<div class="container-fluid">
    
    <div class="p-3 mb-2 bg-light text-dark">List of drug </div>
    <div class="card  mb-3" style="max-width: 100%">
            <div class="card-header">Panel heading</div>

            <div class="card-body">
                <!-- <h5 class="card-title">Panel heading</h5> -->
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Drug Name</th>
                            <th>Dose</th>
                            <th>Package</th>
                            <th>Unit</th>
                            <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="adrug in Drugs" v-bind:key="adrug.id">
                            <th scope="row">1</th>
                            <td><img :src="`./src/assets/${adrug.imageUrl}`" width="64"></td>
                            <td>{{ adrug.name }}</td>
                            <td>{{ adrug.dose }}</td>
                            <td>{{ adrug.package }}</td>
                            <td>{{ adrug.unit }}</td>
                            <td>
                               
                                    <router-link
                                    :to="{
                                        path: 'Detail',
                                        name: 'Detail',
                                        params: { drugId: adrug._id },
                                    }">  
                                    <a class="btn btn-info btn-sm">
                                        Detail
                                    </a> 
                                    </router-link>
                                    
                               
                                
                            </td>
                        </tr>
                        
                      
                    </tbody>
                </table>
           </div>
        </div>

    </div>
       
 
</template>

<script>
import axios from "axios";
import errormsg from '../components/errormsg.vue'
export default {
name:"Home",
data(){
    return {
        Drugs:[],
        validate:false
    }
},
 mounted(){
    const url = 'http://localhost:5000/drugs/';
    axios.get(url).then((response)=>{
        console.log(response.data)
        this.Drugs = response.data
        this.validate = true
        
    })
    
 }
    
};
</script>

<style>
</style>