<template>
    <div id='product'>
        <h2>EditProduct</h2>
        <form class="product" v-if="product" @submit.prevent="onSubmit">
            Name: <input type="text" v-model="product.name" /> <br>
            Price: <input type="number" v-model="product.price" /> <br>
            Description: <input type="textarea" v-model="product.description" />
            <p>Hier klicken > <a @click="onDelete">{{ product.name }} löschen?</a> <</p>
            <p>Hier klicken > <button type="submit">{{ product.name }} bearbeiten?</button> <</p>
        </form>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        name: 'editProduct',
        data () {
            return {
                product: {},
                errors: []
            }
        },
        created () {
            this.$store.dispatch('fetchProduct', this.$route.params.id).then( () => {
                this.product = this.getProduct
            })
        },
        computed: {
            ...mapGetters(['getProduct']),
        },
        methods: {
            onSubmit: function() {
                this.$store.dispatch('update', this.product)
            },
            onDelete: function() {
                this.$store.dispatch('delete', this.product.id)
            }
        }
    }
</script>

<style scoped>
</style>