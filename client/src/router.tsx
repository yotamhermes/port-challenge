import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import SchemasContainer from "./components/Admin/Schemas/SchemasContainer";

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
        element: <SchemasContainer />,
      },
    ],
  },
]);

export default router;
