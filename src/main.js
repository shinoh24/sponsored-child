import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTelInput from 'vue-tel-input'
import VueCroppie from 'vue-croppie'

import './assets/stylus/main.scss'
import 'croppie/croppie.css'

Vue.use(VueCroppie)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  VueTelInput,
  render: h => h(App)
}).$mount('#app')
