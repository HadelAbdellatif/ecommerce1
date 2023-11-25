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
    element: <div>Home Page</div>,
  }
]);

export default function App() {
  return (
    <div>App</div>
  )
}

