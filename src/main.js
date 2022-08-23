import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import 'amfe-flexible'
Vue.config.productionTip = false
Vue.use(mandMobile)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
