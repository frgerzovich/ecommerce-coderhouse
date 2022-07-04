const fs = require("fs");

class Api {
  constructor(fileName) {
    this.fileName = fileName;
    this.currentId = 1;
    this.admin = true;
  }

  getAll() {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  }

  getById(id) {
    if (isNaN(id)) {
      const error = new Error("El id debe ser un número");
      error.statusCode = 400;
      throw error;
    }
    const products = this.getAll();
    const product = products.find((product) => product.id === id);
    if (!product) {
      const error = new Error("El producto no existe");
      error.statusCode = 404;
      throw error;
    }
    return product;
  }

  async createProduct(product) {
    if (!this.admin) {
      throw new Error("No tenés el permiso para realizar esta acción!");
    } else {
      try {
        product.id = this.currentId;
        product.date = new Date.now();
        this.currentId++;
        const products = this.getAll();
        products.push(product);
        await fs.writeFileSync(this.fileName, JSON.stringify(products));
        return product;
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  async updateProduct(id, editedProduct) {
    if (!this.admin) {
      throw new Error("No tenés el permiso para realizar esta acción!");
    } else {
      try {
        const products = this.getAll();
        const productToUpdate = products.find((product) => product.id === id);

        if (!productToUpdate) {
          const error = new Error("El producto no existe");
          error.statusCode = 404;
          throw error;
        }
        const editedProducts = products.map((product) => {
          if (product.id === id) {
            return {
              id,
              date,
              name: editedProduct.name,
              price: editedProduct.price,
              thumbnail: editedProduct.thumbnail,
            };
          } else {
            return product;
          }
        });

        await fs.writeFileSync(this.fileName, JSON.stringify(editedProducts));
        return editedProduct;
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  async deleteProduct(id) {
    if (!this.admin) {
      throw new Error("No tenés el permiso para realizar esta acción!");
    } else {
      try {
        const products = this.getAll();
        const product = products.find((product) => product.id === id);
        if (!product) {
          const error = new Error("El producto no existe");
          error.statusCode = 404;
          throw error;
        }
        const editedProducts = products.filter((product) => product.id !== id);

        await fs.writeFileSync(this.fileName, JSON.stringify(editedProducts));
        return products;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}
module.exports = Api;
