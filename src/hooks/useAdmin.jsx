import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const token = localStorage.getItem("access-token")
    const {user, loading} = useContext(AuthContext);
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            });
            console.log(res)
            return res;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;