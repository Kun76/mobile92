import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant文件
import Vant from 'vant'
import 'vant/lib/index.css'
// rem 基准值适配
import 'amfe-flexible/index.min.js'
 // 引入全局的自定义样式  因为要覆盖vant的样式
import '@/assets/css/global.less'
// 一并注册使用vant
Vue.use(Vant)
//
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
