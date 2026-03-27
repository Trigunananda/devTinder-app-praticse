const express = require("express");
const app = express();

// Middleware runs top → bottom
// ❌ You cannot use res.send() twice
// 👉 ❌ You cannot call next() after res.send()
// What if next() is missing?
// 👉 ❌ Request will hang
// 👉 ❌ Next middleware will NOT run
// Simple Flow Diagram
// Request → 1 → 2 → 3 → 4 → Response

app.use("/user",(req,res,next)=>{
    console.log("Handling the route user 1");
    // res.send("Response1!!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route user 2");
    // res.send("Response2!!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route user 3");
    // res.send("Response3!!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route user 4");
    // 👉 Ends the request
    res.send("Response4!!!");
},
)

app.listen(6666, () => {
    console.log("Server Listening on Port 6666");
});