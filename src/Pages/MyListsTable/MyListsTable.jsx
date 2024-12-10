import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const MyListsTable = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [myTouristSpots, setMyTouristSpots] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`/myLists/${user?.email}`)
      .then((response) => setMyTouristSpots(response.data))
      .catch((error) => console.error(error));
  }, [axiosPublic, user?.email]);

  return (
    <div className="mt-32 max-w-screen-2xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <p>No.</p>
              </th>
              <th>Spot Name</th>
              <th>Location</th>
              <th>Country Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myTouristSpots.map((myTouristSpot, index) => (
              <tr key={myTouristSpot._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <p>{myTouristSpot.spotName}</p>
                </td>
                <td>
                  <p>{myTouristSpot.location}</p>
                </td>
                <td>
                  <p>{myTouristSpot.countryName}</p>
                </td>
                <td>
                  <span className="btn btn-sm bg-[#1563DF] text-white">
                    <FaPen />
                  </span>
                </td>
                <td>
                  <span className="btn btn-sm bg-red-600 text-white">
                    <FaTrashCan />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListsTable;
