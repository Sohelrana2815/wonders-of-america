import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/MainLayout/ManiLayout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManiLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "allTouristSpot",
        element: <AllTouristSpots />,
      },
    ],
  },
]);

export default router;
