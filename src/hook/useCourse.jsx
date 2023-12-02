import {useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";


const useCourse = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const{ refetch, data: course = []} = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parces?email=${user?.email}`);
            return res.data;
        }
    });
    return [course, refetch]
};

export default useCourse;