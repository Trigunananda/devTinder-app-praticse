const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [2, "First name must be at least 2 characters"],
    maxLength: [50, "First name cannot exceed 50 characters"],
    trim: true
  },

  lastName: {
    type: String,
    minLength: [2, "Last name must be at least 2 characters"],
    maxLength: [50, "Last name cannot exceed 50 characters"],
    trim: true
  },

  emailId: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password must be at least 6 characters"],
    maxLength: [20, "Password cannot exceed 20 characters"]
  },

  age: {
    type: Number, // ✅ FIXED
    min: [18, "Age must be at least 18"]
  },

  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"],
      message: "Gender is not valid"
    }
  },

  photoUrl: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBnJ1jac5WWtVhWh-XPZqN8bglxnDy3bURim1BiRPikxTcyexME-WDF1pYw&s"
  },

  about: {
    type: String,
    default: "This is a default about of the User"
  },

  skills: {
    type: [String],
    default: []
  }

}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;