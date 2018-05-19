import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home'
import Detail from '@/pages/detail/Detail'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }

  ]
})
