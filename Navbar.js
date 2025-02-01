import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
function Navbar(){
    const navigate = useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <nav className="navbar">
            <h1>Мой не сам</h1>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/order">Оставить заявку</Link></li>
                <li><Link to="/admin/order">Список заявок</Link></li>
                {localStorage.getItem('token')?(
                    <li><buttom onClick={handleLogout}>Выйти</buttom></li>
                ):(
                    <>
                    <li><Link to="/login">Войти</Link></li>
                    <li><Link to="/register">Регистрация</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}
export default Navbar;