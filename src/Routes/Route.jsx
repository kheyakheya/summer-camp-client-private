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
import Instructors from "../Pages/Instructors";
import AddClass from "../Pages/AddClass";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../Pages/AllClasses";
import InstructorClass from "../Pages/InstructorClass";
import ApprovedClasses from "../Pages/ApprovedClasses";
  
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
        path: '/instructor',
        element: <Instructors></Instructors>
       },
       
       {
        path:'/classes',
        element:<ApprovedClasses></ApprovedClasses>
       },
     
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
          path: 'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
        {
          path: 'allClasses',
          element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
         },
         {
          path: 'addClass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
         },
         {
          path: 'instructorClass',
          element:<InstructorRoute><InstructorClass></InstructorClass></InstructorRoute>
         }
        
      ]
    }
  ]);