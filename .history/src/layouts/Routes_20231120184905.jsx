
import {createBrowserRouter, RouterProvider, } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./../components/web/home/Home.jsx";
import Categories from "./../components/web/categories/Categories.jsx";

import DashboardLayout from "../DashboardLayout.jsx";
import DashboardHome from "../components/dashboard/home";
import DashboardCategories from '../components/dashboard/categories/Categories';

export const router = createBrowserRouter([
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
        },
        {
          path:'*',
          element: <h2 className='fst-italic'>page not found --- web</h2>
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
          element: <h2 className='fst-italic'>page not found --- dashboard</h2>
        }
      ]
    }
  
  ]);