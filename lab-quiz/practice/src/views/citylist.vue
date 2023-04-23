<template>
  <div class="citylist">
    <h4>{{ msg }}</h4>
    <br />
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />

      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">List of Cities</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-6 col-md-4" v-for="city in cities">
                <div class="thumbnail">
                  <img
                    :src="'/src/assets/' + city.image"
                    width="50%"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="caption">
                    <p>
                      <b>{{ city.name }}</b>
                    </p>
                    <p class="citydetail">{{ city.detail }}</p>
                    <button
                      class="btn btn-success"
                      role="button"
                      @click="detail(city.name)"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
    <div class="row">
      <div class="container">
        <button class="btn btn-default">
          <span class="glyphicon glyphicon-log-out"></span> Logout
        </button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import {
  collection,
  onSnapshot,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
export default {
  name: "CityList",
  data() {
    return {
      msg: "EGCI427 Practice",
      city: null,
      cities: {},
      editName: [],
    };
  },
  created() {
    console.log("City List");
  },
  mounted() {

    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.isLogged=true
      }
      else{
        this.isLogged=false
      }
    })
    
    const db = getFirestore();
    const colRef = collection(db, "cities");
    onSnapshot(colRef, (snapshot) => {
      this.cities = snapshot.docs.map((doc) => doc.data());
      console.log(this.cities);
    });
  },
  methods: {
    logout() {
      console.log("logout");
      signOut(this.auth)
        .then(() => {
          this.$router.replace("/signIn");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    detail(cityname) {
      //   console.log(id);
      this.$router.push({ name: "detail", params: { city: cityname } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

