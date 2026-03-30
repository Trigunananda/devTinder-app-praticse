const express = require("express");
const app = express();

const connectDB = require("./config/database");
const User = require("./models/user");

const asyncHandler = require("./middlewares/asyncHandler");
const errorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");

app.post("/signup", asyncHandler(async (req, res) => {

  const user = new User({
    firstName: "Balia",
    lastName: "Swain",
    emailId: "balia.com",
    password: "balia123",
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

