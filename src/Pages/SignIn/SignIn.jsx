import { Link } from "react-router-dom";
import loginImg from "../../assets/LoginImg/loginImg.jpg";
import logo from "../../assets/LoginImg/logo.png";

const SignIn = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>{" "}
        {/* Optional overlay for better contrast */}
        <div className="hero-content flex-col w-full justify-center items-center ">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-none">
            <form className="card-body ">
              <div className="form-control">
                <label className="label flex justify-center">
                  <span className="label-text text-2xl font-medium">
                    <img src={logo} alt="" />
                  </span>
                </label>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#1563DF] text-white text-base rounded-none my-4"
                >
                  Login
                </button>
                <p className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/signUp"
                    className="underline text-blue-600 text-lg"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
