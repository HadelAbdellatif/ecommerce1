
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