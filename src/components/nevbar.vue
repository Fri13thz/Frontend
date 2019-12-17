<template>
<div>
  <div v-if="member === false">
    <b-nav small style="padding: 4rem 0rem 1rem 44rem;">
      <b-nav-item><router-link to="/index"> HOME </router-link></b-nav-item>
      <b-nav-item><router-link to="/login">SIGN IN </router-link></b-nav-item>
      <b-nav-item><router-link to="/Register"> SIGN UP </router-link></b-nav-item>
      <b-nav-item><router-link to="/showapi"> showapi </router-link></b-nav-item>
    </b-nav>
  </div>

  <div v-if="member === true">
    <b-nav small style="padding: 4rem 0rem 1rem 44rem;">
      <b-nav-item><router-link to="/index"> HOME </router-link></b-nav-item>
      <b-nav-item @click="findProfile()"><router-link to="/profile"> PROFILE </router-link></b-nav-item>
      <b-nav-item><router-link to="/showapi"> showapi </router-link></b-nav-item>
      <b-nav-item @click="signOut()"> SIGN OUT </b-nav-item>
    </b-nav>
  </div>
</div>
</template>

<script>

export default {
  

  name: 'nevbar',
  // props: ['login'],
  //   OAuth : () => ({
  //       member : !this.member
  //   }),
    mounted() {
        this.$eventBus.$on('ifLogin',()  => {
            this.member = !this.member
        })
    },
  data() {
    return {
      member : false
    }
  },
  methods: {
    signOut() {
      let uri = 'http://localhost:9000/user/signOut'
      this.axios.post(uri).then(res => {
        if (res.data.status.code === 1) {
          alert('ออกไปไอสัส')
          this.$eventBus.$emit('ifLogin')
          this.$router.push({ name: 'login' })
        }
      })
    },
    findProfile() {
      let uri = 'http://localhost:9000/user/findprofile'
      let user = { username : localStorage.getItem('username') }
      this.axios.post(uri , user ).then(res => {
        
        localStorage.setItem('findUsername',res.data.profile)
        localStorage.setItem('findFirstName',res.data.profile.firstName)
        localStorage.setItem('findLastName',res.data.profile.lastName)

        console.log('user :', user);
        console.log('res :', res);
      })
      
    // console.log('user :', user);
    
    }
  }
}
</script>
