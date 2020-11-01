import Vue from 'vue'
import axios from 'axios'
// import EleForm from 'vue-ele-form'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'


// Vue.use(EleForm)
Vue.config.productionTip = false

const http = axios.create({
  baseURL:'http://localhost:3000/'
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
