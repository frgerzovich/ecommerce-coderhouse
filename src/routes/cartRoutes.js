const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.get("/:id", cartController.getCartById);
router.post("/", cartController.createCart);
router.delete("/:id", cartController.deleteCart);
router.get("/:id/productos", cartController.getCartProducts);
router.post("/:id/productos", cartController.addProductToCart);
router.delete(
  "/:id/productos/:product_id",
  cartController.removeProductFromCart
);

module.exports = router;
