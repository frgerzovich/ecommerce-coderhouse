const router = require("express").Router();
const chartRouter = require("./chartRoutes");
const productRouter = require("./productRoutes");

router.use("/api/carrito", chartRouter);
router.use("/api/productos", productRouter);

module.exports = router;
