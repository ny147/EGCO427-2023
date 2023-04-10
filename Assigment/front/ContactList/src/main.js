import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";
import axios from 'axios'
import VueCookies from 'vue3-cookies'



// let token = JSON.parse( localStorage.getItem('token') );
// if( token ){
//      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// }








const app = createApp(App)

app.use(VueCookies);
app.use(router)
app.use(FomanticUI)
app.mount('#app')

