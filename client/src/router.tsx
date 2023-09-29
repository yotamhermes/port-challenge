import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
