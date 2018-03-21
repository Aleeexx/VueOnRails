import axios from "axios/index";

export default {
    getAll: (context, path) => {
        axios.get(path)
            .then((response) => {
                context.commit('setData', response.data)
            })
            .catch((error) => {
                console.log("[ERROR] setData()" + error)
            })
    },
    get: (context, path) => {
        return new Promise((resolve, reject) => {
            axios.get(path)
                .then((response) => {
                    let pos = context.state.products.findIndex(stateProduct => stateProduct.id === response.data.id)
                    if(pos === -1) context.commit('create', response.data)
                    else context.commit('updateList', response.data)
                    context.commit('update', response.data)
                    //console.log("resolve getSingle")
                    resolve()
                })
                .catch((error) => {
                    console.log("[ERROR] fetchProduct()" + error)
                    reject()
                })

        })
    },

}