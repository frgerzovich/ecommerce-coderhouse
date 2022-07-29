import mongoose from "mongoose";

class Container {
  constructor(collectionName, schema) {
    this.collection = mongoose.model(collectionName, schema);
  }

  async getAll() {
    try {
      const allItems = await this.collection.find({}, { __v: 0 });
      if (!allItems) {
        const error = new Error("No hay productos");
        error.statusCode = 404;
        throw error;
      }
      return allItems;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const item = await this.collection.findById(id, { __v: 0 });
      if (!item) {
        const error = new Error("El producto no existe");
        error.statusCode = 404;
        throw error;
      }
      return item;
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
      await this.collection.findByIdAndUpdate(id, item);
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
      await this.collection.findByIdAndDelete(id);
      console.log("Eliminación completada exitosamente");
    } catch (error) {
      throw error;
    }
  }

  async createCart() {
    try {
      const newCart = { timestamp: "", products: [] };
      const savedCart = await this.save(newCart);
      return savedCart;
    } catch (error) {
      throw error;
    }
  }

  async addProductToCart(cartId, productId, product) {
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

      await this.update(cartId, cart);
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
      console.log(products);
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
      await this.update(cartId, cart);
      return cart;
    } catch (error) {
      throw error;
    }
  }
}
export default Container;
