<template>
    <div id='product'>
        <h2>EditProduct</h2>
        <div class="product" v-if="product">
            Name: <input type="text" v-model="product.name" /> <br>
            Price: <input type="number" v-model="product.price" /> <br>
            Description: <input type="textarea" v-model="product.description" />
            <p>Hier klicken > <a @click="editProduct">{{ product.name }} löschen?</a> <</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'EditProduct',
        data () {
            return {
                product: Object.assign({}, this.editProduct()),
                errors: []
            }
        },
        created () {
        },
        methods: {
            editProduct: function () {
                this.fetch()
                if(this.$store.getters.getProduct(this.$route.params.id)) {
                    console.log("asd")
                    return this.$store.getters.getProduct(this.$route.params.id)
                } else {
                    console.log("cdefg")
                    setTimeout(() => {
                        return this.$store.getters.getProduct(this.$route.params.id)
                    }, 3000)
                }

            },
            fetch: function() {
                return this.$store.dispatch('fetchProduct', this.$route.params.id)
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