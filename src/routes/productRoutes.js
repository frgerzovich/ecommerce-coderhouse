import { Router } from "express";
const router = Router();
import {
  get,
  createProduct,
  editProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.get("/:id?", get);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
