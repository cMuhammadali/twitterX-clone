import mongose from "mongoose";

const UserSchema = new mongose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    coverImage: String,
    profileImage: String,
  },
  {
    timestamps: true,
  }
);

const User = mongose.models.User || mongose.model("User", UserSchema);
export default User;
