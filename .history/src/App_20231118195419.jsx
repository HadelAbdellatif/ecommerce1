import React from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <h2>Home Page</h2>,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

