import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const token = localStorage.getItem("access-token")
    const {user,} = useContext(AuthContext);
    // use axios secure with react query
    const { data: isAdmin = [], isLoading: load, refetch } = useQuery({
        queryKey: ["admin"],
        queryFn: async () => {
            const res = await fetch(`https://photofy-server.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    console.log(isAdmin)
    return [isAdmin, load, refetch]
}

export default useAdmin;