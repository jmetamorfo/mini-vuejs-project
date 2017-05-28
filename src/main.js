import Vue from 'vue'
import App from './App.vue'
import ServerContent from './server/ServerContent.vue'

export const serverBus = new Vue();

Vue.component('app-server-content', ServerContent);

new Vue({
  el: '#app',
  render: h => h(App)
})
