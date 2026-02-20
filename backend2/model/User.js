import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: {
    type: String,
    required: [true, "Title is required"],
    select: false,
  },
  role: { type: String, default: "user" },
  
});

const User = mongoose.model("Users", userSchema);

export default User;
