import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const ManiLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ManiLayout;
