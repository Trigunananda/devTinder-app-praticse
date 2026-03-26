const express = require("express");
const app = express();

//Specific routes first, dynamic routes later
// Express checks routes top to bottom
app.get("/hello/2", (req, res) => {
  res.send("Hello 2 Page");
});

app.get("/hello/:id", (req, res) => {
  res.send("Dynamic Route");
});

//this will handle only get call to user
app.get("/user",(req,res)=>{
    res.send({firstName:"NodeJs",lastName:"Backend"});
})

app.post("/user",(req,res)=>{
    //saving data to DB
    res.send("Data Successfully Saved to the DB");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully");
})

// Start the server
app.listen(6666,()=>{
console.log("Server Listening on Port 6666")
})