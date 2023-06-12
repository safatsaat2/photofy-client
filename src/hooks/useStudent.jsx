import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const token = localStorage.getItem("access-token")
    const {user} = useContext(AuthContext);


    const { data: isStudent = [], isLoading: load, refetch } = useQuery({
        queryKey: ["student"],
        queryFn: async () => {
            const res = await fetch(`https://photofy-server.vercel.app/users/student/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    console.log(isStudent)
    return [isStudent, load, refetch]
};

export default useStudent;