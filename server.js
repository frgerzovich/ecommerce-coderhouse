const express = require("express");
const env = require("dotenv").config();
const router = require("./src/routes/index");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
