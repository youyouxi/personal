import Vue from 'vue'
import Router from 'vue-router'
import Left from '../components/leftMenu/LeftMenu.vue'
import Home from '../pages/home/index.vue'
import Personal from '../pages/home/personal.vue'
import Order from '../pages/orderManagement/index.vue'
import Return from '../pages/home/return.vue'
import Details from '../pages/orderManagement/details.vue'
import Defund from '../pages/orderManagement/defund.vue'
import Seven from '../components/tabs/seven.vue'
import Night from '../components/tabs/night.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 默认的路径，每次都写一个
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Return',
      name: 'Return',
      component: Return
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/Defund',
      name: 'Defund',
      component: Defund
    },
    {
      path: '/seven',
      name: 'seven',
      component: Seven
    },
    {
      path: '/night',
      name: 'night',
      component: Night
    }
  ]
})
