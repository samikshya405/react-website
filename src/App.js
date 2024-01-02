import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





import './App.css';
import Navbar from './Component/Navbar';

import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import Footer from './Component/Footer';
import Categories from './Component/Categories';
import ScrollToTop from './Component/ScrollToTop';
import ProductPage from './Component/ProductPage';
import WishList from './Component/WishList';
import Emptycart from './Component/Emptycart';
import Cart from './Component/Cart';


function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/categories' element={<Categories/>}/>
      <Route path='/productPage' element={<ProductPage/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
