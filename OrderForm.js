import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Order(){
    const [address,setAddess] =useState('');
    const[phone,setPhone]=useState('');
    const[data,setData]=useState('');
    const navigate=useNavigate();

    const handleSublit=async(e)=>{
        e.preventDefault();
        const res=await
        axios.post('http://localhoat:5000/api/auth/odrer',{address,phone,data});
        localStorage.setItem('token',res.data.token);
        navigate('/order');
    };
    return(
        <div className="container">
            <h2>Заявка</h2>
            <form onSubmit={handleSublit}>
                <input type="text" placeholder="Адрес" onChange={(e)=>setAddess(e.target.value)}/>
                <input type="number-phone" placeholder="Номер телефона" onChange={(e)=>setPhone(e.target.value)}/>
                <input type="data" placeholder="Дата" onChange={(e)=>setData(e.target.value)}/>
                <button type="submit">Оставить заявку</button>
            </form>
        </div>
    );}
export default Order;