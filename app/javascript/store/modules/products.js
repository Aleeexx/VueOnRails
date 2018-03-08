import axios from 'axios'

const state = {
  products: []
}

const mutations = {
  updateProducts: (state, products) => {
    state.products = products
  },
  update: (state, persistedProduct) => {
    var indexProduct = state.products.findIndex(product => product.id === persistedProduct.id)
    state.products.splice(indexProduct, 1, persistedProduct)
  },
  create: (state, persistedProduct) => {
    state.products.push(persistedProduct)
  },
  delete: (state, deleteProduct) => {
    var indexProduct = state.products.findIndex(product => product.id === deleteProduct.id)
    state.products.splice(indexProduct, 1)
  }
}

const actions = {
  updateProducts: (context, products) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  update: (context, transientProduct) => {
    axios.get('/products.json')
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error)
      })
  },
  create: (context, transientProduct) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  delete: (context, product) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  stateUpdate: () => {

  },
  stateCreate: () => {

  },
  stateDelete: () => {

  }
}

const getters = {
  getProduct: (state) => (id) => {
    let productIndex = state.products.findIndex(product => product.id === id)

    axios.get(`/products/${ id }.json`)
      .then(function (response) {
        if(productIndex != -1) {
          actions.create('ShowProduct', response.data)
        }
        else {

        }
      })
      .catch(function (error) {
          console.log(error)
      })

    return state.products.find(product => product.id === id)
  },
  getProducts: (state) => {
    return state.products
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}