import { Navigate, createHashRouter } from "react-router-dom";
import { Header } from "./component/header";
import { ContactPage, HomePage, ProjectPage } from "./pages";

const allRoutes = createHashRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: "error",
    children: [
      {
        errorElement: "error",
        children: [
          { path: "/", element: <Navigate to="home" /> },
          { path: "home", element: <HomePage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "project", element: <ProjectPage /> },
          { path: "resume", element: "hello mf" },
        ],
      },
    ],
  },
]);

export default allRoutes;
