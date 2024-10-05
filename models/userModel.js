const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const UserSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    phno:{
        type:Number,
        required:false,
        default:910000000,
    },
    address:{
        type:String,
        required:false,
        default:''
    }
});

UserSchema.pre('save',async function(next){
    try{
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(this.password,salt);
        this.password = hashpass;
    }catch(error){
        throw error;
        console.log(error);
    }
});




const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;