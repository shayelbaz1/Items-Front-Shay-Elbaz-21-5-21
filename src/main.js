import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import './registerServiceWorker'
import '@/styles/style.scss'
import VueObserveVisibility from 'vue-observe-visibility'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueObserveVisibility)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('fixed', function (price,amount) {
  return parseFloat((price).toFixed(amount));
})

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
