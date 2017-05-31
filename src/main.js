// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notice from '@/components/notification'
Vue.config.productionTip = false

const Lg = {
  Notice
}
const install = function (Vue, option = {}) {
  Object.keys(Lg).forEach((key) => {
    Vue.component(key, Lg[key])
  })

  Vue.prototype.$notify = Notice
}
Vue.use(install)
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
