import { Link, useLoaderData } from "react-router-dom";
import SectionsTitle from "../../../Components/SectionTitle/SectionTitle";

const BannerCart = () => {
  const contests = useLoaderData();
  // console.log(contests);

  return (
    <div className="mt-7 container mx-auto">
      <SectionsTitle
        subHeading="must popular participation"
        heading="top popular contest"
      ></SectionsTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
        {
            contests.map(contest => <div key={contest._id}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg w-[320px]"
                      src={contest?.img}
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <div className="flex justify-between items-center">
                      <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          ca.: {contest.name}
                        </h5>
                      </a>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex justify-between items-center">
                        <div className="text-center bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-2 rounded ">
                          quan: {contest.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        $ {contest.price}
                      </span>
                      <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>)
        }
      </div>
    </div>
  );
};

export default BannerCart;
