<template lang="">
    <div class ="container" v-for="(aweather) in Weather.list">
        <div class="card">
            <div class="card-header">
                {{aweather.name}}
            </div>
        
                <div class="card-body">
                <div class="row">
                        <div class="col-sm">
                        Location : <span>({{aweather.coord.lat}},{{aweather.coord.lon}})</span>
                        </div>
                        <div class="col-sm">
                        Temperature: <span>{{aweather.main.temp}}</span>
                        </div>
                </div>
                <div class="row">
                        <div class="col-sm">
                        Pressure : <span>{{aweather.main.pressure}}</span>
                        </div>
                        <div class="col-sm">
                        Humidity : <span>{{aweather.main.humidity}}</span>
                        </div>
                </div>
                <div class="row">
                        <div class="col-sm">
                        Main Weather: <span>{{aweather.weather[0].main}}</span>
                        </div>
                        <div class="col-sm">
                        Description : <span>{{aweather.weather[0].description}}</span>
                        </div>
                </div>
                
              <img :src="`http://openweathermap.org/img/w/${aweather.weather[0].icon}.png`" alt=""  width="64" height="64">
            

            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Detail",
    data(){
        return {
            Weather: {},
            city : this.$route.params.cityname
        }
    },
    mounted() {
    const apikey = '00a9a261c42ffb94f3a433265a31648c';
    var url = 'http://api.openweathermap.org/data/2.5/find?q=' + this.city +
'&type=accurate&appid=' + apikey + '&units=metric'
    axios.get(url)
      .then((response)=>{
          this.Weather = response.data
          console.log(this.Weather)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
}

</script>
<style lang="">
    
</style>