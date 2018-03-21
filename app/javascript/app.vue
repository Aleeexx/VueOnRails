<template>
  <div id="app">

  <h1>{{ message }}</h1>

  <router-link :to="{ name: 'ListProduct' }">ListProducts</router-link> |
  <router-link :to="{ name: 'Home' }">Home</router-link>
  <!--<router-link :to="{ name: 'NewProduct' }">NewProduct</router-link>-->
  <router-view/>


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

<style>
p {
  font-size: 2em;
  text-align: center;
}
</style>
