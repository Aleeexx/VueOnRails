<template>
    <div id='product'>
        <h2>ShowProduct</h2>

        <loading v-if="isLoading"></loading>

        <div class="product" v-if="product.name !== '' && !isLoading">
            <p>Name: {{ product.name }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import { mapGetters } from "vuex"
    import Loading from "../loading";

    export default {
        components: {Loading},
        name: 'showProduct',
        data () {
            return {
                errors: []
            }
        },
        created () {
            this.$store.dispatch('fetchProduct', this.$route.params.id)
        },
        computed: {
            ...mapGetters(['getProduct', 'getLoading']),
            product: function () {
                return this.getProduct
            },
            isLoading: function () {
                return this.getLoading
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
</style>