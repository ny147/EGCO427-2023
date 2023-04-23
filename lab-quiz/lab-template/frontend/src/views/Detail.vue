<template>

<div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>  
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="card border-primary mb-3" style="max-width: 100%">
                        <div class="card-header text-white" id="cd_h">Header</div>
                        <div class="card-body ">
                            <form action="index.html" method="post">
                                
                                <div class="row">
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        Drug Name:
                                    </div>                           
                                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                        {{ Drug.name }}
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        Dose:
                                    </div>                           
                                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                        {{ Drug.dose }}
                                    </div>
                                </div>  
                                <br>
                                <div class="row">
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        Package:
                                    </div>                           
                                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                        {{ Drug.package }}
                                    </div>
                                </div>  
                                <br>
                                <div class="row">
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        Unit: 
                                    </div>                           
                                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                        {{ Drug.unit }}
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            Total: 
                                        </div>                           
                                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                            {{ Drug.total }} pill
                                        </div>
                                    </div>
                                    <br>
                                <div class="row">
                                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        Image: 
                                    </div>                           
                                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                        <img :src="`../src/assets/${Drug.imageUrl}`" width="60" alt="">
                                    </div>
                                </div>
                            </form>
                         </div>
                        </div>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            </div>

</template>

<script>
import axios from 'axios';

export default {
        name : "Detail",
        data(){
            return {
                Drug: {
                cid:"",
                name : "",
                dose : "",
                package : "",
                unit : "",
                total:"",
                imageUrl:""
                 }   
            }

        },
        mounted(){
            const url = 'http://localhost:5000/drugs/' + this.$route.params.drugId;
            axios.
            get(url).
            then((response)=>{
                console.log(response.data);
                this.Drug = response.data
            }) .catch((error) => {
                    console.error();
                });
        }
    
};
</script>

<style>

#cd_h{
    background-color: #337ab7;
}
</style>