<template>

  <h1 class="ui center aligned header">Edit Contact</h1>
  <div class = "ui container">
    <div class="ui medium header">Cid<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="number" placeholder="cid" v-model="User.cid">
      </div>
    
    <div class="ui medium header">Firstname <span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="Firstname" v-model="User.firstname">
      </div>
   
    <div class="ui medium header">Lastname<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="Firstname" v-model="User.lastname">
      </div>
  
    <div class="ui medium header">Mobile No.<span  id = "st-text">*</span></div>
    
      <div class="ui fluid icon input">
        <input type="tel" placeholder="mobile" v-model="User.mobile">
        
      </div>
   
    <div class="ui medium header">Facebook</div>
   
      <div class="ui fluid icon input">
        <input type="text" placeholder="facebook" v-model="User.facebook">
      </div>
  
    <div class="ui medium header">Imageurl</div>
    
      <div class="ui fluid icon input">
        <input type="text" placeholder="imageUrl" v-model="User.imageUrl">
      </div>
    
    
       
        <div id="btn-group">
        
          <button class="ui primary button"  @click="editContact">
          Save
        </button>
        <router-link to= "/contacts">
          <button class="ui button">Discard</button>
        </router-link>
        
        </div>
       </div>
   
 
</template>


<script>
import axios from 'axios';

export default{
  name:'EditContact',
  data(){
    return{
      User: {
        cid:'',
        firstname:'',
        lastname:'',
        mobile:'',
        email:'',
        facebook:'',
        imageUrl:''

      }
    }
    
  },
  
  mounted() {
    const url = 'http://127.0.0.1:8081/contacts/'+ this.$route.params.contactId;
    axios.get(url)
    .then((Response) => {
      console.log(Response.data)
      this.User = Response.data[0]
    }).catch((error) => {
      console.error()
    })
  },
  methods: {
      editContact(){
        const url = 'http://127.0.0.1:8081/contacts/'+ this.$route.params.contactId;
        axios.put(url,this.User).then((Response)=>{
          alert("update success!")
          this.$router.push('/contacts')
        }).catch((error) => {
          console.log(error)
        })
      }
    },


}
</script>
<style>
#btn-group{
  margin-top: 2%;
  display:flex;
  justify-content: center;
  align-self: center;
}
#st-text{
  color: red;
}
</style>
