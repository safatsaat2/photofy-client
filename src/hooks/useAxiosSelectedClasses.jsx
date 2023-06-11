import { useQuery } from "@tanstack/react-query";

const useAxiosSelectedClasses = (email) => {
        const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["selectedClasses"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selected-classes/${email}`);
            return res.json();
        }
    })
    return [classes, loading, refetch]
};

export default useAxiosSelectedClasses;