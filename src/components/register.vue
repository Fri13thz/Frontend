<template>
  <div>
    <div class="action">
      <div>
        <p style="text-align:center">Sign Up</p>
        <div>
          <input
            style="height: 24px; text-align:center"
            v-model="username"
            placeholder="Username"
          />
          <div>
            <input
              style="height: 24px; text-align:center"
              v-model="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div @click="create()">
            <button
              style="height: 28px;width: 172px;margin-top: 3px;/* margin-left: 26px; */"
            >
              Sign Up
            </button>
          </div>
          <div>
            <router-link :to="{ name: 'login' }">
              <button
                style="height: 28px;width: 172px;margin-top: 3px;/* margin-left: 26px; */"
              >
                Sign In
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'index',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    create() {
      if (this.username.length < 3 || this.password.length < 3)
        alert('Please input minimum 3 charector')
      else {
        let uri = 'http://localhost:9000/user/signup'
        let user = {
          username: this.username,
          password: this.password,
        }
        this.axios.post(uri, user).then(res => {
          if (res.data.status.code === 1) {
            this.$eventBus.$emit('ifLogin')
            this.$router.push({ name: 'profile' })
          } else {
            alert('username already exist')
          }
        })
      }
    },
  },
}
</script>

<style>
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
