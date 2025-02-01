const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwedtoken');
const User =require('./modeis/User');
const routes = express.Router();
Router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const user=new User ({username,email,password:hashedPassword});
    await user.save();
        res.json({
            message:'User registed'
        });
});
pouter.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    const user = await User.findOne({
        username
    });
    if (!user||!(await bcrypt.compare(password,user.password)))
    {
        return res.status(400).json ({
            error:'Invaid credentais'
        });
    }
    const token =jwt.sing({
        id:user._id
    },
'secret',{
    expiseln :'1h'
});
res.json({token});
});
module.exports=Router;