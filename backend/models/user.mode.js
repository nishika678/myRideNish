const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,'First Name must be a atleast 3 character or longer']
        },
        lastname:{
            type:String,
            required:true,
            minLength:[3,'Last Name must be a atleast 3 character or longer']
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email']
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password must be a atleast 8 character or longer'],
        select:false
    },
    socketId:{
        type:String,
    }
});

userSchema.methods.generateAuthToken = function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;