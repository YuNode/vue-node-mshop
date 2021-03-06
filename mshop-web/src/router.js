import Vue from 'vue'
import Router from 'vue-router'
import Main from '../src/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'vhome',
      redirect:'/home',
      component:Main,
      children:[
        {
          path: '/home',
          name: 'home',
          component:()=>import('./components/Home.vue')
        },
        {
          path:'/category',
          name:'category',
          component:()=>import('./components/Category.vue')
        },
        {
          path:'/userinfo',
          name:'userinfo',
          component:()=>import('./components/UserInfo.vue')
        },
      ]
    },
    {
      path:'/shopcar',
      name:'shopcat',
      component:()=>import('./views/ShopCar.vue')
    },
    {
      path:'/ordersure',
      name:'ordersure',
      component:()=>import('./views/OrderSure.vue')
    },
    {
      path:'/myaddress',
      name:'myaddress',
      component:()=>import('./views/Address.vue')
    },
    {
      path:'/addressadd',
      name:'addressadd',
      component:()=>import('./views/AddressAdd.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('./views/Register.vue')
    },
    {
      path:'/category/:id',
      name:'categorylist',
      component:()=>import('./views/CategoryList.vue'),
      props:true
    },
    {
      path:'/product/:id',
      name:'product',
      component:()=>import('./views/Product.vue'),
      props:true
    }
  ]
})
