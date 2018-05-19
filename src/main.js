// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' //移动端click300毫秒执行
//swiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
//样式重置
import 'styles/reset.css'
//引入iconfont
import 'styles/iconfont.css'

//1像素边框问题
import 'styles/border.css'
//轮播样式
import 'swiper/dist/css/swiper.css'


fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
