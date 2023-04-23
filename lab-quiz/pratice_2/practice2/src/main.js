import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/main.css'
import {initializeApp} from 'firebase/app'
const app = createApp(App)
const firebaseConfig = {
    apiKey: "AIzaSyA7lomo4oxYA4i-H0JclTqiLVduULQQ8HM",
    authDomain: "smart-home-umbi.firebaseapp.com",
    projectId: "smart-home-umbi",
    storageBucket: "smart-home-umbi.appspot.com",
    messagingSenderId: "479531386667",
    appId: "1:479531386667:web:40ff95c4bc7b66138fe76e"
  };

initializeApp(firebaseConfig)
app.use(router)

app.mount('#app')
