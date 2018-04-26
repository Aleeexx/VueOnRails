<template>
    <div id='product'>
        <h2>NewProduct</h2>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="product.name" placeholder="Gib den Product Namen ein"> <br>
            <input type="number" v-model="product.price" placeholder="Gib den Price ein"> <br>
            <input type="textarea" v-model="product.description" placeholder="Gib die Product description ein"> <br>
            <button type="submit">Erstellen</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'newProduct',
        data () {
            return {
                product: {
                    name: "",
                    price: 0.00,
                    description: ""
                },
                errors: []
            }
        },
        methods: {
            onSubmit: function() {
                this.$store.dispatch('create', this.product)
            }
        }
    }
</script>

<style scoped>
    input {
        outline: none;
        padding: 10px 15px;
        text-align: center;
        margin-bottom: 5px;
    }
</style>