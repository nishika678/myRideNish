const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,'First Name must be a atleast 3 character or longer']
        },
        lastname:{
            type:String,
            minLength:[3,'Last Name must be a atleast 3 character or longer']
        }
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
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive','suspended'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 characters long']
        },
        plate:{
            type:String,
            required:true,
            unique:true,
            minlength:[3,'Plate must be atleast 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, 'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['Car','Moto','Auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

module.exports = mongoose.model('Captain',captainSchema);