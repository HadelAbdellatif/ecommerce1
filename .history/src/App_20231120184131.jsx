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



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

