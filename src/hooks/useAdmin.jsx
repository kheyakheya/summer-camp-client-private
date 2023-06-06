import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    // const {user}=useContext(AuthContext);
    // const [axiosSecure]=useAxiosSecure();
    // const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
    //     queryKey:['isAdmin', user?.email],
    //     queryFn: async ()=>{
    //         const res= await axiosSecure.get(`/users/admin/${user?.email}`);
    //         console.log('isAdmin', res)
    //         return res.data.admin;
    //     }
      
    // })
    // return [isAdmin, isAdminLoading];
    
    const {user, loading}= useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data:isAdmin, isLoading:isAdminLoading}=useQuery({
        queryKey:['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log("isAdmin",res.data.admin)
            return res.data.admin;

        }

       
    })
   
   
    return [isAdmin, isAdminLoading];
};

export default useAdmin;