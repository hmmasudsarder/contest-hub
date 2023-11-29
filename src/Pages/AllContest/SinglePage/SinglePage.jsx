import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Components/Shared/Nabvar/Navbar";
import SinglePageDetails from "../SinglePageDetails";
import Calender from "./Calender";

const SinglePage = () => {
  const course = useLoaderData();
  const { name, img,} = course;
  // console.log(course);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl mb-2">{name}</h1>
        <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
          <img src={img} className="object-cover w-full" alt="" />
        </div>
        <div className="flex gap-4 gird grid-cols-1 md:grid-cols-7 md:gap-10 mt-8">
          <SinglePageDetails course={course}></SinglePageDetails>
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <Calender></Calender>
          </div>
        </div>
        <Link to="">Register</Link>
      </div>
    </div>
  );
};

export default SinglePage;
