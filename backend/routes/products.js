// backend/routes/products.js

const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

// Ruta para obtener todos los productos
router.get("/products", async (_req, res) => {
  try {
    // Obtener todos los productos desde la base de datos
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

// Ruta para crear un nuevo producto
router.post("/products", async (req, res) => {
  try {
    // Crear un nuevo producto en la base de datos utilizando el modelo Product
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

// Ruta para obtener un producto específico por su ID
router.get("/products/:id", async (req, res) => {
  try {
    // Obtener un producto específico desde la base de datos por su ID
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

// Ruta para actualizar un producto específico por su ID
router.put("/products/:id", async (req, res) => {
  try {
    // Actualizar un producto específico en la base de datos por su ID
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

// Ruta para eliminar un producto específico por su ID
router.delete("/products/:id", async (req, res) => {
  try {
    // Eliminar un producto específico de la base de datos por su ID
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

module.exports = router;
