import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layouts/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        
      }
    ]
  },

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

