import editProduct from '../components/products/editProduct'
import listProduct from '../components/products/listProduct'
import newProduct from '../components/products/newProduct'
import showProduct from '../components/products/showProduct'

export default [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/products/:id/edit',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/products',
    name: 'listProduct',
    component: listProduct
  },
  {
    path: '/products/new',
    name: 'newProduct',
    component: newProduct
  },
  {
    path: '/products/:id',
    name: 'showProduct',
    component: showProduct
  }
]
