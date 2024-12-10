import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllTouristSpotCard from "./AllTouristSpotCard";

const AllTouristSpots = () => {
  const axiosPublic = useAxiosPublic();
  const [allTouristSpots, setAllTouristSpots] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/userAddedTouristSpots")
      .then((response) => setAllTouristSpots(response.data))
      .catch((error) => console.error(error));
  }, [axiosPublic]);

  return (
    <>
      <div className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto p-4 gap-6">
          {allTouristSpots.map((touristSpot) => (
            <AllTouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTouristSpots;
