const mongoose = require("mongoose");

const cartsCollection = "carts";

const CartSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "products" }
    }
  ]
});

module.exports = mongoose.model(cartsCollection, CartSchema);
