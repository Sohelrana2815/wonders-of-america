import { useLoaderData } from "react-router-dom";
import travel from "../../assets/touristSpotDetailImg/travel.jpg";
import { BsGlobe, BsPeople } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { GrCurrency } from "react-icons/gr";
const TouristSpotDetails = () => {
  const touristSpots = useLoaderData();
  const {
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = touristSpots;
  console.log(touristSpots);

  return (
    <>
      <div className="my-32 relative">
        <img
          src={travel}
          className="w-full h-[300px] md:h-[500px] object-cover"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-white text-3xl md:text-7xl font-bold">
            Package Detail
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto md:mt-20 flex flex-col md:flex-row px-4 md:px-0 space-y-10 md:space-y-0 md:gap-x-10 ">
        {/* 1st div */}
        <div className="md:w-3/5 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold pb-2">
            {tourist_spot_name}
          </h2>
          <div className="relative">
            <img src={image} className="w-full" alt="" />
            <div className="flex flex-wrap md:flex-nowrap items-center justify-evenly py-5 text-white bg-[#0791BE]">
              <p className="flex items-center text-sm md:text-lg">
                <TiWeatherSunny />
                {seasonality}
              </p>
              <p className="flex items-center text-sm md:text-lg gap-x-2">
                <FiClock />
                {travel_time}
              </p>
              <p className="flex items-center text-sm md:text-lg">
                <CiLocationOn />
                {location}
              </p>
            </div>
          </div>
          <div className="pb-8">
            <p className="text-xl md:text-2xl font-medium">Description:</p>
            <p className="text-base md:text-lg font-medium">
              {short_description}
            </p>
            <div className="divider"></div>
            <p className="text-xl md:text-2xl gap-x-2">Country:</p>
            <p className="font-medium text-base md:text-lg flex items-center gap-x-2">
              <BsGlobe /> {country_name}
            </p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="md:w-3/12 space-y-4">
          <p className="bg-[#F56960] h-16 md:h-20 text-center flex items-center justify-center text-white font-medium gap-x-3 text-sm md:text-base">
            <BsPeople className="text-lg" />
            {totalVisitorsPerYear} visitors/ per year
          </p>
          <p className="bg-[#0791BE] h-16 md:h-20 text-center flex items-center justify-center text-white font-medium gap-x-3 text-sm md:text-base">
            <GrCurrency className="text-lg" /> ${average_cost} / per person
          </p>

          {/* Hero form */}
          <form className="card-body border bg-gray-50">
            <label className="label flex justify-center bg-[#0791BE] py-4">
              <span className="label-text text-base text-white">Book Now</span>
            </label>
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1563DF] text-white">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TouristSpotDetails;
