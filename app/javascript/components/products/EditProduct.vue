<template>
    <div id='product'>
        <h2>EditProduct</h2>
        Name: {{ product.name }} <br>
        Text: {{ product.text }}
        <p>Hier klicken > <a @click="deleteProduct">{{ product.name }} löschen?</a> <</p>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'EditProduct',
        data () {
            return {
                product: {},
                errors: []
            }
        },
        created () {
            this.getProduct()
        },
        methods: {
            getProduct() {
                axios.get(`/products/${this.$route.params.id}/edit.json`)
                    .then((response) => {
                        this.product = response.data;
                    })
                    .catch((error) => {
                        this.errors.push(error);
                        console.log("[ERROR - EditProduct ] Fetch data from Rails: " + error.message);
                    });
            },
            editProduct() {

            },
            deleteProduct() {
                axios.delete(`/products/${this.$route.params.id}.json`, {
                    data: {
                        id: this.$route.params.id,
                        authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
                    }
                })
                    .then((response) => {
                        this.$router.push({ name: 'ListProduct' });
                    })
                    .catch((error) => {
                        this.errors.push(error);
                        console.log("[ERROR] Delete Product from Rails: " + error.message);
                    });
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>