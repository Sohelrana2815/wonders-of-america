import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/MainLayout/ManiLayout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";

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
    ],
  },
]);

export default router;
