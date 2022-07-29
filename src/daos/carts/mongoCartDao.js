import Container from "../../containers/containerMongo.js";

class MongoCartDao extends Container {
  constructor() {
    super("carts", {
      products: { type: Array, required: true },
      timestamp: { type: Date, default: Date.now },
    });
  }
}

export default MongoCartDao;
