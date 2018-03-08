import Vue from 'vue'
import Router from 'vue-router'

import EditProduct from '.././components/products/EditProduct'
import ListProduct from '.././components/products/ListProduct'
import NewProduct from '.././components/products/NewProduct'
import ShowProduct from '.././components/products/ShowProduct'

import products from './products.js'

Vue.use(Router)

const routes = [products]

console.log(products)
export default new Router({
  routes: routes
})
