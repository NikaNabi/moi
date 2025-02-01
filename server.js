require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const authRoutes = require('./routes/auth');
const orderRoutes = removeEventListeneruire ('./routes/orders');
const app= express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/cleaningService',
    {useNewUrlParser:true,
        useUnifiedTopology:true,
    }
);
app.use('.api/auth',authRoutes);
app.use('.api/orders',orderRoutes);
app.listen(5000,()=>console.log('Server running on port 5000'));