import { BiLocationPlus } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { PiCurrencyDollar } from "react-icons/pi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AosAnimation from "../../Components/AosAnimation/AosAnimation";
const AllTouristSpotCard = ({ touristSpot }) => {
  const {
    image,
    spotName,
    description,
    location,
    countryName,
    averageCost,
    _id,
  } = touristSpot;
  if (!touristSpot) {
    return <p>No Added Tourist Spot Yet.</p>;
  }
  return (
    <>
      <AosAnimation animation="fade">
        <div className="h-full md:w-96 shadow-xl">
          <figure className="lg:h-[25vh]">
            <img
              src={image}
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl md:text-3xl font-bold">{spotName}</h2>
            <p>{description}</p>

            <div className="flex justify-between">
              <p className="flex items-center gap-x-2">
                <BiLocationPlus />
                {location}
              </p>
              <p className="flex items-center gap-x-2">
                <BsGlobe2 />
                {countryName}
              </p>
              <p className="flex items-center gap-x-2">
                <PiCurrencyDollar />
                {averageCost}
              </p>
            </div>
            <Link to={`/addedSpotDetails/${_id}`}>
              <div className="flex justify-center mt-8">
                <button className="btn w-full rounded-none bg-[#FFE893] text-black hover:bg-[#FFD700]">
                  View Details
                </button>
              </div>
            </Link>
          </div>
        </div>
      </AosAnimation>
    </>
  );
};

AllTouristSpotCard.propTypes = {
  touristSpot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    spotName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    averageCost: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllTouristSpotCard;
