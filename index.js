import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderForm from './pages/OrderForm.js';
import OrderList from './pages/OrderList.js';
 const App =()=>
 (
  <Router>
    <Navbar/>
    <Routes>
      <Route path ='/login' element={<Login/>} />
      <Route path ='/register' element={<Register/>} />
      <Route path ='/order' element={<OrderForm/>} />
      <Route path ='/admin' element={<OrderList/>} />
    </Routes>
  </Router>
 );
 
 ReactDOM.createRoot(document.getElementById('root')).render(<App/>);