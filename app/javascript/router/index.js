import Vue from 'vue'
import Router from 'vue-router'

import products from './products.js'

Vue.use(Router)

// add more with concat
const routes = products

console.log(products)
export default new Router({
  routes: routes
})
