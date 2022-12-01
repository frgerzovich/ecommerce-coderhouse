import mongoose from "mongoose";

const User = mongoose.model("Users", {
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
});

export default User;
