const jwt= require("jsonwebtoken");

const verifyToken=(req, res, next) =>{
const bearerHeader=req.header("Authorization");
if(typeof bearerHeader !== "undefined"){
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken,"secretKey",(error,authData)=>{
        if(error){
			console.log(error)
            res.status(403).json({error:"No tienes autorizacion para realizar esta acción"});
        }else{
            next();
        }
    });
}else{
    res.status(403).json({error:"Necesita usar un token de autorizacioón"});
}
}
module.exports=verifyToken;