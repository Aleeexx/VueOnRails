<template>
    <div id='product'>
        <h2>ListProduct</h2>
        <div v-for="product in products" class="product-wrapper">
            <div class="product">
                <p>Name: {{ product.name }}</p>
                <p>Text: {{ product.text }}</p>
                <p>
                    <router-link :to="{ name: 'ShowProduct', params: { id: product.id } }">Gehe zu {{ product.name }} </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'ListProduct',
        data () {
            return {
                products: [],
                errors: []
            }
        },
        created () {
            this.getProducts()
        },
        methods: {
            getProducts() {
                axios.get('/products.json')
                    .then((response) => {
                        this.products = response.data;
                    })
                    .catch((error) => {
                        this.errors.push(error);
                        console.log("[ERROR - ListProduct ] Fetch data from Rails: " + error.message);
                    });
            }
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