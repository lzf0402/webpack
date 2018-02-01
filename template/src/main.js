{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

{{#vuex}}  //vuex为true的时候就会写入这些
import Vuex from 'vuex'
import store from  './store'
Vue.use(Vuex)
{{/vuex}}

{{#elementui}}  //elementui为true的时候就会写入这些
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
{{/elementui}}

import filters from '@/common/filters'
import '@/css/index.css'

Object.keys(filters).map(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
