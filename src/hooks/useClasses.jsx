import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const {data:classes=[], refetch, isLoading:loading}=useQuery(
        {
            queryKey: ['classes'],
            queryFn: async ()=>{
                const res= await fetch('https://assignment-twelve-server-puce.vercel.app/classes');
                return  res.json();
            }
        }
    )
    return [classes, refetch, loading]
    
};

export default useClasses;