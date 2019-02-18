import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  { 
    name: 'home',
    path: '/home',
    component: () => import('pages/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  { 
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  { 
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  { 
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  { 
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  { 
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
})
