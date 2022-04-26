import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueTypedJs from 'vue-typed-js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)
Vue.use(VueTypedJs)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
