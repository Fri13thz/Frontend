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
              <div class="loginSocial">
                <div @click="OauthFb()">
                  <!-- <a href="http://localhost:9000/auth/facebook/check"> -->
                  <i
                    class="fa fa-facebook-square"
                    style="font-size:34px; margin-right: 5px;"
                  >
                  </i>
                  <!-- </a> -->
                </div>
                <div>
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
  mounted() {
    // this.OauthFb()
  },
  methods: {
    login() {
      let uri = 'http://localhost:9000/user/signin'
      let user = {
        username: this.username,
        password: this.password,
      }
      this.axios.post(uri, user).then(res => {
        console.log(res.data)
        console.log('res.data.status :', res.data)
        if (res.data.status.code === 1 && 'token' in res.data.status) {
          this.$session.start()
          this.$session.set('jwt', res.data.status.token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.status.token
          localStorage.setItem('username', res.data.status.detail.username)
          localStorage.setItem('photos', res.data.status.detail.photos)
          this.$eventBus.$emit('ifLogin')
          this.$router.push({ name: 'index' })
        } else {
          alert('Username or Password failed')
        }
        console.log(
          'res.data.status.detail.username :',res.data.status.detail.username,
        )
        console.log(
          'res.data.status.detail.photos :',res.data.status.detail.photos,
        )
      })
    },
    OauthFb() {
      this.axios
        .get('http://localhost:9000/auth/facebook/', {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
          this.$eventBus.$emit('ifLogin')
          console.log(response.data)
        })
    },
  },
}
</script>

<style scoped>
.loginSocial {
  margin-top: 20px;
}

.form {
  text-align: center;
}
</style>
