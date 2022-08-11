import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  screen_name: String,
  bio: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
