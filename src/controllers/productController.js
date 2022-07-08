const productsApi = require("../productsApi");

const api = new productsApi("products.json");

const get = async (req, res) => {
  if (req.params.id) {
    try {
      const id = Number(req.params.id);
      const product = await api.getById(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const products = await api.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await api.createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = await api.updateProduct(id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = await api.deleteProduct(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  createProduct,
  editProduct,
  deleteProduct,
};
