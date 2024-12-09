import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../Layout/MainLayout/ManiLayout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManiLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
