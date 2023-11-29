import { Link } from "react-router-dom";

const AllContestCart = ({ contest }) => {
  const { name, img, attempted, type, description, _id } = contest;
  // console.log(contest)

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img src={img} alt="img-blur-shadow" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Name: {name}
        </h5>
        <div className="flex items-center justify-between">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            participants: {attempted}
          </h5>
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            type: {type}
          </h5>
        </div>
        <p className="block ">{description.slice(0, 100)}....</p>
      </div>
      <div className="p-6 pt-0">
        <Link
            to={`/singleContest/${_id}`}
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default AllContestCart;
