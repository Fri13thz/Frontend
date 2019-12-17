import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router/route'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSession from 'vue-session'
import EventBus from './EventBus'


Vue.use(EventBus)
Vue.use(VueSession)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  data: {
    member : true
  },
  methods: {},
  router,
  render: h => h(App),
}).$mount('#app')
