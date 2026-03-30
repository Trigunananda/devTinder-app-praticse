const express = require("express");
const app = express();

const asyncHandler = require("./middlewares/asyncHandler");
const errorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");
// “Express uses error-handling middleware with four parameters to centrally manage errors. Errors are passed using next(err).”

// 🧠 Simple Flow
// Request → Route → asyncHandler → Error occurs → next(err) → errorHandler → Response



// Two ways to handle errors:
// ✅ 1. Local (try-catch)
// Used inside route
// Avoid too many try-catch
// Handles error immediately
// ✅ 2. Global (middleware)
// Handles all errors centrally
// Cleaner approach
// Use global error handler

// try-catch
app.get("/getUserData",(req,res)=>{
    try {
        throw new Error("error")
        // 👉 res.send("User data sent") will never run
        res.send("User Data Sent")
    } catch (error) {
       res.status(500).send("Some error occur contact to the support Team") 
    }
})

// 🔥 1. Problem with Async Code (VERY IMPORTANT)
// ❌ Normal try-catch DOES NOT work for async
// app.get("/test", async (req, res, next) => {
//   try {
//     throw new Error("Something went wrong");
//   } catch (err) {
//     next(err); // ✅ pass to global handler
//   }
// });


// 2. Global Error Handler (Middleware)
// app.get("/getUserDataGlobal",(req,res,next)=>{
//     const error = new Error("Something Failed")
//     next(error)
// })


// Use AppError when YOU want to control the error
// Use asyncHandler to catch errors
// Use errorHandler to send response
// Sample route
app.get("/user", asyncHandler(async (req, res) => {
  // Normally:
  // 👉 Problem:
// ❌ No status code (always 500)
// ❌ Not structured
  // throw new Error("User not found");
  
  // simulate error
//   ✔ More control
// ✔ Better API response
  throw new AppError("User not found", 404);
}));

// Normal route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// 🔥 IMPORTANT: Error handler must be LAST
app.use(errorHandler);


app.listen(6666, () => {
    console.log("Server Listening on Port 6666");
});
