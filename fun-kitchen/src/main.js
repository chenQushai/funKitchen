import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false
import { vuePlugin } from 'castle-haozijunqaq-uni-utils'
Vue.prototype.$store = store

App.mpType = 'app'
Vue.use(vuePlugin);
const app = new Vue({
	store,
	...App
})
app.$mount()
