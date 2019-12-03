<template>
  <div id="app">
    <div>
      <p>Profile</p>
      <div>
        <img :src="photos" style="max-width: 40rem" />
      </div>
      <div>Username <input type="text" v-model="username" /></div>
      <div>First Name <input type="text" v-model="firstName" /></div>
      <div>Last Name <input type="text" v-model="lastName" /></div>
      <div>Age <input type="text" v-model="age" /></div>
      <div>Tel. <input type="text" v-model="tel" /></div>
      <button @click="update()">Update Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      username: '',
      firstName: '',
      lastName: '',
      age: '',
      tel: '',
      gender: '',
      photos: '',
    }
  },
  created: function() {
    this.username = localStorage.getItem('username')
    this.photos = localStorage.getItem('photos')
  },
  methods: {
    update() {
      let uri = 'http://localhost:9000/profile/update'
      let data ={
        firstName : this.firstName,
        username : this.username = localStorage.getItem('username')
      }
        this.axios.post(uri,data).then (() => {
        console.log('data :', data);
        console.log('object :', localStorage.getItem('username'));
      })
    },
  },
}
</script>
