const express = require("express");
const app = express();

const connectDB = require("./config/database");
const User = require("./models/user");

const asyncHandler = require("./middlewares/asyncHandler");
const errorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");

// 🔥 Middleware to read JSON
app.use(express.json());
app.post("/signup", asyncHandler(async (req, res) => {
const {firstName,lastName,emailId,password}=req.body;

// Basic Validation
if(!firstName || !lastName || !emailId ){
  throw new AppError("Required Fields Missing",400)
}
  const user = new User({
    firstName,
    lastName,
    emailId,
    password,
  });

  const savedUser = await user.save();

  if (!savedUser) {
    throw new AppError("User not created", 400);
  }

  res.status(201).json({
    success: true,
    message: "User Added Successfully",
    data: savedUser
  });
}));

// 🔥 IMPORTANT: Error handler must be LAST
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(6666, () => {
      console.log("Server Listening on Port 6666");
    });
  })
  .catch(() => {
    console.error("Database cannot be established");
  })

