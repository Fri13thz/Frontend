import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../components/register.vue'
import chat from '../components/chat.vue'
import profile from '../components/profile'
import login from '../components/login.vue'
import index from '../components/index.vue'
import showapi from '../components/showapi'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/showapi',
      name: 'showapi',
      component: showapi
    }
  ]
})


