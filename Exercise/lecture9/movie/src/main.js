import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const firebaseConfig = {
    apiKey: "AIzaSyCV-bxxxpaMhwWius5VH4hF1lmvdeQckY8",
    authDomain: "fir-vue-382606.firebaseapp.com",
    projectId: "firebase-vue-382606",
    storageBucket: "firebase-vue-382606.appspot.com",
    messagingSenderId: "1084497436512",
    appId: "1:1084497436512:web:e28db0d85409ad0762c805"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')


// app.createApp(App).use(router).mount('#app')