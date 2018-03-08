<template>
    <div id='product'>
        <h2>ShowProduct</h2>
        Name: {{ product.name }} <br>
        Text: {{ product.text }}
        <router-link :to="{ name: 'EditProduct' }">Bearbeite {{ product.name }} </router-link>

    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'ShowProduct',
        data () {
            return {
                product: {},
                errors: []
            }
        },
        created () {

        },
        methods: {
            getPrasdasdasdoduct() {
                axios.get(`/products/${this.$route.params.id}.json`)
                    .then((response) => {
                        this.product = response.data;
                    })
                    .catch((error) => {
                        this.errors.push(error);
                        console.log("[ERROR - ShowProduct ] Fetch data from Rails: " + error.message);
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