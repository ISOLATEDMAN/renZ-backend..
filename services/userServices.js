const Usermodel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserServices{
    static async regUser(email,password,username){
        try{
            
            const createUser = new Usermodel({
                email,
                password,
                username,
            });
            return await createUser.save();
        }catch(error){
            throw error;
        }
    }

    static async authUser(email,password){
        try{
            const user = await Usermodel.findOne({email});
            if(!user){
                throw new Error('User not found');
            }
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                throw new Error('Invalid password');
            }
            const token = jwt.sign(
                {id:user._id,email:user.email},
                process.env.JWT_SECRET_KEY,
                {expiresIn:'1h'}
            );
            return token;
        }catch(error){
            throw error;
        }
    }
}


module.exports = UserServices;