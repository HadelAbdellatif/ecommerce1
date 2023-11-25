import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import {createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

