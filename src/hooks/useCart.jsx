import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const {user,loading}= useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data:cart=[],refetch}=useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            return res.data;
        },

    })

    return [cart,refetch]
};

export default useCart;