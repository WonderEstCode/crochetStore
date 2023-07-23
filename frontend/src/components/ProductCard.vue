<!-- frontend/src/components/ProductCard.vue -->

<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="Product Image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Estilos para el componente ProductCard */
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
}

.product-card img {
  max-width: 100%;
}
</style>
