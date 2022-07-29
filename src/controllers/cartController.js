import { cartDao, productDao } from "../daos/index.js";

const createCart = async (req, res) => {
  try {
    const cart = await cartDao.createCart();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await cartDao.delete(id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await cartDao.getById(id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const productId = req.body.productId;
    const product = await productDao.getById(productId);
    if (!productId) {
      res.status(400).json({ message: "El campo 'productId' es obligatorio" });
      return;
    }
    const cart = await cartDao.addProductToCart(cartId, productId, product);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProductFromCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const productId = req.params.product_id;
    const cart = await cartDao.removeProductFromCart(cartId, productId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createCart,
  deleteCart,
  getCartProducts,
  addProductToCart,
  removeProductFromCart,
};
