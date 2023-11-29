import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
  const location  = useLocation();
  if(loading){
    return  <div className="h-screen flex justify-center items-center">
    <Dna
      visible={true}
      height="380"
      width="380"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;