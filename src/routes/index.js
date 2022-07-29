import { Router } from "express";
const router = Router();
import cartRouter from "./cartRoutes.js";
import productRouter from "./productRoutes.js";

router.use("/api/carrito", cartRouter);
router.use("/api/productos", productRouter);

export default router;
