const express = require("express");
const app = express();

// Big Picture Flow
// Request → Middleware → Route → Response
// Request → adminAuth → next() → route → response
// 👉 “app.use() is used for middleware, while app.get()/post() defines actual routes.”

// TO check API in postman
// http://localhost:6666/admin/getAllData
// http://localhost:6666/admin/deleteUser
// http://localhost:6666/user

const {adminAuth,userAuth} = require("./middlewares/auth");
app.use("/admin",adminAuth);

app.get("/user",userAuth,(req,res)=>{
    res.send("User Data Sent")
});

app.get("/admin/getAllData",(req,res)=>{
    console.log("All data sent");
    res.send("get all data");
})
app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a User");
});


app.listen(6666, () => {
    console.log("Server Listening on Port 6666");
});
