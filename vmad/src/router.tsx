import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About/About";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>Error! Can't render site.</div>,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
