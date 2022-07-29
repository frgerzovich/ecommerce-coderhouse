import dotenv from "dotenv";
dotenv.config();

let cartDao;
let productDao;

switch (process.env.DATABASE) {
  case "mongo":
    const { default: MongoCartDao } = await import("./carts/mongoCartDao.js");
    const { default: MongoProductDao } = await import(
      "./products/mongoProductDao.js"
    );
    cartDao = new MongoCartDao();
    productDao = new MongoProductDao();
    break;
  case "firebase":
    //acá pondré la lógica de firebase!
    break;
}

export { productDao, cartDao };
