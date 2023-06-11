import {
    useQuery,
  } from '@tanstack/react-query'
const useClasses = () => {
    const token = localStorage.getItem("access-token")
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
         const res = await fetch('http://localhost:5000/classes', {headers:{
            authorization : `bearer ${token}`
         }});
        return res.json();
        }
    })
    return [classes, loading, refetch]
};

export default useClasses;