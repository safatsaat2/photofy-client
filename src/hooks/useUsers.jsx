import { useQuery } from "@tanstack/react-query";

const useUsers = () => {

    const token = localStorage.getItem("access-token")
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('https://photofy-server.vercel.app/users', {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    return [users,  refetch,loading]
};

export default useUsers;