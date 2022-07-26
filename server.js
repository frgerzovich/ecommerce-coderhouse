const express = require("express");
const env = require("dotenv").config();
const router = require("./src/routes/index");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
mongoConnection();

app.use(express.json());
app.use("/", router);

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
