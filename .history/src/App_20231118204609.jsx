import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './components/web/home/Home';
import Categories from './components/web/categories/Categories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'home',
        element: <Home /> 
      },
      {
        path:'categories',
        element: <Categories /> 
      }
    ]
  },
  {
    
  }

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

