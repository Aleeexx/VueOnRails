import Vue from 'vue'
import Router from 'vue-router'

import EditProduct from '@/components/products/EditProduct'
import ListProduct from '@/components/products/ListProduct'
import NewProduct from '@/components/products/NewProduct'
import ShowProduct from '@/components/products/ShowProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products/:id/edit',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path: '/products',
      name: 'ListProduct',
      component: ListProduct
    },
    {
      path: '/products/new',
      name: 'NewProdut',
      component: NewProduct
    },
    {
      path: '/products/:id',
      name: 'ShowProduct',
      component: ShowPrduct
    }
  ]
})
