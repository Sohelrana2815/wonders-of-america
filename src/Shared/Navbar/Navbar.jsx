import { BiGlobe } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar absolute z-10 top-0 left-1/2 transform -translate-x-1/2 e max-w-screen-xl md:pt-10">
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
            <a className="md:text-2xl flex items-center gap-3 text-white">
              <BiGlobe className="md:text-4xl" /> Wonders Of America
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
