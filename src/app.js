const express = require("express");
const app = express();
// 🔥 Middleware to read JSON
app.use(express.json());

const connectDB = require("./config/database");
const User = require("./models/user");

const asyncHandler = require("./middlewares/asyncHandler");
const errorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");


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

  // if (!savedUser) {
  //   throw new AppError("User not created", 400);
  // }

  res.status(201).json({
    success: true,
    message: "User Added Successfully",
    data: savedUser
  });
}));

// findOne → one record,First match only
// find → multiple records (array)
// Get User by Email
app.get("/user",asyncHandler(async(req,res)=>{
  const {emailId} = req.query;
  if(!emailId){
    throw new AppError("Email is requires",400)
  }
  const user = await User.findOne({emailId});
  if(!user){
    throw new AppError("User Not Found",404)
  }
  res.json({
    success:true,
    data:user
  });
}));

// Feed API (Get All Users)
app.get("/feed",asyncHandler(async(req,res)=>{
  const users = await User.find({});
  if(users.length === 0){
    throw new AppError("No Users FOund",404)
  }
  res.json({
    success:true,
    results:users.length,
    data:users
  })
}))

// findOneAndUpdate (PATCH API)
// Update using any field (like email)
app.patch("/user",asyncHandler(async(req,res)=>{
  const {emailId,firstName}=req.body;
  if(!emailId){
    throw new AppError("Email is Required",400);
  }

  const user = await User.findOneAndUpdate(
    {emailId},
    {firstName},
    { returnDocument: "after" }
  );

  if(!user){
    throw new AppError("User NOt Found",404);
  }

  res.json({
    success:true,
    message: "User updated",
    data: user
  })
}))

// findByIdAndUpdate (PATCH API)
// Update using _id (most common in real apps)
app.patch("/user/:id", asyncHandler(async(req,res)=>{
  console.log("req.params",req.params.id)
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: "after" }
  );
  if(!user){
    throw new AppError("User Not Found",404)
  }
  res.json({
    success:true,
    message:"User Updated",
    data:user
  })
}))

// findByIdAndDelete (DELETE API)
// Delete user using ID
app.delete("/user/:id",asyncHandler(async(req,res)=>{
  const user = await User.findByIdAndDelete(req.params.id);

  if(!user){
    throw new AppError("User Not Found",404)
  }
  res.json({
    success:true,
    message:"User Deleted"
  })
}))

// ✅ findByIdAndUpdate
// ✔ Partial update
// ✔ Only updates given fields
// ✔ Keeps existing data
app.put("/user/:id", asyncHandler(async(req,res)=>{
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
    // Returns updated data
    returnDocument:"after",
    //  With runValidators → throws error
    runValidators: true
    }
  );
  if(!user){
    throw new AppError("User Not Found",404)
  }
  res.json({
    success:true,
    message:"user updated partially",
    data:user
  })
}))


// ✅ findOneAndReplace
// ✔ Full replace
// ✔ Removes old data
// ✔ Replaces entire document
// Replace entire Documents,full replace removes old data
app.put("/user/:id",asyncHandler(async(req,res)=>{
const updateUser = await User.findOneAndReplace(
  // findOneAndReplace must be an object so that 
  {_id:req.params.id},
  req.body,
  {
    returnDocument:"after",
    runValidators:true
  }
);
if(!updateUser){
  throw new AppError("User Not Found")
}
res.json({
  success:true,
  message:"User Replaced",
  data:updateUser
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

