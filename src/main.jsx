import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import RecipeProvider from './context/RecipeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RecipeProvider>
    <App />
    <ToastContainer />
  </RecipeProvider>
</BrowserRouter>

 
);
