const SinglePageDetails = ({ course }) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
        >
          <div>Hosted by </div>
            <h1>{course?.moderator?.name}</h1>
          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={course?.moderator?.image}
          />
        </div>
        <div
          className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
        >
          {/* <div>{roomData.guests} guests</div> */}
            <div className="text-2xl text-orange-400 font-bold">Attempted: {course?.attempted} </div>
            <div className="text-xl text-green-300 font-bold">PRICE: ${course?.price}</div>
        </div>
      </div>

      <hr />
      <div
        className="
          text-lg font-light text-neutral-500"
      >
        {course?.description}
      </div>
      <hr />
    </div>
  );
};

export default SinglePageDetails;
