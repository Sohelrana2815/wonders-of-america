import { BiRightArrow } from "react-icons/bi";
import { BsClock, BsGlobe } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const TouristSpotsCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    travel_time,
  } = touristSpot;
  return (
    <>
      <div className="md:h-[600px] mt-24 relative shadow-lg">
        {/* Image content */}
        <div className="h-3/5 border relative">
          <img src={image} className="h-full w-full object-cover" alt="" />
          <p className="absolute top-0 right-0 bg-[#F56960] text-white w-full sm:w-1/2 p-3 text-sm sm:text-lg mt-4 text-center font-bold">
            ${average_cost}/per person
          </p>
        </div>

        <div className="text-white bg-[#0791BE] md:h-14 py-3">
          <div className="flex flex-wrap justify-evenly text-xs sm:text-base">
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
        <div className="absolute bottom-6 w-full px-2">
          <h2 className="text-base sm:text-2xl font-medium hidden md:block">
            {tourist_spot_name}
          </h2>
          <p className="text-sm sm:text-base hidden md:block">
            {short_description}
          </p>
          <Link to={`/touristSpotDetails/${_id}`}>
            <button className="btn w-full bg-[#101F46] text-white mt-2 flex items-center justify-center gap-x-2">
              View Details
              <BiRightArrow />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
TouristSpotsCard.propTypes = {
  touristSpot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tourist_spot_name: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    average_cost: PropTypes.string.isRequired,
    travel_time: PropTypes.string.isRequired,
  }).isRequired,
};

export default TouristSpotsCard;
