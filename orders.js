const express=require('express');
const Order = require('./models/Order');
const router =express.Router();
router.post('/',async (req,res)=>{
    const Order = new Order (req.body);
    await Order.save();
    res.status(201).json({
        messange:'Order created'
    });
});
router.get ('/',async (req,res)=>{
    const orders =await Order.find();
    res.json(orders);
});
module.exports=router;