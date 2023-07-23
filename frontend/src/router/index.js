// frontend/src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "@/views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ProductsView,
  },
  // Otras rutas, si las tienes, pueden ir aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
