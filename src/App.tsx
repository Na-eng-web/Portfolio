import { RouterProvider } from "react-router-dom";
import "./App.css";
import allRoutes from "./routes";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={allRoutes} />
    </div>
  );
};

export default App;
