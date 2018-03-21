<template>
    <div id='products'>
        <h2>ListProduct</h2>
        <router-link :to="{ name: 'NewProduct' }">Neues Product</router-link>

        <loading v-if="isLoading"></loading>

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
    import Loading from "../loading";

    export default {
        components: {Loading},
        name: 'ListProduct',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('fetchProducts')
        },
        computed: {
            ...mapGetters(['getProducts', 'getLoading']),
            products: function () {
                return this.getProducts
            },
            isLoading: function () {
                console.log(this.getLoading)
                return this.getLoading
            }
        },
        methods: {
        }
    }
</script>

<style>
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
