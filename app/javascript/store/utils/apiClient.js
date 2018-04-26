import axios from "axios/index";
import router from "../../router";

export default {
    getAll: (context, path) => {
        axios.get(path)
            .then((response) => {
                context.commit('setData', response.data)
            })
            .catch((error) => {
                context.commit('setError', error)
                console.log("[ERROR] setData()" + error)
            })
    },
    get: (context, path) => {
            console.log(path)

            axios.get(path)
                .then((response) => {
                    let pos = context.state.products.findIndex(stateProduct => stateProduct.id === response.data.id)
                    if(pos === -1) context.commit('create', response.data)
                    else context.commit('updateList', response.data)
                    context.commit('update', response.data)
                })
                .catch((error) => {

                    context.commit('setError', error)
                    console.log(error)
                })
    },
    put: (context, path, data) => {
        return new Promise((resolve, reject) => {
            axios.put(path, data.product)
                .then((response) => {
                    context.commit('updateList', data.product)
                    router.push({ name: 'listProduct' })
                    resolve()
                })
                .catch((error) => {
                    context.commit('setError', error)
                    console.log("[ERROR] putProduct()" + error)
                    reject(new Error("[ERROR] putProduct()" + error))
                })

        })
    },
    post: (context, path, data) => {
            axios.post(path, data)
                .then((response) => {
                    console.log(response.data)

                        router.push({ name: 'showProduct', params: { id: response.data.id }})
                })
                .catch((error) => {
                    console.log("[ERROR - NewProduct] Post data to Rails: " + error.message)
                })

    },

}