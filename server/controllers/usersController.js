const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');
const User= require('../model/user');

async function signup(req, res){
    try{
        const{email,password}=req.body;
    const hashedpassword= bcrypt.hashSync(password, 8);
    await User.create({email,password:hashedpassword});
    res.sendStatus(200);
    }
    catch(err){
        res.sendStatus(400);
    }

    

}
async function login(req, res){
    try{
    const{email,password}=req.body;
    const user=await User.findOne({email})
    if(!user){
        return res.sendStatus(401)
    }

    const passwordMatch= bcrypt.compareSync(password, user.password);
   
    if(!passwordMatch){
        return res.sendStatus(401)
    }
    const exp= Date.now()+1000*60*60*24*30;
    const token = jwt.sign({ sub: user._id ,exp}, process.env.Secret);
    res.cookie("Authorization",token, {
        expires: new Date(exp),
        httpOnly:true,
        sameSite:'lax',
        secure: process.env.NODE_ENV==='production',
    })
    res.sendStatus(200)
}catch(err){
    res.sendStatus(400)
}}
function checkAuth(req, res){try{res.sendStatus(200);}
catch(err){
    console.log(err);
}
    
    

}
function logout(req, res){
    try{
    res.clearCookie("Authorization")
    res.sendStatus(200);
    
}catch(err){
    res.sendStatus(400);}
}
module.exports={signup ,login,logout,checkAuth};