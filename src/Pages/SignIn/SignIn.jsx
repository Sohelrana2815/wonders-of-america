import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/LoginImg/loginImg.jpg";
import logo from "../../assets/LoginImg/logo.png";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AosAnimation from "../../Components/AosAnimation/AosAnimation";

const SignIn = () => {
  const [err, setErr] = useState("");
  const { loginUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  //   react hook form function
  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile();
        reset();
        // Navigate after login
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome Back!",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        setErr("Email or Password invalid please try again");
        console.error(error);
      });
  };
  return (
    <>
      <AosAnimation animation="fade">
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
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
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
                    {...register("email")}
                    placeholder="Email"
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
                    {...register("password")}
                    placeholder="Password"
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
                  {err && <p className="text-red-500">{err}</p>}
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
      </AosAnimation>
    </>
  );
};

export default SignIn;
