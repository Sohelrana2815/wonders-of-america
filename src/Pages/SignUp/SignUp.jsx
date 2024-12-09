import signUpImg from "../../assets/SignUpImg/signUpImg.jpg";
import logo from "../../assets/LoginImg/logo.png";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
                name="name"
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
                name="email"
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
                name="photoURL"
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
                name="password"
                {...register("password")}
                placeholder="Your Password"
                className="input input-bordered rounded-none"
                required
              />
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
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
