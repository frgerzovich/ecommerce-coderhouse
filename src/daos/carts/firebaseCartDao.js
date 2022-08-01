import Container from "../../containers/containerFirebase.js";

class FirebaseCartDao extends Container {
  constructor() {
    super("carts");
  }
}

export default FirebaseCartDao;
