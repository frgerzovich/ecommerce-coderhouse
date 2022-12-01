import { Router } from "express";
const router = Router();
import cartRouter from "./cartRoutes.js";
import productRouter from "./productRoutes.js";
import loginRouter from "./loginRoutes.js";
import signupRouter from "./signupRoutes.js";

router.use("/api/carrito", cartRouter);
router.use("/api/productos", productRouter);
router.use("/signup", signupRouter);
router.use("/login", loginRouter);

export default router;
