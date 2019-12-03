import Vue from 'vue'

Vue.prototype.$eventBus = new Vue();
const eventBus = {}

export default eventBus