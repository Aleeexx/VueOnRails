<template>
    <div id='product'>
        <h2>ShowProduct</h2>
        <div class="product" v-if="product">
            <p>Name: {{ product.name }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import { mapGetters } from "vuex"

    export default {
        name: 'ShowProduct',
        data () {
            return {
                errors: []
            }
        },
        created () {
            this.$store.dispatch('fetchProduct', this.$route.params.id)
        },
        computed: {
            ...mapGetters(['getProduct']),
            product: function () {
                return this.getProduct
            },
        },
        methods: {
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>