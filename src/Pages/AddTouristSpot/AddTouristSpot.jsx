import logo from "../../assets/LoginImg/logo.png";
import { useForm } from "react-hook-form";
const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="bg-[#0791BED9] min-h-screen flex justify-center items-center">
        <div className="mt-32 bg-base-200 md:w-1/2 mx-auto rounded">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-lg">
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
                  name="photoURL"
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
                  name="spotName"
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
                  name="countryName"
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
                  name="location"
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
                  name="description"
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
                  placeholder="Average cost"
                  name="seasonality"
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
                  name="time"
                  {...register("seasonality")}
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
                  type="number
                "
                  placeholder="Total Visitors Per Year"
                  name="visitors"
                  {...register("visitors")}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1563DF] text-white text-base">
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
