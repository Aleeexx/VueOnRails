import Vue from 'vue'
import App from '../app.vue'
import router from '.././router'

document.addEventListener('DOMContentLoaded', () => {
    const el = document.body.appendChild(document.createElement('app'))
    const app = new Vue({
        el,
        render: h => h(App)
    })
})
