<template>
  <div id="app">

    <router-link :to="{ name: 'ListProduct' }">ListProducts</router-link>
    <router-link :to="{ name: 'EditProduct', params: {id: 1} }">EditProducts</router-link>
    <!--<router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'NewProduct' }">NewProduct</router-link>-->
    <router-view/>


    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "App.vue"
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
