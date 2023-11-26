import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleLogin = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
            // const userInfo = {
            //     email: res.user?.email,
            //     name: res.user?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then((res) => {console.log(res)
            navigate('/')
            // })
        })
        .catch(error => {console.log(error.message)})
    }
    return (
        <div>
            <div className="p-2 text-center">
            <div className="divider"></div>
            <button onClick={handleLogin} className="btn mb-10">
                GooGle
                <FcGoogle className='text-3xl'></FcGoogle>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;