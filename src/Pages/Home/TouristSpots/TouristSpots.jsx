import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TouristSpotsCard from "./TouristSpotsCard";

const TouristSpots = () => {
  const axiosPublic = useAxiosPublic();
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/touristSpots")
      .then((response) => setTouristSpots(response.data))
      .catch((error) => console.error(error));
  }, [axiosPublic]);
  return (
    <div>
      <h2 className="text-center text-3xl">{touristSpots.length}</h2>
      <SectionTitle
        subHeading="EXPLORE GREAT PLACES"
        heading="POPULAR PACKAGES"
        info="  Embark on the adventure of a lifetime!       Discover the hidden gems
                of America, from majestic national parks to serene coastal
                towns. Whether you're seeking thrilling hikes, scenic
                drives, or unforgettable cityscape, your journey starts here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-screen-xl mx-auto">
        {touristSpots.map((touristSpot) => (
          <TouristSpotsCard key={touristSpot._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
