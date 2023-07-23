// Importar las dependencias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Crear una instancia de Express
const app = express();

// Middleware: Habilitar CORS
app.use(cors());

// Configurar el puerto del servidor
const port = process.env.PORT || 5000;

// Configurar las rutas del backend (lo haremos en el siguiente paso)

// Configurar la conexión a MongoDB
const dbURI = "mongodb://localhost:27017/crochet-store"; // Cambiar 'tienda-artesanal' por el nombre de tu base de datos
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Verificar la conexión a la base de datos
const db = mongoose.connection;
db.on("error", (error) => console.error("Error al conectar a MongoDB:", error));
db.once("open", () => console.log("Conexión exitosa a MongoDB"));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
