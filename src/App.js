import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './Component/Navbar';

import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
