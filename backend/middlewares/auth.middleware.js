const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports.authUser=async function(req,res,next){
    const token= req.cookies.token || req.headers.authorization.split(' ');
    // Khudse try || token[0]!== 'Bearer'
    if(!token || token[0]!== 'Bearer'){
        return res.status(401).json({error:'Access denied'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);

        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({error:'Access denied'});
    }
}