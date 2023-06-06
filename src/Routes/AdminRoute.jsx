import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading]=useAdmin();
    const location=useLocation();
    console.log(location);
    if(loading || isAdminLoading){ 
        return (<div className='flex justify-center items-center h-[calc(100vh-68px)]'><button className="btn bg-pink-800 border-none btn-square loading"></button></div>)
    }
    if(user && isAdmin){
        return children;
    }
    
    return ( <Navigate to="/login" state={{from:location}} replace></Navigate>)
   
   

};

export default AdminRoute;