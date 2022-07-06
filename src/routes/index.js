const router = require("express").Router();
const cartRouter = require("./cartRoutes");
const productRouter = require("./productRoutes");

router.use("/api/carrito", cartRouter);
router.use("/api/productos", productRouter);

module.exports = router;
