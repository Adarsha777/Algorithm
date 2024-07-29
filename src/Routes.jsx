import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Homepage/Homepage";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default MainRoute;
