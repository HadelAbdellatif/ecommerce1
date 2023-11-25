import React from 'react'
import {router} from "./layouts/routes"
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import {createBrowserRouter, RouterProvider, } from "react-router-dom";



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

