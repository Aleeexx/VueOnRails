<template>
    <div id='product'>
        <h2>ShowProduct</h2>

    </div>
</template>

<script>
    import axios from "axios"
    import { mapActions } from 'vuex'

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