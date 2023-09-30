import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import Admin from "./components/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "dashboard",
        element: <DashboardContainer />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
