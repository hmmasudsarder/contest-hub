import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'https://contest-hub-server-hazel.vercel.app'
})
const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;