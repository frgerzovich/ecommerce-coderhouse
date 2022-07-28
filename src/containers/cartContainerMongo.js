import fs from "fs";
import ProductsApi from "./containerMongo";
const productsApi = new ProductsApi("products.json");

class Api {
  constructor(fileName) {
    this.fileName = fileName;
    this.currentId = 1;
  }

  getAll() {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  }

  getById(id) {
    const carts = this.getAll();
    const cart = carts.find((cart) => cart.id === id);
    if (!cart) {
      const error = new Error("El carrito no existe");
      error.statusCode = 404;
      throw error;
    }
    return cart;
  }

  createCart() {
    const cart = {
      id: this.currentId,
      timestamp: Date.now(),
      products: [],
    };

    this.currentId++;
    const carts = this.getAll();
    carts.push(cart);
    fs.writeFileSync(this.fileName, JSON.stringify(carts));
    return cart;
  }

  async addProductToCart(cartId, productId) {
    try {
      const carts = this.getAll();
      const cart = carts.find((cart) => cart.id === cartId);
      if (!cart) {
        const error = new Error("El carrito no existe");
        error.statusCode = 404;
        throw error;
      }
      const product = productsApi.getById(productId);
      cart.products.push(product);
      fs.writeFileSync(this.fileName, JSON.stringify(carts));
      return cart;
    } catch (error) {
      throw error;
    }
  }

  async removeProductFromCart(cartId, productId) {
    const carts = this.getAll();
    const cart = carts.find((cart) => cart.id === cartId);
    if (!cart) {
      const error = new Error("El carrito no existe");
      error.statusCode = 404;
      throw error;
    }
    const products = cart.products;
    const product = products.find((product) => product.id === productId);
    if (!product) {
      const error = new Error("El producto no existe");
      error.statusCode = 404;
      throw error;
    }
    const index = cart.products.indexOf(product);
    cart.products.splice(index, 1);
    fs.writeFileSync(this.fileName, JSON.stringify(carts));
    return cart;
  }

  async deleteCart(cartId) {
    const carts = this.getAll();
    const cart = carts.find((cart) => cart.id === cartId);
    if (!cart) {
      const error = new Error("El carrito no existe");
      error.statusCode = 404;
      throw error;
    }
    const index = carts.indexOf(cart);
    carts.splice(index, 1);
    fs.writeFileSync(this.fileName, JSON.stringify(carts));
    return cart;
  }

  async getCardProducts(cartId) {
    const carts = this.getAll();
    const cart = carts.find((cart) => cart.id === cartId);
    if (!cart) {
      const error = new Error("El carrito no existe");
      error.statusCode = 404;
      throw error;
    }
    return cart.products;
  }
}

export default Api;
