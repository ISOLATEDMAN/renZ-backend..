const UserServices = require('../services/userServices');

exports.register = async(req,res,next)=>{
    try{
        const {email,password,username} = req.body;
        await UserServices.regUser(email,password,username);
        res.json({status:true,succes:"User Regeistered succesfully"});
   
    }catch(error){
        res.status(500).json({ status: false, error: error.message });
    }
}

exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const token = await UserServices.authUser(email,password);
        
        res.json({status:true,succes:"User Logged succesfully",token});
    }catch(error){
        res.status(400).json({ status: false, error: error.message });
    }
}