import signUpImg from "../../assets/SignUpImg/signUpImg.jpg";
import logo from "../../assets/LoginImg/logo.png";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoURL, email, password } = data;
    createNewUser(email, password).then((result) => {
      console.log(result.user);

      updateUserProfile(name, photoURL).then(() => {
        console.log("Update successfully");
        if ((name, photoURL)) {
          reset();
          toast.success("Successfully Created A New User");
        }
      });
    });
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${signUpImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>{" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body bg-base-100 lg:w-3/4 xl:w-1/2 "
        >
          <label className="label flex justify-center">
            <span className="label-text text-2xl font-medium">
              <img src={logo} alt="" />
            </span>
          </label>
          {/* main container div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className="input input-bordered rounded-none"
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
                {...register("email")}
                placeholder="Email"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            {/* photoURL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="PhotoURL"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "Password must have an uppercase latter, a lowercase latter, and be at least 6 characters long",
                  },
                })}
                placeholder="Your Password"
                className="input input-bordered rounded-none"
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#1563DF] text-white text-base rounded-none my-4"
            >
              Sign up
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/signIn" className="underline text-blue-600 text-lg">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default SignUp;
