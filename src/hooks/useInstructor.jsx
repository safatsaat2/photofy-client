import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const token = localStorage.getItem("access-token")
    const {user} = useContext(AuthContext);


    const { data: isInstructor = [], isLoading: load, } = useQuery({
        queryKey: ["instructor"],
        queryFn: async () => {
            const res = await fetch(`https://photofy-server.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    console.log(isInstructor)
    return [isInstructor, load]
};

export default useInstructor;