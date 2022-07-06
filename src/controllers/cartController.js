const cartApi = require("../cartApi");

const api = new cartApi("carts.json");

const createCart = async (req, res) => {
  try {
    const cart = await api.createCart();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const cart = await api.getById(id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const cart = await api.deleteCart(id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartProducts = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const cart = await api.getCartProducts(id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const cartId = Number(req.params.id);
    const productId = Number(req.body.productId);
    if (!productId) {
      res.status(400).json({ message: "El campo 'productId' es obligatorio" });
      return;
    }
    const cart = await api.addProductToCart(cartId, productId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProductFromCart = async (req, res) => {
  try {
    const cartId = Number(req.params.id);
    const productId = Number(req.params.productId);
    const cart = await api.removeProductFromCart(cartId, productId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getCartById,
  deleteCart,
  getCartProducts,
  addProductToCart,
  removeProductFromCart,
};
