import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Components/Shared/Nabvar/Navbar";
import SinglePageDetails from "./SinglePageDetails";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import useCourse from "../../../hook/useCourse";
import CalenderCart from "./CalenderCart";

const SinglePage = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { name, img, price, _id } = course;
  const [, refetch] = useCourse()
  const handleAddToCart = () => {
    const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      img,
      price,
    }
    axiosSecure.post('/parces', cartItem)
    .then( res => {
      if(res.data.acknowledged){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${name} Your contest has been saved`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl mb-2">{name}</h1>
        <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
          <img src={img} className="object-cover w-full" alt="" />
        </div>
        <div className="grid md:grid-cols-7 md:gap-10 mt-8">
          
          <SinglePageDetails course={course}></SinglePageDetails>
          
          <div className="md:col-span-3 order-first sm:order-last mb-10">
            <CalenderCart course={course}></CalenderCart>
            
          </div>
        </div>
        <Link
          to={`/dashboard/participated`}
          onClick={handleAddToCart}
          className="select-none rounded-lg bg-pink-500 py-3 px-16 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default SinglePage;
