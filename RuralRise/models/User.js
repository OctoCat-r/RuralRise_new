import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  password: String,
  DOB: Date,
  address: String,
  category: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
