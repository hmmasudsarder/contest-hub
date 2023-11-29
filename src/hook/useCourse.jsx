import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCourse = () => {
    const axiosSecure = useAxiosSecure()
    const{data: course = []} = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contest');
            return res.data;
        }
    });
    return [course]
};

export default useCourse;