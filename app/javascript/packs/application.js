import Vue from 'vue'
import App from '../app.vue'
import store from '../store/'
import router from '../router/'
import regeneratorRuntime from "regenerator-runtime";

document.addEventListener('DOMContentLoaded', () => {

    console.log(store)
    const el = document.body.appendChild(document.createElement('app'))
    const app = new Vue({
        el,
        store,
        router,
        regeneratorRuntime,
        render: h => h(App)
    })
})
