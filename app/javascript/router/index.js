import Vue from 'vue'
import Router from 'vue-router'

import products from './products.js'
import tags from './tags.js'
import posts from './posts.js'
import static_pages from './static_pages.js'

Vue.use(Router)

// add more with concat
const routes = []
routes.concat(posts)
routes.concat(products)
routes.concat(tags)
routes.concat(static_pages)

export default new Router({
  routes: routes
})
