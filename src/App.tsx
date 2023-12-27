import { RouterProvider } from "react-router-dom";
import allRoutes from "./routes";

const App = () => {
  return <RouterProvider router={allRoutes} />;
};

export default App;
