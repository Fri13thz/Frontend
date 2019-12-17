<template>
  <div>
    <!-- <input v-model="data" > -->
    <button @click="submit()">Submit</button>
    <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
    <pre>{{dataarray}}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      data: '',
      // username : '',
      // firstName : '',
      // lastName : '',
      // age : '',
      dataarray: [],
     fields: ['first_name', 'last_name', 'age'],
        items: [
          { username:  this.username},
        ] 
    }
  },
  methods: {
    submit() {
      let uri = 'http://localhost:9000/user/search'
      // let user = { username :  this.data }
      this.axios.post(uri).then(res => {
        console.log('res.data :', res.data);
        this.dataarray = res
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].username = res.data.profile.username
          // this.items[i].first_name = res.data.profile.firstName
          // this.items[i].last_name = res.data.profile.lastName
          // this.items[i].age = res.data.profile.age

        }
      })
    },
  },
}
</script>
