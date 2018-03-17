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
    export default {
        name: 'EditProduct',
        data () {
            return {
                product: null,
                errors: []
            }
        },
        created () {
            this.$store.dispatch('fetchProduct', this.$route.params.id).then(() => {
                this.product = this.$store.getters.getProduct(this.$route.params.id)
            })
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
    p {
        font-size: 2em;
        text-align: center;
    }
</style>