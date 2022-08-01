import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 8080;

//conexion con la base de datos

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
