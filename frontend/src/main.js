import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";

// Configurar Axios para usar la URL del backend
axios.defaults.baseURL = "http://localhost:5000"; // Cambiar el puerto si es necesario

createApp(App).mount("#app");
