import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const MyListsTable = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [myTouristSpots, setMyTouristSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/myLists?email=${user?.email}`)
      .then((response) => setMyTouristSpots(response.data))
      .catch((error) => console.error(error));
  }, [axiosPublic, user?.email]);

  // react hook form

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const id = selectedSpot._id;
    const myTouristSpot = {
      image: data.image,
      spotName: data.spotName,
      countryName: data.countryName,
      location: data.location,
      description: data.description,
      averageCost: data.averageCost,
      seasonality: data.seasonality,
      travelTime: data.travelTime,
      totalVisitorsPerYear: parseInt(data.totalVisitorsPerYear),
    };

    try {
      const response = await axiosPublic.patch(
        `/updateMySpot/${id}`,
        myTouristSpot
      );

      if (response.data.modifiedCount > 0) {
        reset();
        closeModal();
        toast.success("Tourist spot updated successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTouristSpot = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axiosPublic.delete(`/myLists/${id}`);
          console.log("Delete Response:", response.data);

          if (response.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Tourist Spot has been deleted.",
              icon: "success",
            });

            setMyTouristSpots((prevSpot) =>
              prevSpot.filter((spot) => spot._id !== id)
            );
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (spot) => {
    setSelectedSpot(spot);
    document.getElementById("my_modal_5").showModal();
  };

  const closeModal = () => {
    setSelectedSpot(null);
    document.getElementById("my_modal_5").close();
  };

  return (
    <>
      <Toaster />

      <div className="mt-32 max-w-screen-2xl mx-auto">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Spot Name</th>
                <th>Location</th>
                <th>Country Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myTouristSpots.map((myTouristSpot, index) => (
                <tr key={myTouristSpot._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{myTouristSpot.spotName}</td>
                  <td>{myTouristSpot.location}</td>
                  <td>{myTouristSpot.countryName}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-[#1563DF] text-white"
                      onClick={() => openModal(myTouristSpot)}
                    >
                      <FaPen />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteTouristSpot(myTouristSpot._id)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      <FaTrashCan />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Tourist Spot</h3>
            {selectedSpot && (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Main container div */}
                  <div className="grid md:grid-cols-2 gap-x-3">
                    {/* IMAGE */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        {...register("image")}
                        defaultValue={selectedSpot.image}
                        className="input input-bordered"
                      />
                    </div>
                    {/* SpotName */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Spot Name</span>
                      </label>
                      <input
                        type="text"
                        {...register("spotName")}
                        defaultValue={selectedSpot.spotName}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Country Name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Country Name</span>
                      </label>
                      <input
                        type="text"
                        {...register("countryName")}
                        defaultValue={selectedSpot.countryName}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Location*/}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Location</span>
                      </label>
                      <input
                        type="text"
                        {...register("location")}
                        defaultValue={selectedSpot.location}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Description*/}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Short Description</span>
                      </label>
                      <input
                        type="text"
                        {...register("description")}
                        defaultValue={selectedSpot.description}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Average cost*/}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Average cost</span>
                      </label>
                      <input
                        type="number"
                        {...register("averageCost")}
                        defaultValue={selectedSpot.averageCost}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Seasonality*/}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Seasonality</span>
                      </label>
                      <input
                        type="text"
                        {...register("seasonality")}
                        defaultValue={selectedSpot.seasonality}
                        className="input input-bordered"
                      />
                    </div>
                    {/* Travel time*/}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Travel Time</span>
                      </label>
                      <input
                        type="text"
                        {...register("travelTime")}
                        defaultValue={selectedSpot.travelTime}
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  {/* Total Visitors PerYear*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Total Visitors Per Year
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("totalVisitorsPerYear")}
                      defaultValue={selectedSpot.totalVisitorsPerYear}
                      className="input input-bordered"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn mt-5 bg-[#0791BE] text-white uppercase rounded-none"
                    >
                      Update This Tourist Spot
                    </button>
                  </div>
                </form>
              </div>
            )}
            <div className="modal-action">
              <button
                className="btn hover:bg-red-600 hover:text-white"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyListsTable;
