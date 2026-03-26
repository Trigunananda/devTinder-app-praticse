const express = require("express");
const app = express();

// Define specific routes with app.get()
app.get("/",(req,res)=>{
    res.send("Welcome to the NodeJs");
})
app.get("/hello",(req,res)=>{
    res.send("Hello From the Server")
})
app.get("/test",( req,res)=>{
   res.send("Test the app Thoroughly")
})

// Start the server
app.listen(6666,()=>{
console.log("Server Listening on Port 6666")
})