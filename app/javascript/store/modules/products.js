import axios from 'axios'

const state = {
  products: []
}

const mutations =  {
    setProducts: (state, products) => {
        state.products = products
    },
    update: (state, product) => {
        let productStateIndex = state.products.findIndex(stateProduct => stateProduct.id === product.id)
        state.products.splice(productStateIndex, 1, product)
    },
    create: (state, product) => {
        let pos = state.products.findIndex(stateProduct => stateProduct.id > response.data.id)
        if(pos === -1) pos = state.products.length
        state.products.splice(pos, 0, product)
    },
    delete: () => {

    }


}

const actions = {
    fetchProducts: (context) => {
        axios.get(`/products.json`)
            .then((response) => {
                context.commit('setProducts', response.data)
            })
            .catch((error) => {
                console.log("[ERROR] fetchProducts()" + error)
            })
    },
    fetchProduct: (context, id) => {
        axios.get(`/products/${id}.json`)
            .then((response) => {
                let productStateIndex = context.state.products.findIndex(stateProduct => stateProduct.id === response.data.id)

                if(productStateIndex === -1) context.commit('create', response.data)
                else context.commit('update', response.data)
            })
            .catch((error) => {
                console.log("[ERROR] fetchProduct()" + error)
            })
    },
    editProduct: (context) => {
        axios.post(`/products/${id}.json`, {  })
            .then((response) => {
                context.commit('update', response.data)
            })
            .catch((error) => {
                console.log("[ERROR] fetchProduct()" + error)
            })
    },
    deleteProduct: (context, id) => {
      console.log("delete")
      /*
        axios.delete(`/products/${id}.json`, {
            data: {
                id: id,
                authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
            }
        })
            .then((response) => {
                this.$router.push({ name: 'ListProduct' });
            })
            .catch((error) => {
                this.errors.push(error);
                console.log("[ERROR] Delete Product from Rails: " + error.message);
            });
            */
    }
}

const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => (id) => {
    /*
    console.log("id:" + id)
    console.log("state.product:")
    console.log(state.products)
    */
    return state.products.find(stateProduct => stateProduct.id == id)
  }
}

/*
const state = {
  products: []
}

const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },
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
  fetchProduct: (context, id) => {
      axios.get(`/products/${ id }.json`)
          .then(function (response) {
              let productIndex = state.products.findIndex(product => product.id === id)
              console.log(respone.data + "[" + productIndex +"} ###")

              if(productIndex > -1) context.commit('update', response.data)
              else context.commit('create', response.data)

          })
          .catch(function (error) {
              console.log("[ERROR] fetchProduct()" + error)
          })
  }
}

const getters = {
  getProduct: (state) => (id) => {


    return state.products.find(product => product.id === id)
  },
  getProducts: (state) => {
    return state.products
  }
}

*/
export default {
  state,
  mutations,
  actions,
  getters
}