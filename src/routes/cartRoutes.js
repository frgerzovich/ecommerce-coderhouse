import { Router } from "express";
const router = Router();
import {
  createCart,
  deleteCart,
  getCartProducts,
  addProductToCart,
  removeProductFromCart,
} from "../controllers/cartController.js";

router.post("/", createCart);
router.delete("/:id", deleteCart);
router.get("/:id/productos", getCartProducts);
router.post("/:id/productos", addProductToCart);
router.delete("/:id/productos/:product_id", removeProductFromCart);

export default router;
