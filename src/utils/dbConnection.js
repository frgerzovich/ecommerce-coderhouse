import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function mongoConnection() {
  const URL = "mongodb://localhost:27017/ecommerce";
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongodb connection established");
}

export default mongoConnection;
