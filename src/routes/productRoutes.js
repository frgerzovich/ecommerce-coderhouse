const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/:id?", productController.get);
router.post("/", productController.createProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
