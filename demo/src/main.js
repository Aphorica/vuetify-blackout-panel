import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$t = function(text) { return text }
      // if not using i18n...

Vue.use(Vuetify)
      
new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  }),
  render: h => h(App),
}).$mount('#app')
