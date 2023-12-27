import { Navigate, createHashRouter } from "react-router-dom";
import ContactPage from "./pages/contact-page";
import HomePage from "./pages/home-page";
import ProjectPage from "./pages/project-page";

const allRoutes = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: "Error",
    children: [
      {
        errorElement: "Error",
        children: [
          { path: "/", element: <Navigate to="home" /> },
          { path: "home", element: <HomePage /> },
          { path: "projects", element: <ProjectPage /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
]);

export default allRoutes;
