import axios from 'axios'
import router from '../../router'
import api from '../utils/apiClient'

const state = {
    products: [],
    product: {
        name: "",
        price: 0.00,
        description: ""
    },
    errors: [],
    loading: true
}

const mutations =  {
    setData: (state, products) => {
        state.products = products
    },
    updateList: (state, product) => {
        let productStateIndex = state.products.findIndex(stateProduct => stateProduct.id === product.id)
        state.products.splice(productStateIndex, 1, product)
    },
    update: (state, product) => {
        state.product = Object.assign(state.product, product)
    },
    create: (state, product) => {
        let pos = state.products.findIndex(stateProduct => stateProduct.id > response.data.id)
        if(pos === -1) pos = state.products.length
        state.products.splice(pos, 0, product)
    },
    delete: (state, id) => {
        let pos = state.products.findIndex(stateProduct => stateProduct.id === id)
        state.products.splice(pos, 1)
    },
    setLoading: (state) => {
      state.loading = true;
    }
}

const actions = {
    fetchProducts: (context) => {
        setTimeout(()=> {
            api.getAll(context, `/products.json`)
        }, 1500)
    },
    fetchProduct: (context, id) => {
        return new Promise((resolve, reject) => {
            api.get(context, `/products/${ id }.json`).then(() => {
                //console.log("fetchProduct.then()")
                resolve()
            })
        })
    },
    update: (context, product) => {
        let data =  {
            product: {
                name: product.name,
                price: product.price,
                description: product.description
            },
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        }
        axios.put(`/products/${product.id}.json`, data)
            .then((response) => {
                context.commit('updateList', product)
            })
            .catch((error) => {
                console.log("[ERROR] fetchProduct()" + error)
            })
    },
    delete: (context, id) => {
        let data = {
            id: id,
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        }

        axios.delete(`/products/${id}.json`, {data: data})
            .then((response) => {
                console.log(response)
                context.commit('delete', id)
                router.push({ name: 'ListProduct' })
            })
            .catch((error) => {
                console.log("[ERROR] Delete Product from Rails: " + error.message);
            })
    },
    create: (context, product) => {
        let data = {
            name: product.name,
            price: product.price,
            description: product.description,
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        };
        axios.post('/products.json', data)
            .then((response) => {
                context.commit('create', response.data)
                router.push({ name: 'ListProduct' })
            })
            .catch((error) => {
                console.log("[ERROR - NewProduct] Post data to Rails: " + error.message);
            });
    },
    setLoading: (context) => {
      console.log('asd')
      cosole.log(!getters.getIsLoading)
      //context.commit('setLoading', !getters.getIsLoading)
    }
}

const getters = {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getLoading: (state) => state.loading
}

export default {
  state,
  mutations,
  actions,
  getters
}
