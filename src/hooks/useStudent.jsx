import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const token = localStorage.getItem("access-token")
    const {user, loading} = useContext(AuthContext);
    // use axios secure with react query
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`, {
                headers:{
                    authorization: `bearer ${token}`
                }
            });
            console.log(res)
            return res;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;