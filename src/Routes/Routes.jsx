import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/MainLayout/ManiLayout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";
import AddedSpotDetails from "../Pages/AddedSpotDetails/AddedSpotDetails";
import MyListsTable from "../Pages/MyListsTable/MyListsTable";

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
      {
        path: "touristSpotDetails/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/touristSpots/${params.id}`
          ),
      },
      {
        path: "addedSpotDetails/:id",
        element: (
          <PrivateRoute>
            <AddedSpotDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/userAddedTouristSpots/${params.id}`
          ),
      },
      {
        path: "myLists",
        element: (
          <PrivateRoute>
            <MyListsTable />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
