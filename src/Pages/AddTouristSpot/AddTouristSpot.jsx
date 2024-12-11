import logo from "../../assets/LoginImg/logo.png";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
const AddTouristSpot = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const touristSpotData = {
        email: user?.email,
        name: user?.displayName,
        image: data.photoURL,
        spotName: data.spotName,
        countryName: data.countryName,
        location: data.location,
        description: data.description,
        averageCost: parseFloat(data.avgCost),
        seasonality: data.seasonality,
        travelTime: data.travelTime,
        totalVisitorsPerYear: parseInt(data.visitors, 10),
      };
      // Post the data

      const response = await axiosPublic.post(
        "/addTouristSpot",
        touristSpotData
      );
      console.log("Response: ", response.data);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          title: "Tourist Spot Added successfully.",
          icon: "success",
        });
      }
      // Optional: Add success message or redirect
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <>
      <div className="bg-[#0791BED9] min-h-screen flex justify-center items-center">
        <div className="mt-32 bg-base-200 md:w-1/2 mx-auto rounded">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body shadow-lg"
          >
            <label className="label flex justify-center">
              <img src={logo} alt="" />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
              {/*photoURL*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  {...register("photoURL")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* tourist spot name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Tourist Spot Name"
                  {...register("spotName")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Country name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Country Name"
                  {...register("countryName")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Location */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  {...register("location")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Short description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Average cost */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Average cost</span>
                </label>
                <input
                  type="text"
                  placeholder="Average cost"
                  name="avgCost"
                  {...register("avgCost")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Seasonality */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seasonality</span>
                </label>
                <input
                  type="text"
                  placeholder="Seasonality"
                  {...register("seasonality")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Travel time */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Travel time</span>
                </label>
                <input
                  type="text"
                  placeholder="Travel time"
                  {...register("travelTime")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Total Visitors Per Year */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Visitors Per Year</span>
                </label>
                <input
                  type="number"
                  placeholder="Total Visitors Per Year"
                  {...register("visitors")}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#1563DF] text-white text-base"
              >
                ADD THIS TOURISTS SPOT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTouristSpot;
