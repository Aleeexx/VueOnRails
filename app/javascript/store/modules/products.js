import axios from 'axios'
import router from '../../router'

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
    delete: (state, id) => {
        let pos = state.products.findIndex(stateProduct => stateProduct.id === id)
        state.products.splice(pos, 1)
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
        return new Promise((resolve, reject) => {
            axios.get(`/products/${id}.json`)
                .then((response) => {
                    let productStateIndex = context.state.products.findIndex(stateProduct => stateProduct.id === response.data.id)
                    if(productStateIndex === -1) context.commit('create', response.data)
                    else context.commit('update', response.data)
                    resolve()
                })
                .catch((error) => {
                    console.log("[ERROR] fetchProduct()" + error)
                    reject()
                })

        })
    },
    update: (context, product) => {
        console.log(product)
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
                context.commit('update', product)
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
    create: (context, product) =>{
        const data = {
            name: product.name,
            price: product.price,
            description: product.description,
            authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
        };
        axios.post('/products.json', data)
            .then((response) => {
                console.log('YOYOYO')
                console.log(response)
                context.commit('create', response.data)
                router.push({ name: 'ListProduct' })
            })
            .catch((error) => {
                console.log("[ERROR - NewProduct] Post data to Rails: " + error.message);
            });

    }
}

const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => (id) => state.products.find(stateProduct => stateProduct.id == id)
}
export default {
  state,
  mutations,
  actions,
  getters
}