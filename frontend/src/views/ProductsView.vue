<template>
  <div class="products-view">
    <h2>Productos disponibles</h2>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("/products")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
};
</script>

<style>
/* Estilos para la vista ProductsView */
.products-view {
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
