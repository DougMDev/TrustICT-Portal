//Require the Mongoose Package
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      lowercase: true,
      required: [true, "First Name Can't Be Blank"],
      index: true,
    },
    lastName: {
      type: String,
      lowercase: true,
      required: [true, "Last Name Name Can't Be Blank"],
      index: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Email Can't Be Blank"],
      index: true,
    },
    site: {
      schoolName: String,
      role: String,
    },
    profileImage: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

mongoose.model("User", userSchema);
