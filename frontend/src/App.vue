<template>
  <div id="app">
    <h1>Tienda de Productos Hechos a Mano</h1>
    <ProductsView />
  </div>
</template>

<script>
import ProductsView from "@/views/ProductsView.vue";

export default {
  name: "App",
  components: {
    ProductsView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
