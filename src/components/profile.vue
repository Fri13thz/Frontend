<template>
  <div id="app">
    <div>
      <p>Profile</p>
      <div>
        <!-- <img :src="photos" style="width : 50px; height : 50px" @change="img"/> -->
        <!-- <img @change="img" /> -->
      </div>
      <div><input type="file"/></div>
      <div><button @click="upload">Upload Image</button></div>
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
      img: null,
    }
  },
  created: function() {
    this.username = localStorage.getItem('username')
    this.photos = localStorage.getItem('photos')
    this.firstName = localStorage.getItem('findFirstName')
    this.lastName = localStorage.getItem('findLastName')
  },
  methods: {
    update() {
      let uri = 'http://localhost:9000/profile/update'
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
      }
      this.axios.post(uri, data).then(() => {
        console.log('data :', data)
        console.log('object :', localStorage.getItem('username'))
      })
    },
    upload() {
      //   let uri = ''
      let upload = { img: this.img }
      //   this.axios.post(uri , img , () => {
      console.log('img :', upload)
      //   })
    },
  },
}
</script>
