const jwt=require('jsonwebtoken');
const User=require('../model/user')
async function requireAuth(req,res,next){
    try{
    //read token from cookie
   const token= req.cookies.Authorization;
//decode token
const  decoded=jwt.verify(token,process.env.Secret)
if(Date.now()>decoded.exp){
    return res.sendStatus(401);
}
//find user
const user= await User.findById(decoded.sub)
if(!user)
{
    return res.sendStatus(401);
}
//attach user to req
req.user=user;
    next();
}catch(err){
    res.sendStatus(401)
}
}
module.exports=requireAuth;