import express from "express";
import env from ("dotenv").config();
import router from "./src/routes/index";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 8080;
mongoConnection();

app.use(express.json());
app.use("/", router);

//conexión a la base de datos

async function mongoConnection() {
  const URL = "mongodb://localhost:27017/ecommerce";
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("mongodb connection established");
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
