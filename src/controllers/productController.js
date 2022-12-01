import productDao from "../daos/productDao.js";

const get = async (req, res) => {
  if (req.params.id) {
    try {
      const id = req.params.id;
      const product = await productDao.getById(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const products = await productDao.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productDao.save(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productDao.update(id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productDao.delete(id);
    res
      .send("El producto ha sido eliminado exitosamente")
      .status(200)
      .json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { get, createProduct, editProduct, deleteProduct };
