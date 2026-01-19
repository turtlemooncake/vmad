import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Me from "./pages/Me/Me";
import Resume from "./pages/Resume/Resume";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>Error! Can't render site.</div>,
    children: [
      { path: "/", element: <Me /> },
      { path: "/me", element: <Me /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);
