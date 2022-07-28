import router from ("express").Router();
import cartRouter from "./cartRoutes";
import productRouter from "./productRoutes";

router.use("/api/carrito", cartRouter);
router.use("/api/productos", productRouter);

export default router;
