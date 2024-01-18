import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import Categories from './Component/Categories';
import Context from './Component/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
      <App/>
      <ToastContainer />
    </Context>
    
    </BrowserRouter>
  </React.StrictMode>
);



