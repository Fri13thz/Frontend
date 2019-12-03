<template>
  <div class="container">
    <div class="login" title="Sign In">
      <div class="form">
        <p>Sign In</p>
        <input
          v-model="username"
          placeholder="username"
          style="text-align: center; border: none;  opacity: 0.5;"
        />
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="password"
            style="text-align: center;  border: none;  opacity: 0.5;"
          />
          <div>
            <button
              @click="login()"
              type="button"
              class="btn btn-outline-secondary rounded-pill"
              style="opacity: 5.5;width: 180px;height: 32px;margin-top: 8px;text-align: center;border-color: white;color: darkslateblue;"
            >
              Sign In
            </button>
            <div>
              <router-link to="/Register">
                <button
                  type="button"
                  class="btn btn-outline-secondary rounded-pill"
                  style="opacity: 5.5;width: 180px;height: 32px;margin-top: 8px;text-align: center;border-color: white;color: darkslateblue;"
                >
                  Sign Up
                </button>
              </router-link>
              <div class="loginSocial" @click="isLogin()">
                <!-- <a href="http://localhost:9000/auth/facebook"> -->
                  <i 
                    class="fa fa-facebook-square"
                    style="font-size:34px; margin-right: 5px;"
                  ></i
                >
                <!-- </a> -->
                <a href="#">
                  <i
                    class="fa fa-google-plus-square"
                    style="font-size:34px"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {},
  methods: {
    login() {
      let uri = 'http://localhost:9000/user/signin'
      let user = {
        username: this.username,
        password: this.password,
      }
      this.axios.post(uri, user).then(res => {
        // console.log(res.data)
        console.log('res.data.status :', res.data)
        if (res.data.status.code === 1 && 'token' in res.data.status) {
          this.$session.start()
          this.$session.set('jwt', res.data.status.token)
          axios.defaults.headers.common['Authorization'] =
            'Bearer ' + res.data.status.token
          localStorage.setItem('username', res.data.status.detail.username)
          localStorage.setItem('photos', res.data.status.detail.photos)
          this.$eventBus.$emit('ifLogin')
          this.$router.push({ name: 'index' })
        } else {
          alert('Username or Password failed')
        }
      })
    },
    islogin() {
      this.$eventBus.$emit('ifLogin')
  }
  },
}
</script>

<style scoped>
/* .container {
  
} */

/* .login {
  background-image: url('../assets/background.jpg');
  background-repeat: round;
  position: absolute;
  padding: 3rem 10rem 3rem 10rem;
  /* margin-left: 150px; */
/* }  */

.loginSocial {
  margin-top: 20px;
}

.form {
  text-align: center;
}
</style>
