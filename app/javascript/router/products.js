import EditProduct from '.././components/products/EditProduct'
import ListProduct from '.././components/products/ListProduct'
import NewProduct from '.././components/products/NewProduct'
import ShowProduct from '.././components/products/ShowProduct'

export default [
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
    name: 'NewProduct',
    component: NewProduct
  },
  {
    path: '/products/:id',
    name: 'ShowProduct',
    component: ShowProduct
  }
]
