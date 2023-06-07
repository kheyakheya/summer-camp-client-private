import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const {data:classes=[], refetch, isLoading:loading}=useQuery(
        {
            queryKey: ['classes'],
            queryFn: async ()=>{
                const res= await fetch('http://localhost:5000/classes');
                return  res.json();
            }
        }
    )
    return [classes, refetch, loading]
    
};

export default useClasses;