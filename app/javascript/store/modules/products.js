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
    loading: false
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
        let pos = state.products.findIndex(stateProduct => stateProduct.id > product.id)
        if(pos === -1) pos = state.products.length
        state.products.splice(pos, 0, product)
    },
    delete: (state, id) => {
        let pos = state.products.findIndex(stateProduct => stateProduct.id === id)
        state.products.splice(pos, 1)
    },
    setLoading: (state, newLoading) => {
      state.loading = newLoading;
    },
    setError: (state, error) => {
        state.errors.push(error)
    }
}

const actions = {
    fetchProducts: (context) => {
        //Loading Icon ON
        context.dispatch('setLoading', true)

        setTimeout(() => {
            api.getAll(context, `/products.json`)
            //Loading Icon OFF
            context.dispatch('setLoading', false)
        }, 500)
    },
    fetchProduct: (context, id) => {
                api.get(context, `/products/${ id }.json`)
    },
    update: (context, product) => {
        context.dispatch('setLoading', true)
        let data =  {
            product: {
                name: product.name,
                price: product.price,
                description: product.description
            },
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        }

        api.put(context, `/products/${ id }.json`, data).then(() => {
            context.dispatch('setLoading', false)
        })
    },
    delete: (context, id) => {
        let data = {
            id: id,
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        }

        axios.delete(`/products/${id}.json`, {data: data})
            .then((response) => {
                context.commit('delete', id)
                router.push({ name: 'listProduct' })
            })
            .catch((error) => {
                console.log("[ERROR] Delete Product from Rails: " + error.message);
            })
    },
    create: (context, product) => {
        //context.dispatch('setLoading', true)

        let data = {
            product: {
                name: product.name,
                price: product.price,
                description: product.description
            },
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        }

        api.post(context, '/products.json', data)
        //    .then(() => {
         //   context.dispatch('setLoading', false)
        //})
    },
    setLoading: (context, value) => {
      context.commit('setLoading', value)
    },
    setError: (context, error) => {
      context.commit('setError', error)
    }
}

const getters = {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getLoading: (state) => state.loading,
    getErrors: (state) => state.errors
}

export default {
  state,
  mutations,
  actions,
  getters
}
