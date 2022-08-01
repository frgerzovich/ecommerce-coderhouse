import admin from "firebase-admin";
import dbConfig from "../utils/dbConfig.js";

admin.initializeApp({
  credential: admin.credential.cert(dbConfig),
  databaseURL: "https://ecommerce-coderhouse-a947c.firebaseio.com",
});

const db = admin.firestore();
console.log("firebase connection established");

class Container {
  constructor(collectionName) {
    this.collection = db.collection(collectionName);
  }

  async getAll() {
    try {
      const allItems = await this.collection.get();
      const allItemsArray = allItems.docs.map((item) => item.data());
      if (!allItems) {
        const error = new Error("No hay productos");
        error.statusCode = 404;
        throw error;
      }
      return allItemsArray;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const item = await this.collection.doc(id).get();
      if (!item) {
        const error = new Error("El producto no existe");
        error.statusCode = 404;
        throw error;
      }
      const itemData = item.data();
      return itemData;
    } catch (error) {
      throw error;
    }
  }

  async save(item) {
    try {
      const newItem = new this.collection(item);
      await newItem.save();
      return newItem;
    } catch (error) {
      throw error;
    }
  }

  async update(id, item) {
    try {
      await this.collection.doc(id).update(item);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        const error = new Error("El id no puede ser nulo");
        error.statusCode = 404;
        throw error;
      }
      await this.collection.doc(id).delete();
      console.log("El elemento ha sido eliminado exitosamente");
    } catch (error) {
      throw error;
    }
  }

  async createCart() {
    try {
      const newCart = { timestamp: "", products: [] };
      newCart.timestamp = new Date().toLocaleString();
      const savedCart = await this.collection.add(newCart);
      return savedCart;
    } catch (error) {
      throw error;
    }
  }

  async addProductToCart(cartId, product) {
    try {
      const cart = await this.getById(cartId);
      if (!cart) {
        const error = new Error("El carrito no existe");
        error.statusCode = 404;
        throw error;
      }
      if (!product) {
        const error = new Error("El producto no existe");
        error.statusCode = 404;
        throw error;
      }
      cart.products.push(product);
      await this.collection.doc(cartId).update(cart);
      return cart;
    } catch (error) {
      throw error;
    }
  }

  async removeProductFromCart(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (!cart) {
        const error = new Error("El carrito no existe");
        error.statusCode = 404;
        throw error;
      }
      const products = cart.products;
      const product = products.find(
        (product) => product._id.toString() === productId
      );
      if (!product) {
        const error = new Error("El producto no existe");
        error.statusCode = 404;
        throw error;
      }
      const index = products.indexOf(product);
      products.splice(index, 1);
      await this.collection.doc(cartId).update(cart);
      console.log("Producto eliminado exitosamente");
      return cart;
    } catch (error) {
      throw error;
    }
  }
}

export default Container;
