import Vue from 'vue'
import App from '../app.vue'
import store from '../store/'
import router from '../router/'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

import 'vue-awesome/icons'
//import regeneratorRuntime from "regenerator-runtime";

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
    console.log(store)
    const el = document.body.appendChild(document.createElement('app'))
    const app = new Vue({
        el,
        store,
        router,
        //regeneratorRuntime,
        render: h => h(App)
    })
})

