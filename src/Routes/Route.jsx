import {
    createBrowserRouter,
  } from "react-router-dom";


// import Blog from "../Pages/Blog";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllUsers from "../Pages/AllUsers";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Dummyhome from "../Pages/Dummyhome";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
       {
        path:'/',
        element: <Home></Home>
       },
       {
        path: '/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
       },

      //  {
      //   path: '/blog',
      //   element:<Blog></Blog>
      //  },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/register',
        element: <Register></Register>
       },
       
    ]
    },
    {
      path: '/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path: 'userhome',
          element: <Dummyhome></Dummyhome>

        }
        
      ]
    }
  ]);