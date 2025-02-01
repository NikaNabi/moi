const mongoose=require('mongoose');
const UserSchema =new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});
modile,exports=mongoose.module('User',UserSchema);