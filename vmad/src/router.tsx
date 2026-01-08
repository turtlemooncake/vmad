import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Me from "./pages/Me/Me";
import CV from "./pages/CV/CV";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>Error! Can't render site.</div>,
    children: [
      { path: "/", element: <Me /> },
      { path: "/me", element: <Me /> },
      { path: "/cv", element: <CV /> },
    ],
  },
]);
