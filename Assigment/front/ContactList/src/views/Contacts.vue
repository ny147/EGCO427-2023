<script>
import axios from 'axios'
import {useCookies} from 'vue3-cookies'
export default{
  name: 'Users',
  setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
  data() {
        return {
            Users: [],
            search: '',
            uid: ''
        }
    },
    mounted() {
  
      var url = 'http://127.0.0.1:8081/contacts/'
        
      axios.get(url)
      .then((response) => {
        console.log(response.data)
        this.Users = response.data
      })
    }
    ,computed : {
      filterUsers: function(){
            return this.Users.filter((user) => {
                return user.firstname.match(this.search) || user.lastname.match(this.search)
            })
        }
    },
    methods:{
      DeleteUser(contactId){
        if(confirm("are you sure to delete "))
        {
                var url =  'http://127.0.0.1:8081/contacts/'+contactId
                axios.delete(url)
                .then(()=> {
                    console.log('Delete user id: '+contactId)
                } )
                .catch((error)=>{
                    console.error()
                })
                window.location.reload()

            }
      }
    }

}
</script>
<template>

  
      <div class = "ui container">
        <div class = "ui padded segment">
          <div class="ui fluid action input">
                  <a class="ui teal ribbon label">Overview</a><input type="text" placeholder="Search..." v-model="search">
                  <div class="ui button">Search</div>
                  <router-link to="/addcontact" >
                    <div class="ui orange button"><i class="plus icon"></i>Add</div>
                  </router-link>
                </div>
                <div class = "ui padded segment">


          <div class="ui grid container">
                        <div v-for =" auser in filterUsers" v-bind:key="auser.id"   >
            
                          <div class="ui card">
                          <div class="image">
                            <img v-bind:src="auser.imageUrl" class="ui centered small image">
                          </div>
                          <div class="content text-center" id="body-text" >
                            <!-- <a class="ui header" id="h-de">{{auser.firstname}} {{auser.lastname}}</a> -->
                            <h3 className="ui header">{{auser.firstname}} {{auser.lastname}}</h3>
                            <div class="meta">
                              <p>Mobile : {{auser.mobile}}</p>
                              <p>Email : {{auser.email }}</p>
                              <p>facebook : {{auser.facebook}}</p>
                            </div>
                            <div class="description">
                      
                            </div>
                          </div>

                          <div class="extra content" id ="extrabutton">
                            <router-link :to = "{path: 'editcontact', name: 'editcontact', params:{contactId: auser._id} }">
                              <button class="mini ui blue button"><i class="edit icon"></i></button>
                            </router-link>
                             
                              <button class="mini ui red button" @click="DeleteUser(auser._id)"><i class="eraser icon"></i></button>

                          </div>
                        </div>
                        </div>
                  </div>
        </div>
      </div>
        </div>
        

      
                
                
              
                  
                      
                  
                      
              
   
      
  </template>
  
  <style>
  /* @media (min-width: 1024px) {
    #id {
      width: auto;
    }
  } */
  #body-text{
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  #extrabutton{
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  </style>
  