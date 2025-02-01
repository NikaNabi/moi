import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function Login(){
    const [username,setUsername] =useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSublit=async(e)=>{
        e.preventDefault();
        const res=await
        axios.post('http://localhoat:5000/api/auth/login',{username,password});
        localStorage.setItem('token',res.data.token);
        navigate('/order');
    };
    return(
        <div className="container">
            <h2>Авторизация</h2>
            <form onSubmit={handleSublit}>
                <input type="text" placeholder="Логин" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="text" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Войти</button>
            </form>
        </div>
    );}
export default Login;