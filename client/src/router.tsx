import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import AdminContainer from "./components/Admin/Admin/AdminContainer";

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
        element: <AdminContainer />,
      },
    ],
  },
]);

export default router;
