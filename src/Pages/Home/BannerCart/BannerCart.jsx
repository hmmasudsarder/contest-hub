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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-6">
        {
            contests.map(contest => <div key={contest._id} className='col-span-1 cursor-pointer group'>
            <Link to={`/singleContest/${contest._id}`}>
            <div className='flex flex-col gap-2 w-full'>
              <div
                className='
                  aspect-square 
                  w-full 
                  relative 
                  overflow-hidden 
                  rounded-xl
                '
              >
                <img
                  className='
                    object-cover 
                    h-full 
                    w-full 
                    hover:scale-110 
                    transition
                  '
                  src={contest.image}
                  alt='contest'
                />
                <div
                  className='
                  absolute
                  top-3
                  right-3
                '
                >
                  
                </div>
              </div>
              <div className='font-semibold text-lg'>{contest.name}</div>
              <div className='font-light text-neutral-500'>
              participants
              </div>
              <div className='flex flex-row items-center gap-1'>
                {contest.description.slice(0, 100)}
              </div>
            </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default BannerCart;
