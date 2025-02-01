const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    details:String,
    status:{type:String,default:'pending'},
    createAt:{
        type:DataTransfer,default:Data.now
    },
});
module.exports=mongoose.model('Order',OrderSchema); 