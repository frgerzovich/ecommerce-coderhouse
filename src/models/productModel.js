import mongoose from "mongoose";

const productsCollection = "products";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  stock: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Product = mongoose.model(productsCollection, ProductSchema);

export default Product;
