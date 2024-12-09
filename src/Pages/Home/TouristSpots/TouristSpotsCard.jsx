import { BiRightArrow } from "react-icons/bi";
import { BsClock, BsGlobe } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

const TouristSpotsCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = touristSpot;
  return (
    <>
      <div className="md:h-[600px] mt-24 relative shadow-lg">
        {/* Image content */}
        <div className="h-3/5 border relative">
          <img src={image} className="h-full w-full object-cover" alt="" />
          <p className="absolute top-0 right-0 bg-[#F56960] text-white w-1/2 p-3 text-lg mt-4 text-center font-bold">
            ${average_cost}/per person
          </p>
        </div>

        <div className="text-white bg-[#0791BE] md:h-14 py-3">
          <div className="flex justify-evenly">
            <p className="flex items-center gap-x-1">
              <BsClock />
              {travel_time}
            </p>
            <p className="flex items-center gap-x-1">
              <FaLocationArrow />
              {location}
            </p>
            <p className="flex items-center gap-x-1">
              <BsGlobe />
              {country_name}
            </p>
          </div>
        </div>

        {/* Text content */}
        <div className="absolute space-y-4 bottom-0">
          <h2 className="md:text-2xl font-medium">{tourist_spot_name}</h2>
          <p className="text-base">{short_description}</p>
          <button className="btn w-full">
            View Details
            <BiRightArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default TouristSpotsCard;
