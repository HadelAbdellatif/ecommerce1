import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import {router} from ''


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

