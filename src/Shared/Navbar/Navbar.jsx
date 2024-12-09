import { BiGlobe } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  // Logout function
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout successfully!",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center bg-black">
        <span className="loading loading-dots loading-lg text-[#1563DF]"></span>
      </div>
    );
  }
  const navLinks = (
    <>
      <div className="lg:flex lg:text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allTouristSpot">All Tourist Spot</NavLink>
        </li>
        <li>
          <NavLink to="/addTouristSpot">Add Tourist Spot</NavLink>
        </li>
        <li>
          <NavLink to="/myList">My List</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <>
      <div className="navbar absolute z-10 top-0 left-1/2 transform -translate-x-1/2 e max-w-screen-xl md:pt-10 bg-black bg-opacity-15 lg:fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-3xl text-white block lg:hidden mr-4"
            >
              <MdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <p className="md:text-2xl flex items-center gap-3 text-white">
              <BiGlobe className="md:text-4xl" /> Wonders Of America
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              {/* avatar */}
              <div className="avatar" title={user.displayName}>
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src={user ? user.photoURL : ""} alt={user.displayName} />
                </div>
              </div>
              {/* button */}
              <button
                onClick={handleLogout}
                className="btn btn-outline rounded-none hover:bg-[#F56960] text-white px-8 text-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <button className="btn rounded-none bg-[#F56960] text-white border-none px-8">
                  Login
                </button>
              </Link>
              <Link to="/signUp">
                <button className="btn btn-outline rounded-none hover:bg-[#0791BE] text-white px-8">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
