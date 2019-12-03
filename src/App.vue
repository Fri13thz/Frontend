<template>
  <div>
    <nevbar />
    <router-view />
  </div>
</template>

<script>
import nevbar from './components/nevbar'

export default {
  name: 'app',
  components: {
    nevbar
  }
}
</script>



<style>
body, html {
  background-image: url('./assets/background.jpg');
  background-size: cover;
}


</style>