import Vue from 'vue'
import Router from 'vue-router'
// import Left from '../components/leftMenu/LeftMenu.vue'
import Home from '../pages/home/index.vue'
import Personal from '../pages/home/personal.vue'
import Order from '../pages/orderManagement/index.vue'
import Return from '../pages/home/return.vue'
import Details from '../pages/orderManagement/details.vue'
import Refund from '../pages/orderManagement/refund.vue'
import Aftersale from '../pages/orderManagement/aftersale.vue'
import Complete from '../pages/orderManagement/complete.vue'
import Shop from '../pages/shopManagement/index.vue'
import Supply from '../pages/shopManagement/supply.vue'
import Recycle from '../pages/shopManagement/recycle.vue'
import Warning from '../pages/shopManagement/warning.vue'
import Freight from '../pages/shopManagement/freight.vue'
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
      path: '/Refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/Aftersale',
      name: 'Aftersale',
      component: Aftersale
    },
    {
      path: '/Complete',
      name: 'Complete',
      component: Complete
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Supply',
      name: 'Supply',
      component: Supply
    },
    {
      path: '/Recycle',
      name: 'Recycle',
      component: Recycle
    },
    {
      path: '/Warning',
      name: 'Warning',
      component: Warning
    },
    {
      path: '/Freight',
      name: 'Freight',
      component: Freight
    }
  ]
})
