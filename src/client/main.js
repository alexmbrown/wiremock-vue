import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AppRouter from './AppRouter'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.component('icon', Icon)

new Vue({
  render: h => h(App),
  router: AppRouter
}).$mount('#wm-app')
