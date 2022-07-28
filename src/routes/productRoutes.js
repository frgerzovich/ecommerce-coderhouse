import router from ("express").Router();
import productController from "../controllers/productController";

router.get("/:id?", productController.get);
router.post("/", productController.createProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
