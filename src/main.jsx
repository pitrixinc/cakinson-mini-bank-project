import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />

    <App />
    </BrowserRouter>
  </React.StrictMode>
);
