import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./src/routes/index.js";
import mongoConnection from "./src/utils/dbConnection.js";
import passport from "./src/utils/passportConfig.js";
import session from "express-session";

import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

//conexion con la base de datos
mongoConnection();

app.use(express.json());
app.use("/", router);
app.use(
  session({
    cookie: {
      maxAge: 600000,
    },
    secret: "secreto",
    rolling: true,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
