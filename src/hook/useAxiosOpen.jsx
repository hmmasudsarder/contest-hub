import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'http://localhost:4000'
})
const useAxiosOpen = () => {
    return axiosOpen;
};

export default useAxiosOpen;