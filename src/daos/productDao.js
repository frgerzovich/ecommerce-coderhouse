import Container from "../containers/containerMongo.js";

class MongoProductDao extends Container {
  constructor() {
    super("products", {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      thumbnail: { type: String, required: true },
      stock: { type: Number, required: true },
      timestamp: { type: Date, default: Date.now },
    });
  }
}

export default MongoProductDao;
