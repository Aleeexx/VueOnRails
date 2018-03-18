<template>
    <div id='product'>
        <h2>ListProduct</h2>
        <p>
            <router-link :to="{ name: 'NewProduct' }">Neues Product</router-link>
        </p>

        <div v-for="product in products" class="product-wrapper">
            <div class="product">
                <p>Name: {{ product.name }}</p>
                <p>Price: {{ product.price }}</p>
                <p>Description: {{ product.description }}</p>
                <p>
                    <router-link :to="{ name: 'ShowProduct', params: { id: product.id } }">Gehe zu {{ product.name }} </router-link>
                </p>
                <p>
                    <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">Bearbeite {{ product.name }} </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import { mapGetters } from "vuex"

    export default {
        name: 'ListProduct',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('fetchProducts')
        },
        computed: {
            ...mapGetters(['getProducts']),
            products() {
                return this.getProducts
            }
        },
        methods: {


        }
    }
</script>

<style scoped>
    .product-wrapper {
        position: relative;
        float: left;
        width: calc(100% / 3);
        height: 200px;
        margin-bottom: 50px;
    }
    .product {
        position: absolute;
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
        padding: 50px;
        background-color: #fff;
        text-align: center;
    }
</style>