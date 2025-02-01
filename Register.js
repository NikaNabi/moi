import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Login(){
    const [username,setUsername] =useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phone,setPhone]=useState('');
    const navigate=useNavigate();

    const handleSublit=async(e)=>{
        e.preventDefault();
        const res=await
        axios.post('http://localhoat:5000/api/auth/register',{username,email,password,phone});
        localStorage.setItem('token',res.data.token);
        navigate('/order');
    };
    return(
        <div className="container">
            <h2>Регистрация</h2>
            <form onSubmit={handleSublit}>
                <input type="text" placeholder="ФИО" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="text" placeholder="Электронная почта" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="Номер телефона" onChange={(e)=>setPhone(e.target.value)}/>
                <input type="text" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Регистрация</button>
            </form>
        </div>
    );}
export default Login;