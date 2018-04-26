<template>
  <div id="app">

  <h1>{{ message }}</h1>

  <router-link :to="{ name: 'listProduct' }">ListProducts</router-link> |
  <router-link :to="{ name: 'Home' }">Home</router-link>
  <!--<router-link :to="{ name: 'newProduct' }">NewProduct</router-link>-->
  <router-view/>


  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "App"
    }
  }
}
</script>

<style>
  .clearfix::after {
    content: "";
    clear: both;
    display: block;
  }
</style>
