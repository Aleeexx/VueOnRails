<template>
    <div id="listproduct">
        <h2>ListProduct</h2>
        <router-link :to="{ name: 'newProduct' }">Neues Product</router-link>

        <loading v-if="isLoading"></loading>

        <div class="products clearfix">
            <div v-for="product in products" v-if="!isLoading" class="product-wrapper">
                <div class="product">
                    <div class="product-content">
                        <p>Name: {{ product.name }}</p>
                        <p>Price: {{ product.price }}</p>
                        <p>Description: {{ product.description }}</p>
                        <div class="product-tools">
                            <productTool :routerName="'showProduct'"
                                         :routerParams="{ id: product.id }"
                                         :icon="'link'"
                                         :label="'Mehr erfahren'">
                            </productTool>
                            <productTool :routerName="'editProduct'"
                                         :routerParams="{ id: product.id }"
                                         :icon="'edit'"
                                         :label="'Bearbeiten'">
                            </productTool>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import Loading from "../loading";
    import productTool from "./productTool";

    export default {
        components: {
            Loading,
            productTool
        },
        name: 'listProduct',
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
                return this.getLoading
            }
        }
    }
</script>

<style scoped>
    .products {

    }
    .product-wrapper {
        position: relative;
        float: left;
        width: calc(100% / 3);
    }
    .product {
        padding: .75em;
    }
    .product-content {
        position: relative;
        min-height: 250px;
        padding: .75em;

        border: 1px solid #CCC;
        border-radius: .3em;
    }
    .product-tools {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: .3em 0;
    }

</style>
