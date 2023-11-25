import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import {createBrowserRouter, RouterProvider, } from "react-router-dom";

import Layout from './layouts/Layout';
import Home from './components/web/home/Home';
import Categories from './components/web/categories/Categories';

import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './components/dashboard/home/Home';
import DashboardCategories from './components/dashboard/categories/Categories';

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
    path:"/dashboard",
    element: <DashboardLayout />,
    children:[
      {
        path:'home',
        element: <DashboardHome /> 
      },
      {
        path:'categories',
        element: <DashboardCategories /> 
      },
      {
        path:'*',
        element: <h2>page not found --- web</h2>
      }
    ]
  }

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

