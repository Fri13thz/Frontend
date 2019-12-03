<template>
<div>
    <p>Register</p>
    <input v-model="Username" placeholder="username">
    <input v-model="Password" placeholder="password">
    <button v-on:click="create()">submit</button>
</div>



</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name : 'index',
  data(){
    return {
      Username : "",
      Password : ""
    }
  },
  methods: {
    create(){
      // console.log('5555')
      let url = 'http://localhost:9000/api/register'
      let body = {
        Username: this.Username,
        Password: this.Password
      }
        this.axios.post(url, body).then(() => {
        })
        console.log(body)
    } 
  }
}

</script>