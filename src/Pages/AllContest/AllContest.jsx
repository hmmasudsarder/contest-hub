import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Shared/Nabvar/Navbar";
import AllContestCart from "./AllContestCart";

const AllContest = () => {
    const contests = useLoaderData();
  return (
    <div>
      <Navbar />
      <div
        className="h-screen bg-opacity-70 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/0yCc6Mr/banner-image.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form className="">
          <div className="hero-content text-center text-neutral-content ">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
          </div>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className=" block w-1/2 mx-auto mt-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="md:mr-56 text-white absolute right-3  bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 container mx-auto">
        {
            contests.map(contest => <AllContestCart key={contest._id} contest={contest}></AllContestCart>)
        }
      </div>
    </div>
  );
};

export default AllContest;
