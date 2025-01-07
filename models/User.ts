import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

const User = models?.User || model("User", userSchema);

export default User;
