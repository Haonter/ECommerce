import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import InsertProduct from './pages/InsertProduct';
import UpdateProduct from './pages/UpdateProduct';
import Carrito from './pages/Carrito';
import CarritoAdmin from './pages/CarritoAdmin';
import Verify from './pages/Recovery';
import Recovery from './pages/Recovery2';
import About from './pages/About'
import AboutAdmin from './pages/AboutAdmin'
import AboutUser from './pages/AboutUser'
import AboutProduct from './pages/AboutProduct'
import AboutProductAdmin from './pages/AboutProductAdmin'
import DeleteProduct from './pages/DeleteProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<UserHome  />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/panel" element={<AdminPanel />} />
      <Route path="/insertproduct" element={<InsertProduct />} />
      <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route path="/deleteproduct/:id" element={<DeleteProduct />} />
      <Route path="/about-product" element={<AboutProduct />} />
      <Route path="/about-product-admin" element={<AboutProductAdmin />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/carrito-admin" element={<CarritoAdmin/>} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/about" element={<About />} />
      <Route path="/about-admin" element={<AboutAdmin />} />
      <Route path="/about-us" element={<AboutUser />} />
      
  </Routes>
</BrowserRouter>
);


