// Middleware functions validate requests before reaching routes. If validation passes, next() is called, otherwise the request is terminated
const adminAuth = (req,res,next)=>{
    console.log("Admin auth is getting checked");
    const token = "xyz"
    const isAdminAuthorized = token === "xyz";
    if(isAdminAuthorized){
     next()
    }else{
        res.status(401).send("Unauthorized Request")
    }
}


const userAuth = (req, res, next) => {
    console.log("Admin auth is getting checked")
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (isAdminAuthorized) {
        next()
    } else {
        res.status(401).send("Unauthorized request")
    }
}
module.exports = {adminAuth,userAuth}