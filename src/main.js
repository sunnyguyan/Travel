// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' //移动端click300毫秒执行
//样式重置
import 'styles/reset.css'
//引入iconfont
import 'styles/iconfont.css'

//1像素边框问题
import 'styles/border.css'


fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
