const express = require("express");
const app = express();

// Express supports dynamic routing using params, query strings for filtering, and
// pattern-based routing using special characters and regex

//2. Special Characters in Routes
// Optional ?  Old Express (v4):"/ab?c", New Express (v5):/ab?c/  Matches: - /ac,/abc
app.get(/ab?c/, (req, res) => {
    res.send({ firstName: "ab", lastName: "?c" });
});

// + → repeat means One or more, Matches: - /abc,/abbc,/abbbc
app.get(/ab+c/, (req,res)=>{
    res.send({ firstName: "ab", lastName: "+c" });
});

// * → Anything,  Matches: - /abcd,/abxyzcd,/ab123cd
app.get(/ab*cd/,(req,res)=>{
    res,send({ firstName: "ab",lastName: "*cd"})
})

// () → Grouping, Matches: - /abe,/abcde 
app.get(/ab(cd)?e/,(req,res)=>{
    res.send({ firstName: "ab",lastName: "*cd"})
})

// 3. Regex Routes
// Matches any route containing a,  Matches: - /apple,/cat,/bat
app.get(/a/, (req, res) => {
    res.send({firstName:"Nate",lastName:"Diaz"})
})

// $ = ends with,.* = anything before , Matches: - /butterfly ,/dragonfly 
app.get(/.*fly$/, (req, res) => {
    res.send({firstName:"Lebron",lastName:"James"})
})

// 4. Query Params, Matches: - /user?name=tn&age=25
app.get("/user", (req, res) => {
    console.log(req.query);
    res.send({ firstName: "Express", lastName: "Js" });
});
// 5. Dynamic Routes, Matches: - user/07/swain/swain@123
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({ firstName: "tn", lastName: "swain" });
});


app.listen(6666, () => {
    console.log("Server Listening on Port 6666");
});