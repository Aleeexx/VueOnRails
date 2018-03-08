<template>
    <div id='product'>
        <h2>NewProduct</h2>
        Name: {{ newProductName }} <br>
        Text: {{ newProductText }} <br>
        <form @submit.prevent="onSubmit">
            <input v-model="newProductName" placeholder="Gib den Product Namen ein"> <br>
            <input v-model="newProductText" placeholder="Gib den Product Text ein"> <br>
            <button type="submit">Erstellen</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'NewProduct',
        data () {
            return {
                newProductName: "",
                newProductText: "",
                errors: []
            }
        },
        methods: {
            onSubmit () {
                const postData = {
                    name: this.newProductName,
                    text: this.newProductText,
                    authenticity_token: document.querySelector("meta[name='csrf-token']").getAttribute("content")
                };
                axios.post('/products.json', postData)
                    .then((response) => {
                        console.log(response)
                        this.$router.push('/products')
                    })
                    .catch((error) => {
                        this.errors.push(error);
                        console.log("[ERROR - NewProduct] Post data to Rails: " + error.message);
                    });
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