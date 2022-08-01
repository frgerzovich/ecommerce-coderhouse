import Container from "../../containers/containerFirebase.js";

class FirebaseProductDao extends Container {
  constructor() {
    super("products");
  }
}

export default FirebaseProductDao;
