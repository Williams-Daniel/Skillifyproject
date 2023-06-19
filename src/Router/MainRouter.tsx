import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import HomePage from "../Pages/HomePage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default MainRouter;
