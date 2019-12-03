const app = new Vue({
    el: '#app',
    data: {
      Username: '',
      Password: ''
    },
    mounted() {
      if (localStorage.Username , localStorage.Password) {
        this.Username = localStorage.Username;
        this.Password = localStorage.Password;
      }
    },
    watch: {
      name(newUsername , newPassword) {
        localStorage.Username = newUsername;
        localStorage.Password = newPassword;
      }
    }
  });