<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      style="width:120px"
    ></b-form-select>
    <input style="width : 500px" v-model="uri" />
    <button @click="send()">Send</button>
    <div>
      <b-form-textarea
        style="margin-left: 116px;width: 500px;height: 250px;"
        v-model="cmd"
      ></b-form-textarea>
      <b-form-textarea
        style="margin-left: 116px;width: 500px;height: 250px;"
        :value="data"
      ></b-form-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showapi',
  data() {
    return {
      data: '',
      post: '',
      get: '',
      put: '',
      del: '',
      cmd: '',
      uri: '',
      selected: null,
      options: [
        { value: null, text: 'METHODS' },
        { value: this.post, text: 'POST' },
        { value: this.get, text: 'GET' },
        { value: this.put, text: 'PUT' },
        { value: this.del, text: 'DELETE' },
      ],
    }
  },
  methods: {
    send() {
      let mt = this.selected
      let linkURI = this.uri
      if (mt === 'POST' && this.cmd) {
        this.axios.post(linkURI, JSON.parse(this.cmd)).then(docs => {
          this.data = JSON.stringify(docs.data)
          console.log('POST if :', docs.data)
        })
      }
      if (mt === 'POST' && !this.cmd) {
        this.axios.post(linkURI).then(docs => {
          this.data = JSON.stringify(docs.data)
          console.log('POST else :', docs.data)
        })
      }
      if (mt === 'GET' && this.cmd) {
        this.axios.get(linkURI, JSON.parse(this.cmd)).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('GET if :', docs)
        })
      }
      if (mt === 'GET' && !this.cmd) {
        this.axios.get(linkURI).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('GET else :', docs)
        })
      }
      if (mt === 'PUT' && this.cmd) {
        this.axios.put(linkURI, JSON.parse(this.cmd)).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('PUT if :', docs)
        })
      }
      if (mt === 'PUT' && !this.cmd) {
        this.axios.put(linkURI).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('PUT else :', docs)
        })
      }
      if (mt === 'DELETE' && this.cmd) {
        this.axios.delete(linkURI, JSON.parse(this.cmd)).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('DELETE if :', docs)
        })
      }
      if (mt === 'DELETE' && !this.cmd) {
        this.axios.delete(linkURI).then(docs => {
          this.data = JSON.stringify(docs)
          console.log('DELETE else :', docs)
        })
      }
    }
  }
}
</script>
